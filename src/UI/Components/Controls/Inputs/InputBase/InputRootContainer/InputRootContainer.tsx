import { ReactNode } from "react";
import style from "./inputRootContainer.module.css";

interface ContainerProps {
  /** Container content */
  children: ReactNode;
}

const InputRootContainer = ({ children }: ContainerProps) => {
  return <div className={style.rootContainer}>{children}</div>;
};

export default InputRootContainer;
