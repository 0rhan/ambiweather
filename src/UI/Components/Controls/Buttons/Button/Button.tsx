import { ReactText } from "react";
import ButtonBase, { ButtonBaseProps } from "../ButtonBase/ButtonBase";
import style from "./Button.module.css";

export interface ButtonProps extends ButtonBaseProps {
  children: ReactText;
  variant?: "success" | "danger" | "warning" | "primary";
}

const Button = ({
  className = "",
  children,
  variant,
  disabled,
}: ButtonProps) => {

  const buttonVariant = `${variant ? style[variant] : ""}`;

  const classes = `${style.button} ${buttonVariant} ${className}`;

  return (
    <ButtonBase className={classes} disabled={disabled}>
      <span className={style.text}>{children}</span>
    </ButtonBase>
  );
};

export default Button;
