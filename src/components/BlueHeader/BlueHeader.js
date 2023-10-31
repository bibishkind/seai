import styles from "./BlueHeader.module.css";

const BlueHeader = ({ addClassName, children }) => {
  return <h1 className={`${styles.blueHeader} ${addClassName}`}>{children}</h1>;
};

export default BlueHeader;
