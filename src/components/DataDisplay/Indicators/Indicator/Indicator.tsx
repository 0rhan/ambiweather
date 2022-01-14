import { ReactChild } from "react";
import styles from "./Indicator.module.css";
import MdiSvgIcon from "components/DataDisplay/Icons/MdiSvgIcon/MdiSvgIcon";

interface IndicatorProps {
  children: ReactChild | ReactChild[];
  className?: string;
  title?: string;
  icon: string;
}

const Indicator = ({
  children,
  className = styles.indicatorContent,
  title,
  icon,
}: IndicatorProps) => {
  return (
    <li className={styles.indicatorContainer}>
      <div className={styles.indicatorTitleContainer}>
        <MdiSvgIcon
          fontSize="large"
          icon={icon}
        />
        {title && (
          <span className={styles.indicatorTitle}>{title}</span>
        )}
      </div>
      <div className={className}>{children}</div>
    </li>
  );
};

export default Indicator;
