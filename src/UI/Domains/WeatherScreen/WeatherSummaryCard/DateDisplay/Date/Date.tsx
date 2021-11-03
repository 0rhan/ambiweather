import styles from "./Date.module.css";

interface DateProps {
  date: string;
  className?: string;
}

const Date = ({ date, className = styles.date }: DateProps) => {
  return <div className={className}>{date}</div>;
};

export default Date;
