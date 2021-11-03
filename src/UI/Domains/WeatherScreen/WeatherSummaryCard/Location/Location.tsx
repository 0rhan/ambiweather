import styles from "./Location.module.css";
import RoomIcon from "@material-ui/icons/Room";
import Button from "UI/Components/Controls/Buttons/Button/Button";
import {MouseEventHandler} from "react";

interface CityNameProps {
  cityName: string;
  className?: string;
  changeLocation: MouseEventHandler<HTMLButtonElement>;
}

const Location = ({
  cityName = "Unknown",
  className = styles.locationContainer,
  changeLocation,
}: CityNameProps) => {
  return (
    <div className={className}>
      <Button className={styles.locationButton} variant="primary" onClick={changeLocation}>
        <RoomIcon style={{fontSize: 16}}/>
        {cityName}
      </Button>
    </div>
  );
};

export default Location;
