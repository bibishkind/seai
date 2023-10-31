import styles from "./TextArea.module.css";

const TextArea = ({ addClassName }) => {
  return <textarea className={`${styles.textarea} ${addClassName}`}></textarea>;
};

export default TextArea;
