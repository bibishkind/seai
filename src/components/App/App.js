import FloorsList from "../FloorsList/FloorsList";
import Home from "../Home/Home";
import Greet from "../Greet/Greet";
import Team from "../Team/Team";
import Tech from "../Tech/Tech";
import Contact from "../Contact/Contact";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.leftContainer}></div>
      <div className={styles.middleContainer}>
        <Home></Home>
        <Greet></Greet>
        <Team></Team>
        <Tech></Tech>
        <Contact></Contact>
      </div>
      <div className={styles.rightContainer}>
        <FloorsList></FloorsList>
      </div>
    </div>
  );
}

export default App;
