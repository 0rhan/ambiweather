interface WeatherData {
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

export default WeatherData;
