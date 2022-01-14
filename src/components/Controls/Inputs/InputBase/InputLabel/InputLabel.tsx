import { LabelHTMLAttributes } from "react";
import { SvgIconComponent } from "@material-ui/icons";
import style from "./inputLabel.module.css"

interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
  labelIcon?: SvgIconComponent;
  htmlFor: string;
}

const InputLabel = ({ text, htmlFor }: InputLabelProps) => {
  return <label htmlFor={htmlFor} className={style.inputLabel}>{text}</label>;
};

export default InputLabel;
