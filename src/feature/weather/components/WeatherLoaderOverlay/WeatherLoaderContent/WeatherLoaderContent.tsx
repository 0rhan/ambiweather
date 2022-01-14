import styles from "./WeatherLoaderContent.module.css";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

const WeatherLoaderContent = () => {
  return (
    <div className={styles.weatherLoaderContainer}>
      <ArrowDownward
        className={styles.weatherLoader}
        style={{ fontSize: 124 }}
      />
      <span className={styles.weatherLoaderText}>LOADING WEATHER FORECAST</span>
    </div>
  );
};

export default WeatherLoaderContent;
