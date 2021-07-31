import fetcher from "lib/fetcher";
import { GeoCoords } from "lib/geolocation/browserGeolocationService";
import { WEATHER_DATA_RESOURCE} from "api/constants/";


export const requestWeatherByGeoCoordinates = async (
  coordinates: GeoCoords
) => {
  const data: unknown = await fetcher.get(WEATHER_DATA_RESOURCE, coordinates);

  return data;
};
