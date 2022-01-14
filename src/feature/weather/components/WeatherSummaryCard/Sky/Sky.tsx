import styles from "./Sky.module.css";
import SkyConditions from "../Sky/SkyConditions";
import { NotAvailable } from "components/DataDisplay/Icons/WeatherSkyIcons";

interface SkyProps {
  conditionCode: number;
}

const Sky = ({ conditionCode }: SkyProps) => {

  const SkyStateIcon = SkyConditions.get(conditionCode) || NotAvailable;

  return <SkyStateIcon className={styles.skyStateIcon} />;
};

export default Sky;
