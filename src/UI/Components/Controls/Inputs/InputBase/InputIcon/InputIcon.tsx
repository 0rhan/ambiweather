import { SvgIconComponent } from "@material-ui/icons";
import styles from "./inputIcon.module.css";

interface InputIconProps {
  icon: SvgIconComponent;
  className?: string;
}

const InputIcon = ({ icon: Icon, className = "" }: InputIconProps) => {
  return (
    <span className={`${styles.inputIcon} ${className}`}>
      <Icon />
    </span>
  );
};

export default InputIcon;
