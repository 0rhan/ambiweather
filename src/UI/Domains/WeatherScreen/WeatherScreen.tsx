import ConditionsPanel from "./Conditions/ConditionsPanel";
import styles from "./WeatherScreen.module.css";
import WeatherSummaryCard from "./WeatherSummaryCard/WeatherSummaryCard";
import WeatherData from "./types";
import { GeoCoords } from "lib/geolocation/browserGeolocationService";
import { MouseEventHandler, useEffect, useState } from "react";
import {
  requestWeatherByGeoCoordinates,
  requestWeatherByName,
} from "api/sources/weatherData";
import { WEATHER_UNIT_METRIC } from "api/constants";
import { Redirect } from "react-router-dom";
import WeatherLoaderOverlay from "./WeatherLoaderOverlay/WeatherLoaderOverlay";
import Button from "UI/Components/Controls/Buttons/Button/Button";

interface WeatherScreenProps {
  geoCoords: GeoCoords | null;
  cityName: string | null;
  setGeoCoords: Function;
  setCityName: Function;
}

const WeatherScreen = ({
  geoCoords,
  cityName,
  setGeoCoords,
  setCityName,
}: WeatherScreenProps) => {
  let weatherScreenContent: JSX.Element | null = null;

  const [weatherData, setWeatherData] = useState<WeatherData | undefined>(
    undefined
  );

  const [isLoading, setLoading] = useState<boolean>(false);

  const [fetchingError, setFetchingError] = useState<Error | boolean>(false);

  const fetchCurrentWeatherDataByGeoCoords = async (geoCoords: GeoCoords) => {
    try {
      setLoading(true);
      const weatherDataResponse = (await requestWeatherByGeoCoordinates(
        geoCoords,
        WEATHER_UNIT_METRIC
      )) as WeatherData;
      setWeatherData(weatherDataResponse);
      setLoading(false);
    } catch (error) {}
  };

  const fetchCurrentWeatherDataByCityName = async (cityName: string) => {
    try {
      setLoading(true);
      const weatherDataResponse = (await requestWeatherByName(
        cityName,
        WEATHER_UNIT_METRIC
      )) as WeatherData;
      setWeatherData(weatherDataResponse);
      setLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setLoading(false);
        setFetchingError(error);
      }
    }
  };

  const changeLocation:MouseEventHandler<HTMLButtonElement> = () => {
    localStorage.removeItem("city name");
    setCityName(null);
    setGeoCoords(null);
  };

  useEffect(() => {
    if (geoCoords) {
      fetchCurrentWeatherDataByGeoCoords(geoCoords);
    }
    if (cityName) {
      fetchCurrentWeatherDataByCityName(cityName);
    }
  }, [geoCoords, cityName]);

  if (weatherData !== undefined && fetchingError === false) {
    const {
      main: { temp },
      weather: [{ description, id }],
      name,
    } = weatherData;

    weatherScreenContent = (
      <div className={styles.weatherScreen}>
        <WeatherSummaryCard
          temp={temp}
          cityName={name}
          conditionDescription={description}
          conditionCode={id}
          changeLocation={changeLocation}
        />
        <ConditionsPanel weatherConditions={weatherData} />
      </div>
    );
  }

  if (fetchingError instanceof Error) {
    weatherScreenContent = (
      <div className={styles.weatherScreenError}>
        <span className={styles.weatherScreenErrorText}>
          {fetchingError.message}
        </span>
        <Button onClick={changeLocation}>Change location</Button>
      </div>
    );
  }

  // Redirect if "page" loaded without location
  if (geoCoords === null && cityName === null) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <WeatherLoaderOverlay isLoading={isLoading} />
      {weatherScreenContent}
    </>
  );
};

export default WeatherScreen;
