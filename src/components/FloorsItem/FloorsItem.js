import styles from "./FloorsItem.module.css";

const FloorsItem = ({ addClassName, onClick, children }) => {
  return (
    <li className={`${styles.floorsItem} ${addClassName}`} onClick={onClick}>
      {children}
    </li>
  );
};

export default FloorsItem;
