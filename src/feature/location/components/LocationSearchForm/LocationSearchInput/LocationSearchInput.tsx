import {ChangeEventHandler, MouseEventHandler} from "react"
import { MyLocationRounded, PinDrop } from "@material-ui/icons";
import InputWithButton from "components/Controls/Inputs/InputWithButton/InputWithButton";

interface LocationSearchInputProps {
  geoPermission: boolean | undefined;
  onClick: MouseEventHandler<HTMLButtonElement>;
  onChange: ChangeEventHandler<HTMLInputElement>
  value: string | undefined; 
}

const LocationSearchInput = ({geoPermission, onClick, onChange, value, ...props }:LocationSearchInputProps) => {

  const disableLocationButton = geoPermission === undefined ? false : true
  
  return (
    <InputWithButton
      name="Search location"
      placeholder="city name"
      inputIcon={PinDrop}
      inputLabel="Your location"
      buttonIcon={MyLocationRounded}
      disableButton={disableLocationButton}
      onClick={onClick}
      onChange={onChange}
      value={value}
      {...props}
    />
  );
};

export default LocationSearchInput;
