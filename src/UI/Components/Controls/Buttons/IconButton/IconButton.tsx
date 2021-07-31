import { ReactNode } from "react";
import ButtonBase from "../ButtonBase/ButtonBase";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import style from "./IconButton.module.css"

interface IconButtonProps {
  children?: ReactNode;
}

const IconButton = ({ children, ...props }: IconButtonProps) => {
  return (
    <ButtonBase className={style.container} {...props}>
      {children}
      <span>
        <SearchRoundedIcon />
      </span>
    </ButtonBase>
  );
};

export default IconButton;
