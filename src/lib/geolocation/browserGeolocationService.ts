import {
  LOCAL_STORAGE_GEO_LAT_KEY,
  LOCAL_STORAGE_GEO_LON_KEY,
} from "./constants";

export interface GeoCoords {
  lat: number;
  lon: number;
}

type geoDataFromLS = string | null;

type GeoLocationPromiseResult =
  | GeolocationPosition
  | GeolocationPositionError
  | Error;

class BrowserGeoLocationService {
  // test if browser have Geolocation API
  private geoLocationAPIIsAvailable: boolean = "geolocation" in navigator;

  /* 
     false means "not allowed"
     true means "allowed" 
  */
  geoLocationPermission: Boolean = false;

  geoCoords: GeoCoords | undefined = undefined;

  // Error object when browser doesnt have Geolocation API
  private geoLocationAPIError: Error = new Error(
    "Geolocation API is not available in this browser"
  );

  private checkGolocationAPIIAvailability(): void {
    const geolocationAPINotAvaialale:boolean = !this.geoLocationAPIIsAvailable;

    /* Check if browser have Geolocation API
     Throw error when browser doesn't have Geolocation API */
    if (geolocationAPINotAvaialale) throw this.geoLocationAPIError;
  }

  public checkGeoLocationDataInLocalStorage(): Boolean {
    const geoLatString: geoDataFromLS = localStorage.getItem(
      LOCAL_STORAGE_GEO_LAT_KEY
    );
    const geoLonString: geoDataFromLS = localStorage.getItem(
      LOCAL_STORAGE_GEO_LON_KEY
    );

    if (geoLonString !== null && geoLatString !== null) return true;
    return false;
  }

  public readGeoCoordsFromLocalStorage(): GeoCoords {
    const geoLatString: geoDataFromLS = localStorage.getItem(
      LOCAL_STORAGE_GEO_LAT_KEY
    );
    const geoLonString: geoDataFromLS = localStorage.getItem(
      LOCAL_STORAGE_GEO_LON_KEY
    );

    const geoLatNumber: number = Number(geoLatString);
    const geoLonNumber: number = Number(geoLonString);

    const geoCoords: GeoCoords = { lat: geoLatNumber, lon: geoLonNumber };

    return geoCoords;
  }

  public writeGeoCoordsToLocalStorage(geoCoords: GeoCoords): Boolean {
    const { lat, lon } = geoCoords;

    localStorage.setItem(LOCAL_STORAGE_GEO_LAT_KEY, `${lat}`);
    localStorage.setItem(LOCAL_STORAGE_GEO_LON_KEY, `${lon}`);

    return this.checkGeoLocationDataInLocalStorage();
  }

  public removeGeoCoordsFromLocalStorage() {
    localStorage.removeItem(LOCAL_STORAGE_GEO_LAT_KEY);
    localStorage.removeItem(LOCAL_STORAGE_GEO_LON_KEY);
  }

  private async asyncGetCurrentPosition(): Promise<GeoLocationPromiseResult> {
    // throws error when browser geolocation API is not supported
    this.checkGolocationAPIIAvailability();
    try {
      const { getCurrentPosition } = navigator.geolocation;

      // Execution function for Geolocation promise
      const geoLocationPromiseExecutor = (
        resolve: PositionCallback,
        reject: PositionErrorCallback
      ) => getCurrentPosition.call(navigator.geolocation, resolve, reject);

      // Geolocation promise
      const geolocationPromise = new Promise<
        GeolocationPosition | GeolocationPositionError
      >(geoLocationPromiseExecutor);

      const geolocationPromiseResult = await geolocationPromise;

      // if geolocationPromiseResult resolves to GeolocationPosition set geolocationPermission to true
      this.geoLocationPermission = true;
      return geolocationPromiseResult;
    } catch (error) {
      // set permission status to false
      if (error.code === 1) {
        this.geoLocationPermission = false;
      }
      console.log("error in GeoLocationService", error);
      return error;
    }
  }

  private async startLocationService(): Promise<GeoCoords | void> {
    try {
      const geoLocationPromiseResult: GeoLocationPromiseResult =
        await this.asyncGetCurrentPosition();
      console.log("geolocationPromiseResult", geoLocationPromiseResult);

      if (geoLocationPromiseResult instanceof GeolocationPosition) {
        console.log(geoLocationPromiseResult);
        const {
          coords: { latitude: lat, longitude: lon },
        } = geoLocationPromiseResult;

        const geoCoords: GeoCoords = { lat, lon };
        this.geoCoords = geoCoords;
      }
    } catch (error) {
      console.log("error in GeoLocationService", error);
      return error;
    }
  }

  public async getGeoCoordsFromBrowserAPI(): Promise<GeoCoords | void> {
    await this.startLocationService();
    if (this.geoCoords !== undefined) return this.geoCoords;
  }
}

export default BrowserGeoLocationService;
