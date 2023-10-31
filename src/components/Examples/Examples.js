import BlueHeader from "../BlueHeader/BlueHeader";
import BoldHeader from "../BoldHeader/BoldHeader";
import ItalicHeader from "../ItalicHeader/ItalicHeader";
import Paragraph from "../Paragraph/Paragraph";
import Label from "../Label/Label";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";
import HSELogo from "../HSELogo/HSELogo";
import Sphere from "../Sphere/Sphere";
import DashCircle from "../DashCircle/DashCircle";
import Photo from "../Photo/Photo";
import penelopaCruz from "./penelopa-cruz.png";
import FloorsList from "../FloorsList/FloorsList";
import FloorsItem from "../FloorsItem/FloorsItem";
import ContactForm from "../ContactForm/ContactForm";
import styles from "./Example.module.css";

const Item = ({ children }) => {
  return <div className={styles.item}>{children}</div>;
};

const WrapComponentsToItems = (components) => {
  const items = [];
  components.children.forEach((component, index) =>
    items.push(<Item key={index}>{component}</Item>),
  );
  return items;
};

const Examples = () => {
  return (
    <div className={styles.examples}>
      <WrapComponentsToItems>
        <BlueHeader>BlueHeader</BlueHeader>
        <BoldHeader>BoldHeader</BoldHeader>
        <ItalicHeader>ItalicHeader</ItalicHeader>
        <Paragraph>Paragraph</Paragraph>
        <Label>
          <Input></Input>
          Input
        </Label>
        <Label>
          <TextArea></TextArea>
          TextArea
        </Label>
        <Button>Button</Button>
        <HSELogo></HSELogo>
        <Sphere></Sphere>
        <DashCircle></DashCircle>
        <Photo
          boldHeader={"BoldHeader"}
          paragraph={"Paragraph"}
          src={penelopaCruz}
        ></Photo>
        <FloorsList>
          <FloorsItem>01</FloorsItem>
          <FloorsItem>02</FloorsItem>
          <FloorsItem>03</FloorsItem>
          <FloorsItem>04</FloorsItem>
          <FloorsItem>05</FloorsItem>
        </FloorsList>
        <ContactForm></ContactForm>
      </WrapComponentsToItems>
    </div>
  );
};

export default Examples;
