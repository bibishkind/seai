import hseLogo from "./hse-logo.svg";
import styles from "./HSELogo.module.css";

const HSELogo = ({ addClassName }) => {
  return (
    <img
      className={`${styles.hseLogo} ${addClassName}`}
      src={hseLogo}
      alt={""}
    />
  );
};

export default HSELogo;
