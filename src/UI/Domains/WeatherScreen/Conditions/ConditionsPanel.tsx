import styles from "./ConditionsPanel.module.css";
import Panel from "UI/Components/DataDisplay/Panel/Panel";
import PressureIndicator from "./Indicators/Pressure/PressureIndicator";
import HumidityIndicator from "./Indicators/Humidity/HumidityIndicator";
import PrecipitationIndicator from "./Indicators/Precipitation/PrecipitationIndicator";
import Sun from "./Indicators/Sun/Sun";
import Wind from "./Indicators/Wind/Wind";
import WeatherData from "../types/index";

interface ConditionsPanelProps {
  weatherConditions: WeatherData;
  className?: string;
}

const ConditionsPanel = ({
  className = styles.conditionsPanelContainer,
  weatherConditions,
}: ConditionsPanelProps) => {
  const {
    main: { humidity, pressure },
    sys: { sunset, sunrise },
    wind,
    snow,
    rain,
  } = weatherConditions;

  const precipitation = {rain, snow}

  const timeOptions = {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  } as const;

  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString(
    "en-EN",
    timeOptions
  );
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString(
    "en-EN",
    timeOptions
  );

  return (
    <Panel element="ul" className={className}>
      <PrecipitationIndicator precipitation={precipitation} />
      <HumidityIndicator humidity={humidity} />
      <PressureIndicator pressure={pressure} />
      <Sun sunrise={sunriseTime} sunset={sunsetTime} />
      <Wind wind={wind} />
    </Panel>
  );
};

export default ConditionsPanel;
