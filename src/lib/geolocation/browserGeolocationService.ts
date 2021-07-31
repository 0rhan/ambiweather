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

  // Error string when browser doesnt have Geolocation API
  private geoLocationAPIError: string =
    "Geolocation API is not available in this browser";

  private checkGolocationAPIIAvailability(): void {
    const geolocationAPINotAvaialale = !this.geoLocationAPIIsAvailable;

    /* Check if browser have Geolocation API
     Throw error when browser doesn't have Geolocation API */
    if (geolocationAPINotAvaialale) throw new Error(this.geoLocationAPIError);
  }

  public checkGeoLocationDataInLocalStorage(): Boolean {
    const geoLatString: geoDataFromLS = localStorage.getItem("geoLat");
    const geoLonString: geoDataFromLS = localStorage.getItem("geoLon");

    if (geoLonString !== null && geoLatString !== null) return true;
    return false;
  }

  public readGeoCoordsFromLocalStorage(): GeoCoords {
    const geoLatString: geoDataFromLS = localStorage.getItem("geoLat");
    const geoLonString: geoDataFromLS = localStorage.getItem("geoLon");

    const geoLatNumber: number = Number(geoLonString);
    const geoLonNumber: number = Number(geoLatString);

    const geoCoords: GeoCoords = { lat: geoLatNumber, lon: geoLonNumber };

    return geoCoords;
  }

  public writeGeoCoordsToLocalStorage(geoCoords: GeoCoords): Boolean {
    const { lat, lon } = geoCoords;

    localStorage.setItem("geoLat", `${lat}`);
    localStorage.setItem("geoLon", `${lon}`);

    return this.checkGeoLocationDataInLocalStorage();
  }

  public removeGeoCoordsFromLocalStorage() {
    localStorage.removeItem("geoLon");
    localStorage.removeItem("geoLat");
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
      const geoLocationPromiseResult: GeoLocationPromiseResult = await this.asyncGetCurrentPosition();

      if (geoLocationPromiseResult instanceof GeolocationPosition) {
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
