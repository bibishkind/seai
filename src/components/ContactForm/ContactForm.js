import Button from "../Button/Button";
import Label from "../Label/Label";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import styles from "./ContactForm.module.css";

const ContactForm = ({ addClassName }) => {
  return (
    <div className={`${styles.contactForm} ${addClassName}`}>
      <div className={styles.labelsContainer}>
        <div className={styles.inputsContainer}>
          <Label>
            <Input></Input>
            Имя
          </Label>
          <Label>
            <Input></Input>
            Почта
          </Label>
          <Label>
            <Input></Input>
            Компания
          </Label>
        </div>
        <Label addClassName={styles.labelTextArea}>
          <TextArea addClassName={styles.textarea}></TextArea>
          Сообщение
        </Label>
      </div>
      <Button>Отправить</Button>
    </div>
  );
};

export default ContactForm;
