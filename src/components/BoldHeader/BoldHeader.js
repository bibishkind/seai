import styles from "./BoldHeader.module.css";

const BoldHeader = ({ addClassName, children }) => {
  return <h1 className={`${styles.boldHeader} ${addClassName}`}>{children}</h1>;
};

export default BoldHeader;
