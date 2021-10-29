import { ReactChild } from "react";
import LoaderContent from "../LoaderContent/LoaderContent";
import LoaderPortal from "../LoaderPortal/LoaderPortal";
import styles from "./LoaderFullScreenOverlay.module.css";

interface LoaderFullScreenOverlayProps {
  className?: string;
  children: ReactChild | ReactChild[];
  isLoading: boolean;
}

const LoaderFullScreenOverlay = ({
  className = styles.loaderFullScreenOverlay,
  children,
  isLoading,
}: LoaderFullScreenOverlayProps) => {
  if (isLoading) {
    return (
      <LoaderPortal>
        <div className={className}>
          <LoaderContent>{children}</LoaderContent>
        </div>
      </LoaderPortal>
    );
  } else return null;
};

export default LoaderFullScreenOverlay;
