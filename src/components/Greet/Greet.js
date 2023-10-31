import BoldHeader from "../BoldHeader/BoldHeader";
import ItalicHeader from "../ItalicHeader/ItalicHeader";
import HSELogo from "../HSELogo/HSELogo";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styles from "./Greet.module.css";

const Greet = () => {
  return (
    <div id={"greet"} className={styles.greet}>
      <AnimationOnScroll animateIn={"animate__fadeInLeft"}>
        <BoldHeader>Выпускники</BoldHeader>
      </AnimationOnScroll>
      <div className={styles.headersContainer}>
        <AnimationOnScroll animateIn={"animate__fadeInLeft"}>
          <ItalicHeader>Лучшего</ItalicHeader>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn={"animate__fadeInLeft"}>
          <BoldHeader>Университета</BoldHeader>
        </AnimationOnScroll>
      </div>
      <AnimationOnScroll animateIn={"animate__fadeInLeft"}>
        <BoldHeader>России</BoldHeader>
      </AnimationOnScroll>
      <div className={styles.headersContainer}>
        <AnimationOnScroll animateIn={"animate__fadeInLeft"}>
          <BoldHeader>К вашим</BoldHeader>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn={"animate__fadeInLeft"}>
          <BoldHeader>Услугам</BoldHeader>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn={"animate__fadeInLeft"}>
          <HSELogo addClassName={styles.hseLogo}></HSELogo>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Greet;
