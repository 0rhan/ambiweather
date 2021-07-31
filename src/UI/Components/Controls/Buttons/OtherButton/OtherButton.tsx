import { HTMLAttributes } from "react";
import Button from "../Button/Button";
import style from "./OtherButton.module.css";

interface OtherButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const OtherButton = ({ className = "" }: OtherButtonProps) => {
  return (
    <Button variant="primary" className={`${style.primary} ${className}`}>
      OtherButton
    </Button>
  );
};

export default OtherButton;
