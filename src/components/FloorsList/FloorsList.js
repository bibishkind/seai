import styles from "./FloorsList.module.css";

const FloorsList = ({ addClassName, children }) => {
  return <ul className={`${styles.floorsList} ${addClassName}`}>{children}</ul>;
};

export default FloorsList;
