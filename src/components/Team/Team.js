import Photo from "../Photo/Photo";
import denis from "./denis.png";
import maria from "./maria.png";
import evgeniy from "./evgeniy.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styles from "./Team.module.css";

const team = {
  denis: {
    boldHeader: "Денис",
    paragraph: "Frontend разработчик",
  },
  maria: {
    boldHeader: "Маша",
    paragraph: "Дизайнер",
  },
  evgeniy: {
    boldHeader: "Женя",
    paragraph: "Backend разработчик",
  },
};

const Team = () => {
  return (
    <div id={"team"} className={styles.team}>
      <AnimationOnScroll
        className={styles.photoContainer}
        animateIn={"animate__fadeInUp"}
      >
        <Photo
          addClassName={styles.photo}
          boldHeader={team.denis.boldHeader}
          paragraph={team.denis.paragraph}
          src={denis}
        ></Photo>
      </AnimationOnScroll>
      <AnimationOnScroll
        className={styles.photoContainer}
        animateIn={"animate__fadeInDown"}
      >
        <Photo
          addClassName={styles.photo}
          boldHeader={team.maria.boldHeader}
          paragraph={team.maria.paragraph}
          src={maria}
        ></Photo>
      </AnimationOnScroll>
      <AnimationOnScroll
        className={styles.photoContainer}
        animateIn={"animate__fadeInUp"}
      >
        <Photo
          addClassName={styles.photo}
          boldHeader={team.evgeniy.boldHeader}
          paragraph={team.evgeniy.paragraph}
          src={evgeniy}
        ></Photo>
      </AnimationOnScroll>
    </div>
  );
};

export default Team;
