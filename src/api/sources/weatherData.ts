import fetcher from "lib/fetcher";
import { GeoCoords } from "lib/geolocation/browserGeolocationService";
import { WEATHER_DATA_RESOURCE, WEATHER_UNIT_METRIC, WEATHER_UNIT_IMPERIAL } from "api/constants/";

type weatherUnits = typeof WEATHER_UNIT_METRIC | typeof WEATHER_UNIT_IMPERIAL;

/*
   TODO
   - TSDoc
   - Function overloads?
 */
export const requestWeatherByGeoCoordinates = async (
  coordinates: GeoCoords,
  units?: weatherUnits
) => {
  let data: unknown;
  if (units !== undefined) {
    try {
      data = await fetcher.get(WEATHER_DATA_RESOURCE, {...coordinates, units });
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      data = await fetcher.get(WEATHER_DATA_RESOURCE, coordinates);
    } catch (error) {
      console.log(error);
    }
  }

  return data;
};
