import styles from "./Input.module.css";

const Input = ({ addClassName }) => {
  return <input className={`${styles.input} ${addClassName}`} />;
};

export default Input;
