import styles from "./Wind.module.css";
import Indicator from "components/DataDisplay/Indicators/Indicator/Indicator";
import { mdiWeatherWindy, mdiSpeedometer, mdiRayEndArrow } from "@mdi/js";
import MdiSvgIcon from "components/DataDisplay/Icons/MdiSvgIcon/MdiSvgIcon";

interface WindProps {
  wind: {
    speed: number;
    deg: number;
  };
}

const Wind = ({ wind: { speed, deg } }: WindProps) => {
  const windIconDegStyle = {
    transform: `rotate(${deg + 90}deg)`,
  };

  return (
    <Indicator
      className={styles.windIndicator}
      title="Wind"
      icon={mdiWeatherWindy}
    >
      <div className={styles.windSpeed}>
        <MdiSvgIcon icon={mdiSpeedometer} />
        {speed} m/s
      </div>
      <div className={styles.windDeg}>
        <MdiSvgIcon style={windIconDegStyle} icon={mdiRayEndArrow} />
        {`${deg}°`}
      </div>
    </Indicator>
  );
};

export default Wind;
