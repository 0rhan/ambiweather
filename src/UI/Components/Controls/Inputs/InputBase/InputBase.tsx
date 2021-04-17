import { InputHTMLAttributes } from "react";
import style from "./inputBase.module.css";
import InputRootContainer from "./InputRootContainer/InputRootContainer";
import InputLabel from "./InputLabel/InputLabel";
import InputIcon from "./InputIcon/InputIcon";
import { SvgIconComponent } from "@material-ui/icons";

// Basic input component for "text like" input
// Used for creating more complex input components
interface InputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Input type attribute */
  /** SvgIconComponent displayed inside input */
  inputIcon?: SvgIconComponent;
  inputLabel: string;
  name: string;
}

const InputBase = ({
  type,
  name,
  inputLabel,
  placeholder,
  inputIcon: Icon,
}: InputBaseProps) => {
  return (
    <InputRootContainer>
      <InputLabel text={inputLabel} htmlFor={name} />
      <div className={style.inputInnerContainer}>
        {Icon && <InputIcon icon={Icon} />}
        <input
          className={style.inputBase}
          type={type}
          name={name}
          placeholder={placeholder}
        />
      </div>
    </InputRootContainer>
  );
};

export default InputBase;
