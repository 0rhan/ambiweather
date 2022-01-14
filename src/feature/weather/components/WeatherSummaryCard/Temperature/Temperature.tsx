import styles from "./Temperature.module.css";

interface TemperatureProps {
  temp: number;
  className?: string;
}

const Temperature = ({
  temp,
  className = styles.temperature,
}: TemperatureProps) => {
  return <div className={className}>{temp}°C</div>;
};

export default Temperature;
