import sphere from "./sphere.mp4";
import styles from "./Sphere.module.css";

const Sphere = ({ addClassName }) => {
  return (
    <video
      className={`${styles.sphere} ${addClassName}`}
      src={sphere}
      autoPlay={true}
      muted={true}
      loop={true}
    ></video>
  );
};

export default Sphere;
