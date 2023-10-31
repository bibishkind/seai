import dashCircle from "./dash-circle.svg";
import styles from "./DashCircle.module.css";

const DashCircle = ({ addClassName }) => {
  return (
    <img
      className={`${styles.dashCircle} ${addClassName}`}
      src={dashCircle}
      alt={""}
    />
  );
};

export default DashCircle;
