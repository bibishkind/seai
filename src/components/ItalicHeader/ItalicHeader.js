import styles from "./ItalicHeader.module.css";

const ItalicHeader = ({ addClassName, children }) => {
  return (
    <h1 className={`${styles.italicHeader} ${addClassName}`}>{children}</h1>
  );
};

export default ItalicHeader;
