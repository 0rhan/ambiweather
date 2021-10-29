import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./ButtonBase.module.css";

// Basic button component for building other button variants
export interface ButtonBaseProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const ButtonBase = ({
  type = "button",
  children,
  className = styles.buttonBase,
  onClick,
  disabled,
}: ButtonBaseProps) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonBase;
