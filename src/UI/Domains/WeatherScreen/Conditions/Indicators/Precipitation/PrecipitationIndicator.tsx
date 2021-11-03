import Indicator from "UI/Components/DataDisplay/Indicators/Indicator/Indicator";
import { mdiWater, mdiSnowflake, mdiWaterOff } from "@mdi/js";
import WeatherData from "UI/Domains/WeatherScreen/types";

interface PrecipitationIndicatorProps {
  precipitation: Pick<WeatherData, "rain" | "snow">;
}

const PrecipitationIndicator = ({
  precipitation: { rain, snow },
}: PrecipitationIndicatorProps) => {
  let precipitationIcon = mdiWaterOff,
    precipitationValue = 0;

  if (snow) {
    precipitationValue = snow["1h"];
    precipitationIcon = mdiSnowflake;
  }
  if (rain) {
    precipitationValue = rain["1h"];
    precipitationIcon = mdiWater;
  }

  return (
    <Indicator title="precipitation" icon={precipitationIcon}>
      {precipitationValue} mm
    </Indicator>
  );
};

export default PrecipitationIndicator;
