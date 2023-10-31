import BoldHeader from "../BoldHeader/BoldHeader";
import Paragraph from "../Paragraph/Paragraph";
import styles from "./Photo.module.css";

const Photo = ({ addClassName, boldHeader, paragraph, src }) => {
  return (
    <div className={`${styles.photo} ${addClassName}`}>
      <img className={styles.img} src={src} alt={""} />
      <div className={styles.transition}>
        <div className={styles.description}>
          <BoldHeader addClassName={styles.photoBoldHeader}>
            {boldHeader}
          </BoldHeader>
          <Paragraph addClassName={styles.photoParagraph}>
            {paragraph}
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default Photo;
