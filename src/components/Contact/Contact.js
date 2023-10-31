import ItalicHeader from "../ItalicHeader/ItalicHeader";
import { AnimationOnScroll } from "react-animation-on-scroll";
import ContactForm from "../ContactForm/ContactForm";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div id={"contact"} className={styles.contact}>
      <AnimationOnScroll animateIn="animate__fadeInLeft">
        <ItalicHeader>Напишите нам</ItalicHeader>
      </AnimationOnScroll>
      <div className={styles.contactFormContainer}>
        <ContactForm addClassName={styles.contactForm}></ContactForm>
      </div>
    </div>
  );
};

export default Contact;
