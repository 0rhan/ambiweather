import Date from "./Date/Date";
import styles from "./DateTimeDisplay.module.css";
import Time from "./Time/Time";

interface DateTimeDisplayProps {
  time: string;
  date: string;
  className?: string;
}

const DateTimeDisplay = ({
  className = styles.dateTimeDisplay,
  time,
  date,
}: DateTimeDisplayProps) => {
  return (
    <div className={className}>
      <Time className={styles.time} time={time} />
      <Date className={styles.date} date={date} />
    </div>
  );
};

export default DateTimeDisplay;
