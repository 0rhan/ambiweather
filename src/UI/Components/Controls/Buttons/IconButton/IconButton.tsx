import { ReactNode } from "react";
import ButtonBase from "../ButtonBase/ButtonBase";
import { SvgIconComponent } from "@material-ui/icons";
import { MouseEventHandler } from "react";
import style from "./IconButton.module.css";

interface IconButtonProps {
  children?: ReactNode;
  icon: SvgIconComponent;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
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
