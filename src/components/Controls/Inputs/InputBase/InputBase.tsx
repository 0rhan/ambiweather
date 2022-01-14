import styles from "./InputBase.module.css";
import InputRootContainer from "./InputRootContainer/InputRootContainer";
import InputLabel from "./InputLabel/InputLabel";
import InputIcon from "./InputIcon/InputIcon";
import { InputBaseProps } from "./types";

const InputBase = ({
  type,
  name,
  inputLabel,
  placeholder,
  inputIcon: Icon,
  iconSide = "left",
  className,
}: InputBaseProps) => {
  return (
    <InputRootContainer className={className}>
      {inputLabel && <InputLabel text={inputLabel} htmlFor={name} />}
      <div
        className={styles.inputInnerContainer}
        style={{
          flexDirection: `${iconSide === "right" ? "row-reverse" : "row"}`,
        }}
      >
        {Icon && <InputIcon icon={Icon} />}
        <input
          className={styles.inputBase}
          type={type}
          name={name}
          placeholder={placeholder}
        />
      </div>
    </InputRootContainer>
  );
};

export default InputBase;
