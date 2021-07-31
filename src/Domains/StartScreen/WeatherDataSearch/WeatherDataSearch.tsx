import { useEffect, useState } from "react";
import { requestWeatherByGeoCoordinates } from "api/sources/weatherData";
import BrowserGeoLocationService, {
  GeoCoords,
} from "lib/geolocation/browserGeolocationService";

const locator = new BrowserGeoLocationService();

function WeatherDataSearch() {
  const [geoPermission, setGeoPermission] = useState<Boolean | undefined>(
    undefined
  );
  const [geoCoords, setGeoCoords] = useState<GeoCoords | undefined>(undefined);

  // TODO add type
  const [weatherData, setWeatherData] = useState<any>(undefined);

  const getGeoCoordsFromBrowserAPI = async () => {
    try {
      const getGeoCoordsFromBrowserAPI = (await locator.getGeoCoordsFromBrowserAPI()) as GeoCoords;
      setGeoPermission(locator.geoLocationPermission);
      locator.writeGeoCoordsToLocalStorage(getGeoCoordsFromBrowserAPI);
      setGeoCoords(getGeoCoordsFromBrowserAPI);
    } catch (error) {
      setGeoPermission(locator.geoLocationPermission);
    }
  };

  const getWeatherDataByGeoCoords = async (geoCoords: GeoCoords) => {
    try {
      const weatherData = await requestWeatherByGeoCoordinates(geoCoords) as Object;
      setWeatherData(weatherData);
    } catch (error) {
      return error 
    }
  };

  useEffect(() => {
    const isLocalStorageHaveGeoCoords = locator.checkGeoLocationDataInLocalStorage();

    if (isLocalStorageHaveGeoCoords && geoCoords === undefined) {
      const geoCoordsFromLocalStorage = locator.readGeoCoordsFromLocalStorage();
      setGeoCoords(geoCoordsFromLocalStorage);
      getWeatherDataByGeoCoords(geoCoordsFromLocalStorage);
    }
  }, [geoPermission, geoCoords, weatherData]);
  
  console.log("geoCoords", geoCoords)
  console.log("geoPermission", geoPermission)
  console.log("weatherData", weatherData)

  if (geoPermission === undefined && geoCoords === undefined) {
    return (
      <button onClick={getGeoCoordsFromBrowserAPI}>use geolocation?</button>
    );
  }
  if(geoCoords !== undefined && weatherData === undefined) {
    return <h1>LOADING</h1>
  }
  if (weatherData !== undefined) {
    return <div>{weatherData?.main.temp}</div>;
  }
  if (geoPermission === false) {
    return <input type="search" placeholder="search" />;
  }
  return <div>error</div>;
}

export default WeatherDataSearch;
