import Indicator from "components/DataDisplay/Indicators/Indicator/Indicator";
import { mdiWaterPercent } from "@mdi/js";

interface HumidityProps {
  humidity: number;
}

const HumidityIndicator = ({ humidity }: HumidityProps) => {
  return <Indicator title="humidity" icon={mdiWaterPercent}>{humidity}%</Indicator>;
};

export default HumidityIndicator;
