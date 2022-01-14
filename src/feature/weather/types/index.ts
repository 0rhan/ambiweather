import {
  TEMP_SPECTRUM_COLD,
  TEMP_SPECTRUM_ZERO,
  TEMP_SPECTRUM_CHILLY,
  TEMP_SPECTRUM_WARMLY,
  TEMP_SPECTRUM_HOT,
} from "config";

export type tempSpectrumStrings =
  | typeof TEMP_SPECTRUM_COLD
  | typeof TEMP_SPECTRUM_ZERO
  | typeof TEMP_SPECTRUM_CHILLY
  | typeof TEMP_SPECTRUM_WARMLY
  | typeof TEMP_SPECTRUM_HOT;

export interface WeatherData {
  main: {
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    sunrise: number;
    sunset: number;
  };
  weather: [
    {
      description: string;
      id: number;
      main: string;
    }
  ];

  rain?: {
    "1h": number;
    "3h": number;
  };
  snow?: {
    "1h": number;
    "3h": number;
  };
  wind: {
    deg: number;
    speed: number;
  };
}


