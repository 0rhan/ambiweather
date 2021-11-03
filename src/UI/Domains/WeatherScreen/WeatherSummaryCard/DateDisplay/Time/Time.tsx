import styles from "./Time.module.css";

interface TimeProps {
  time: string;
  className?: string;
}

const Time = ({ className = styles.time, time }: TimeProps) => {
  return <div className={className}>{time}</div>;
};

export default Time;
