import BoldHeader from "../BoldHeader/BoldHeader";
import BlueHeader from "../BlueHeader/BlueHeader";
import Sphere from "../Sphere/Sphere";
import DashCircle from "../DashCircle/DashCircle";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div id={"home"} className={styles.home}>
      <BoldHeader
        addClassName={`${styles.boldHeader} animate__animated animate__fadeInDown animate__delay-1s`}
      >
        2023
      </BoldHeader>
      <BlueHeader
        addClassName={`${styles.blueHeader} animate__animated animate__fadeInLeft`}
      >
        Современные технологии
      </BlueHeader>
      <Sphere
        addClassName={`${styles.sphere} animate__animated animate__fadeIn`}
      ></Sphere>
      <div
        className={`${styles.dashCircleContainer} animate__animated animate__fadeIn animate__delay-1s`}
      >
        <DashCircle addClassName={styles.dashCircle}></DashCircle>
      </div>
    </div>
  );
};

export default Home;
