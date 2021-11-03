import styles from "./LocationSearchLoader.module.css";
import { GpsNotFixed } from "@material-ui/icons";

const LocationSearchLoader = () => {
  return (
    <div className={styles.locationLoaderContainer}>
      <div className={styles.locationLoader}>
        <GpsNotFixed style={{ fontSize: 80 }} />
      </div>
      <span className={styles.locationLoaderText}>SEARCHING LOCATION</span>
    </div>
  );
};

export default LocationSearchLoader;
