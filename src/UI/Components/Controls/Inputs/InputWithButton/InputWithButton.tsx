import styles from "./InputWithButton.module.css";
import { SvgIconComponent } from "@material-ui/icons";
import InputRootContainer from "../InputBase/InputRootContainer/InputRootContainer";
import InputIcon from "../InputBase/InputIcon/InputIcon";
import InputLabel from "../InputBase/InputLabel/InputLabel";
import { InputBaseProps } from "../InputBase/types";
import IconButton from "UI/Components/Controls/Buttons/IconButton/IconButton";
import { MouseEventHandler } from "react";

type InputWithButtonProps = Omit<InputBaseProps, "onClick"> & {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  buttonIcon: SvgIconComponent;
  buttonText?: string;
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
}: InputWithButtonProps) => {
  return (
    <InputRootContainer
      className={styles.inputWithButtonInnerContainerLeftIcon}
    >
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
      >
        {buttonText}
      </IconButton>
    </InputRootContainer>
  );
};

export default InputWithButton;

