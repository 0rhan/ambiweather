import { ReactChild, useRef } from "react";
import LoaderContent from "../LoaderContent/LoaderContent";
import LoaderPortal from "../LoaderPortal/LoaderPortal";
import styles from "./LoaderFullScreenOverlay.module.css";
import { Transition, TransitionStatus } from "react-transition-group";

interface LoaderFullScreenOverlayProps {
  className?: string;
  children: ReactChild | ReactChild[];
  isLoading: boolean;
}

const LoaderFullScreenOverlay = ({
  className = styles.loaderFullScreenOverlay,
  children,
  isLoading = false,
}: LoaderFullScreenOverlayProps) => {
  const nodeRef = useRef(null);

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: {
      opacity: 1,
      transition: "opacity .3s",
    },
    exiting: { opacity: 0, transition: "opacity 2s" },
    exited: { opacity: 0 },
    unmounted: { opacity: 0 },
  };

  return (
    <Transition
      in={isLoading}
      timeout={{
        appear: 100,
        exit: 2000,
      }}
      mountOnEnter
      unmountOnExit
      nodeRef={nodeRef}
    >
      {(state: TransitionStatus) => (
        <LoaderPortal>
          <div
            ref={nodeRef}
            className={className}
            style={{ ...transitionStyles[state] }}
          >
            <LoaderContent>{children}</LoaderContent>
          </div>
        </LoaderPortal>
      )}
    </Transition>
  );
};

export default LoaderFullScreenOverlay;
