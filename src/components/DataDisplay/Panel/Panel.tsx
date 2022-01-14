import { MouseEvent, ReactChild, useState } from "react";
import styles from "./Panel.module.css";

type PanelContainerElement = HTMLDivElement | HTMLUListElement;

type Coords = {
  currentPositionX: number;
  currentScrollLeft: number;
};

interface PanelProps {
  children: ReactChild | ReactChild[];
  layout?: "row" | "column";
  className?: string;
  element?: "div" | "ul";
}

const Panel = ({
  children,
  className = styles.panelContainer,
  element = "div",
}: PanelProps) => {
  const CustomElement = element;

  const [panelContainerElement, setElement] =
    useState<PanelContainerElement | null>();
  const [coords, setCoords] = useState<Coords>();
  const [mouseUp, setMouseUp] = useState<boolean>(false);

  const getPaneContentContainer = (element: PanelContainerElement | null) => {
    if (element) {
      setElement(element);
    }
  };

  const isOverflow = () => {
    if (panelContainerElement) {
      if (panelContainerElement.scrollWidth > panelContainerElement.clientWidth)
        return true;
    }
    return;
  };

  const mouseDownHandler = (event: MouseEvent<PanelContainerElement>) => {
    if (isOverflow()) {
      setMouseUp(false);
      const element = event.currentTarget;
      element.style.cursor = "grabbing";
      const coords = {
        currentPositionX: event.clientX,
        currentScrollLeft: element.scrollLeft,
      };
      setCoords(coords);
    }
  };

  const mouseMoveHandler = (event: MouseEvent<PanelContainerElement>) => {
    if (isOverflow()) {
      const element = event.currentTarget;
      element.style.cursor = "grab";
      if (coords && !mouseUp) {
        const deltaX = coords.currentPositionX - event.clientX;

        const scrollValue = coords.currentScrollLeft + deltaX;

        element.scrollLeft = scrollValue;

        element.style.cursor = "grabbing";
      }
    }
  };

  const mouseUpHandler = (event: MouseEvent<PanelContainerElement>) => {
    if (isOverflow()) {
      setMouseUp(true);
      const element = event.currentTarget;
      element.style.cursor = "grab";
      const coords = {
        currentPositionX: event.clientX,
        currentScrollLeft: element.scrollLeft,
      };
      if (panelContainerElement) {
        setCoords(coords);
      }
    }
  };

  return (
    <div className={className}>
      <CustomElement
        ref={getPaneContentContainer}
        onMouseMove={mouseMoveHandler}
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
        className={styles.panelContent}
      >
        {children}
      </CustomElement>
    </div>
  );
};

export default Panel;
