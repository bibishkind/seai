import styles from "./Label.module.css";

const Label = ({ addClassName, children }) => {
  return (
    <label className={`${styles.label} ${addClassName}`}>{children}</label>
  );
};

export default Label;
