import {
  ChangeEventHandler,
  FormEvent,
  MouseEventHandler,
  useState,
} from "react";
import styles from "./LocationSearchForm.module.css";
import LocationSearchInput from "./LocationSearchInput/LocationSearchInput";
import LocationSubmitButton from "./LocationSubmitButton/LocationSubmitButton";

interface LocationSearchFormProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  onSubmit: (cityName: string) => (event: FormEvent<HTMLFormElement>) => void;
  geoPermission: boolean | undefined;
}

const LocationSearchForm = ({
  onClick,
  onSubmit,
  geoPermission,
}: LocationSearchFormProps) => {
  const [cityName, setCityName] = useState<string | undefined>("");

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setCityName(event.currentTarget.value);
    console.log(cityName);
  };

  return (
    <form
      className={styles.locationSearchForm}
      onSubmit={onSubmit(cityName as string)}
    >
      <LocationSearchInput
        geoPermission={geoPermission}
        onClick={onClick}
        onChange={onChangeHandler}
        value={cityName}
      />
      <LocationSubmitButton disabled={!cityName} />
    </form>
  );
};

export default LocationSearchForm;
