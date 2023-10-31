import styles from "./Button.module.css";

const Button = ({ addClassName, onClick, children }) => {
  return (
    <button className={`${styles.button} ${addClassName}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
