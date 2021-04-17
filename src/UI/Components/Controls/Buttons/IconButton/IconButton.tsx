import { ReactNode } from "react";
import Button from "../Base/Button";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import style from "./iconButton.module.css"

interface IconButtonProps {
  children?: ReactNode;
}

const IconButton = ({ children, ...props }: IconButtonProps) => {
  return (
    <Button className={style.container} {...props}>
      {children}
      <span>
        <SearchRoundedIcon />
      </span>
    </Button>
  );
};

export default IconButton;
