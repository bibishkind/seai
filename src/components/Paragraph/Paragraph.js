import styles from "./Paragraph.module.css";

const Paragraph = ({ addClassName, children }) => {
  return <p className={`${styles.paragraph} ${addClassName}`}>{children}</p>;
};

export default Paragraph;
