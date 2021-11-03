import styles from "./Sun.module.css";
import Indicator from "UI/Components/DataDisplay/Indicators/Indicator/Indicator";
import {
  mdiWeatherSunny,
  mdiWeatherSunsetDown,
  mdiWeatherSunsetUp,
} from "@mdi/js";
import MdiSvgIcon from "UI/Components/DataDisplay/Icons/MdiSvgIcon/MdiSvgIcon";

interface SunProps {
  sunset: string;
  sunrise: string;
  className?: string;
}

const Sun = ({
  sunset,
  sunrise,
  className = styles.sunIndicator,
}: SunProps) => {
  return (
    <Indicator title={"Sunset/Sunrise"} className={className} icon={mdiWeatherSunny}>
      <div className={styles.sunrise}>
        <MdiSvgIcon icon={mdiWeatherSunsetUp} />
        {sunrise}
      </div>
      <div className={styles.sunset}>
        <MdiSvgIcon icon={mdiWeatherSunsetDown} />
        {sunset}
      </div>
    </Indicator>
  );
};

export default Sun;
