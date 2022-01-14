import fetcher from "lib/fetcher";
import {GEOCODE_RESOURCE} from "config"


export const requestLocationsByName = async (cityName: string) => {
  const data: unknown = await fetcher.get(GEOCODE_RESOURCE, { q: cityName });

  return data;
};
