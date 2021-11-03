import styles from "./WeatherSummaryCard.module.css";
import Card from "UI/Components/DataDisplay/Card/Card";
import Temperature from "./Temperature/Temperature";
import Location from "./Location/Location";
import DateTimeDisplay from "./DateDisplay/DateTimeDisplay";
import Sky from "./Sky/Sky";
import ConditionDescription from "./ConditionDescription/ConditionDescription";
import {MouseEventHandler} from "react";

interface WeatherSummaryProps {
  temp: number;
  className?: string;
  conditionCode: number;
  cityName: string;
  conditionDescription: string;
  changeLocation: MouseEventHandler<HTMLButtonElement>;
}

const WeatherSummaryCard = ({
  temp = 0,
  cityName,
  conditionCode,
  conditionDescription,
  changeLocation,
  className = styles.weatherSummaryCardContainer,
}: WeatherSummaryProps) => {
  const date = new Date();
  const dateOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  } as const;
  const timeOptions = {
    hour12: false,
    hourCycle: "h24",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  } as const;
  const localeDate = date.toLocaleDateString("en-EN", dateOptions);
  const localeTime = date.toLocaleTimeString("en-EN", timeOptions);

  return (
    <Card className={className}>
      <DateTimeDisplay time={localeTime} date={localeDate} />
      <Location cityName={cityName} changeLocation={changeLocation}/>
      <Sky conditionCode={conditionCode}/>
      <ConditionDescription description={conditionDescription}/>
      <Temperature temp={temp} />
    </Card>
  );
};

export default WeatherSummaryCard;
