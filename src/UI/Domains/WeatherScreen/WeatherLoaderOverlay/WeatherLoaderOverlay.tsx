import LoaderFullScreenOverlay from "UI/Components/Decorations/Loader/LoaderFullScreenOverlay/LoaderFullScreenOverlay";
import WeatherLoaderContent from "./WeatherLoaderContent/WeatherLoaderContent";

interface WeatherLoaderOverlayProps {
  isLoading: boolean;
}

const WeatherLoaderOverlay = ({ isLoading }: WeatherLoaderOverlayProps) => {
  return (
    <LoaderFullScreenOverlay isLoading={isLoading}>
      <WeatherLoaderContent />
    </LoaderFullScreenOverlay>
  );
};

export default WeatherLoaderOverlay;
