import { ButtonHTMLAttributes, ReactNode } from "react";
import ButtonBase from "../ButtonBase/ButtonBase";
import { SvgIconComponent } from "@material-ui/icons";
import style from "./IconButton.module.css";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  icon: SvgIconComponent;
}

const IconButton = ({
  children,
  icon: Icon,
  onClick,
  className = style.container,
  ...props
}: IconButtonProps) => {
  return (
    <ButtonBase className={className} onClick={onClick} {...props}>
      {children}
      <span>
        <Icon />
      </span>
    </ButtonBase>
  );
};

export default IconButton;
