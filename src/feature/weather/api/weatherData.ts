import fetcher from "lib/fetcher";
import { GeoCoords } from "feature/location/lib/browserGeolocationService";
import {
  WEATHER_DATA_RESOURCE,
  WEATHER_UNIT_METRIC,
  WEATHER_UNIT_IMPERIAL,
} from "config";

type weatherUnits = typeof WEATHER_UNIT_METRIC | typeof WEATHER_UNIT_IMPERIAL;

export const requestWeatherByGeoCoordinates = async (
  coordinates: GeoCoords,
  units?: weatherUnits
) => {
  if (units !== undefined) {
    const data = await fetcher.get(WEATHER_DATA_RESOURCE, {
      ...coordinates,
      units,
    });
    return data;
  }
  const data = await fetcher.get(WEATHER_DATA_RESOURCE, coordinates);
  return data;
};

export const requestWeatherByName = async (
  name: string,
  units?: weatherUnits
) => {
  if (units !== undefined) {
    const data = await fetcher.get(WEATHER_DATA_RESOURCE, { q: name, units });
    return data;
  }
  const data = await fetcher.get(WEATHER_DATA_RESOURCE, { q: name });
  return data;
};
