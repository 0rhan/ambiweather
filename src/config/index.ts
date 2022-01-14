export const BASE_URL: string = "https://api.openweathermap.org" as const;
// API resource for getting weather data
export const WEATHER_DATA_RESOURCE: string = "/data/2.5/weather" as const;
// API resource for search locations
export const GEOCODE_RESOURCE: string = "/geo/1.0/direct" as const;
// OPEN WEATHER API KEY
export const DEFAULT_APP_ID: string =
  "92ff05e1fa9261865c982ceee44bc651" as const;

// Units for weather request
export const WEATHER_UNIT_METRIC = "metric" as const;
export const WEATHER_UNIT_IMPERIAL = "imperial" as const;

// String keys for store geocoordinates in localStorage
export const LOCAL_STORAGE_GEO_LAT_KEY = "geoLat" as const;
export const LOCAL_STORAGE_GEO_LON_KEY = "geoLon" as const;

export const TEMP_SPECTRUM_ZERO = "zero" as const;
export const TEMP_SPECTRUM_COLD = "cold" as const;
export const TEMP_SPECTRUM_CHILLY = "chilly" as const;
export const TEMP_SPECTRUM_WARMLY = "warmly" as const;
export const TEMP_SPECTRUM_HOT = "hot" as const;
