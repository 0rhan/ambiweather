import styles from "./LoaderContent.module.css";
import { ReactChild } from "react";

interface LoaderProps {
  className?: string;
  children: ReactChild | ReactChild[];
}

const LoaderContent = ({
  className = styles.loaderContent,
  children,
}: LoaderProps) => {
  return <div className={className}>{children}</div>
};

export default LoaderContent;
