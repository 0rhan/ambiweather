import { ReactChild } from "react";
import styles from "./Card.module.css";

interface CardProps {
  children: ReactChild | ReactChild[];
  className?: string;
}

const Card = ({ children, className = styles.cardContainer }: CardProps) => {
  return <div className={className}>{children}</div>;
};

export default Card;
