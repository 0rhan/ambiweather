import styles from "./ConditionDescription.module.css"

interface ConditionDescriptionProps {
  description: string;
}

const ConditionDescription = ({ description }: ConditionDescriptionProps) => {
  return <p className={styles.conditionDescription}>{description}</p>;
};

export default ConditionDescription;
