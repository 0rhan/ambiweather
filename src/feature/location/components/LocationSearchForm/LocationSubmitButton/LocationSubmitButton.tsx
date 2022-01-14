import styles from "./LocationSubmitButton.module.css";
import { ArrowForwardIos } from "@material-ui/icons";
import IconButton from "components/Controls/Buttons/IconButton/IconButton";
import {ButtonHTMLAttributes} from "react";

type LocationSubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const LocationSubmitButton = ({
  className = styles.locationSubmitButton,
  ...props
}: LocationSubmitButtonProps) => {
  return <IconButton className={className} icon={ArrowForwardIos} type="submit" {...props}/>;
};

export default LocationSubmitButton;
