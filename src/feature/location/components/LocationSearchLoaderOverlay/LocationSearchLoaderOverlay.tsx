import styles from "./LocationSearchLoaderOverlay.module.css";
import LoaderFullScreenOverlay from "components/Decorations/Loader/LoaderFullScreenOverlay/LoaderFullScreenOverlay";
import LocationSearchLoader from "./LocationSearchLoader/LocationSearchLoader";

interface WeatherLoaderOverlayProps {
  isLoading: boolean;
}

const LocationSearchLoaderOverlay = ({
  isLoading,
}: WeatherLoaderOverlayProps) => {
  return (
    <LoaderFullScreenOverlay
      className={styles.loaderOverlayContainer}
      isLoading={isLoading}
    >
      <LocationSearchLoader />
    </LoaderFullScreenOverlay>
  );
};

export default LocationSearchLoaderOverlay;
