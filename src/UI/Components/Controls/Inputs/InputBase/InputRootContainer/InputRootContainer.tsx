import { ReactNode } from "react";
import styles from "./inputRootContainer.module.css";

interface ContainerProps {
  /** Container content */
  children: ReactNode;
  className?: string;
}

const InputRootContainer = ({
  children,
  className = styles.rootContainer,
}: ContainerProps) => {
  return <div className={className}>{children}</div>;
};

export default InputRootContainer;
