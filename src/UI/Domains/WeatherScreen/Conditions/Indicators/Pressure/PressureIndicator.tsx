import Indicator from "UI/Components/DataDisplay/Indicators/Indicator/Indicator";
import { mdiGauge } from "@mdi/js";

interface PressureIndicatorProps {
  pressure: number;
}

const PressureIndicator = ({ pressure = 0 }: PressureIndicatorProps) => {
  return (
    <Indicator title="pressure" icon={mdiGauge}>
      {pressure}
    </Indicator>
  );
};

export default PressureIndicator;
