import { ReactChild } from "react";
import ButtonBase, { ButtonBaseProps } from "../ButtonBase/ButtonBase";
import styles from "./Button.module.css";

export interface ButtonProps extends ButtonBaseProps {
  children: ReactChild | ReactChild[];
  variant?: "success" | "danger" | "warning" | "primary";
}

const Button = ({
  className = styles.button,
  children,
  variant,
  disabled,
  ...props
}: ButtonProps) => {
  const buttonVariant = `${variant ? styles[variant] : ""}`;

  const classes = `${className} ${buttonVariant}`;

  return (
    <ButtonBase className={classes} disabled={disabled} {...props}>
      <span className={styles.text}>{children}</span>
    </ButtonBase>
  );
};

export default Button;
