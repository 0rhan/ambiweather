import styles from "./InputWithButton.module.css";
import { SvgIconComponent } from "@material-ui/icons";
import InputRootContainer from "../InputBase/InputRootContainer/InputRootContainer";
import InputIcon from "../InputBase/InputIcon/InputIcon";
import InputLabel from "../InputBase/InputLabel/InputLabel";
import { InputBaseProps } from "../InputBase/types";
import IconButton from "UI/Components/Controls/Buttons/IconButton/IconButton";
import { MouseEventHandler, ChangeEventHandler } from "react";

type InputWithButtonProps = Omit<InputBaseProps, "onClick"> & {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  buttonIcon: SvgIconComponent;
  buttonText?: string;
  disableButton?: boolean;
};

const InputWithButton = ({
  name,
  type,
  buttonIcon,
  buttonText,
  inputLabel,
  placeholder,
  iconSide = "left",
  onClick,
  onChange,
  inputIcon: Icon,
  disableButton,
}: InputWithButtonProps) => {
  return (
    <InputRootContainer>
      {inputLabel && <InputLabel text={inputLabel} htmlFor={name} />}
      <div
        className={styles.inputWithButtonInnerContainer}
        style={{
          flexDirection: `${iconSide === "right" ? "row-reverse" : "row"}`,
        }}
      >
        {Icon && <InputIcon icon={Icon} />}
        <input
          onChange={onChange}
          className={styles.inputWithButton}
          name={name}
          type={type}
          placeholder={placeholder}
        />
      </div>
      <IconButton
        className={styles.inputButton}
        onClick={onClick}
        icon={buttonIcon}
        disabled={disableButton}
      >
        {buttonText}
      </IconButton>
    </InputRootContainer>
  );
};

export default InputWithButton;

