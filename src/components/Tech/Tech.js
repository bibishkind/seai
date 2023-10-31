import { AnimationOnScroll } from "react-animation-on-scroll";
import BoldHeader from "../BoldHeader/BoldHeader";
import Sphere from "../Sphere/Sphere";
import BlueHeader from "../BlueHeader/BlueHeader";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";
import styles from "./Tech.module.css";
import { useEffect, useState } from "react";

const descriptions = [
  {
    boldParagraph: "React",
    paragraph:
      "React выгоден для бизнеса, так как благодаря использованию этой библиотеки, можно быстро и легко создавать новые продукты и улучшать уже существующие.",
  },
  {
    boldParagraph: "Go",
    paragraph:
      "Go — это очень быстрый язык благодаря «горутинам» — технологии, которая обеспечивает еще более высокую скорость, чем традиционные потоки.",
  },
  {
    boldParagraph: "Микросервисы",
    paragraph:
      "Один из основных плюсов микросервисов — повышение показателей доступности и отказоустойчивости.",
  },
  {
    boldParagraph: "Python",
    paragraph:
      "Основными преимуществами языка Python являются: скорость разработки, простой и понятный синтаксис, легкость в изучении, множество фреймворков и библиотек и, конечно же, гибкость.",
  },
];

const Tech = () => {
  const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState(0);
  const [animateCurrent, setAnimateCurrent] = useState(true);
  useEffect(() => {
    setAnimateCurrent(true);
  }, [currentDescriptionIndex]);
  if (currentDescriptionIndex > descriptions.length - 1) {
    setCurrentDescriptionIndex(0);
    return;
  }
  return (
    <div id={"tech"} className={styles.tech}>
      <AnimationOnScroll animateIn="animate__fadeInLeft">
        <BoldHeader>Грамотный выбор технологий</BoldHeader>
      </AnimationOnScroll>
      <div className={styles.contentContainer}>
        <div className={styles.descriptionContainer}>
          <BlueHeader
            addClassName={`${styles.blueHeader} ${
              animateCurrent
                ? "animate__animated animate__fadeIn animate__slow"
                : styles.opacity
            }`}
          >
            {descriptions[currentDescriptionIndex].boldParagraph}
          </BlueHeader>
          <Paragraph
            addClassName={
              animateCurrent
                ? "animate__animated animate__fadeIn animate__slow"
                : styles.opacity
            }
          >
            {descriptions[currentDescriptionIndex].paragraph}
          </Paragraph>
          <Button
            onClick={() => {
              setCurrentDescriptionIndex(currentDescriptionIndex + 1);
              setAnimateCurrent(false);
            }}
          >
            Далее
          </Button>
        </div>
        <AnimationOnScroll
          className={styles.sphereContainer}
          animateIn={"animate__fadeIn"}
        >
          <Sphere addClassName={styles.sphere}></Sphere>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Tech;
