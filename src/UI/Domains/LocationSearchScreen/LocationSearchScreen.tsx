import styles from "./LocationSearchScreen.module.css";
import { FormEvent, useState } from "react";
import BrowserGeoLocationService, {
  GeoCoords,
} from "lib/geolocation/browserGeolocationService";
import LocationSearchForm from "./LocationSearchForm/LocationSearchForm";
import LocationSearchLoaderOverlay from "./LocationSearchLoaderOverlay/LocationSearchLoaderOverlay";
import { Redirect } from "react-router-dom";

const locator = new BrowserGeoLocationService();

interface LocationSearchScreenProps {
  setGeoCoords: Function;
  geoCoords: GeoCoords | null;
  setCityName: Function;
  cityName: string | null;
}

const LocationSearchScreen = ({
  setGeoCoords,
  geoCoords,
  setCityName,
  cityName,
}: LocationSearchScreenProps) => {
  const [geoPermission, setGeoPermission] = useState<boolean | undefined>(
    undefined
  );

  const [isLoading, setLoadingState] = useState<boolean>(false);

  const getGeoCoordsFromBrowserAPI = async () => {
    try {
      setLoadingState(true);
      const getGeoCoordsFromBrowserAPI =
        (await locator.getGeoCoordsFromBrowserAPI()) as GeoCoords;
      setLoadingState(false);
      setGeoPermission(locator.geoLocationPermission);
      locator.writeGeoCoordsToLocalStorage(getGeoCoordsFromBrowserAPI);
      setGeoCoords(getGeoCoordsFromBrowserAPI);
    } catch (error) {
      setGeoPermission(locator.geoLocationPermission);
    }
  };

  const getCityName =
    (cityName: string) => (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      localStorage.setItem("city name", cityName);
      setCityName(cityName);
    };

  const haveLocationData = geoCoords !== null || cityName !== null;

  if (geoCoords === null && cityName === null) {
    return (
      <div className={styles.startScreenContainer}>
        {geoPermission === undefined ? (
          <LocationSearchLoaderOverlay isLoading={isLoading} />
        ) : null}
        <LocationSearchForm
          onClick={getGeoCoordsFromBrowserAPI}
          onSubmit={getCityName}
          geoPermission={geoPermission}
        />
      </div>
    );
  }
  if (haveLocationData) {
    return <Redirect to="/weather" />;
  }
  return null;
};

export default LocationSearchScreen;
