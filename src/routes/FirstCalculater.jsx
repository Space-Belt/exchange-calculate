import { React } from "react";
import Calculater from "../components/Calculater";
// import SecondCalculater from "../components/SecondCalculater";
import styles from "./FirstCalculater.module.css";

function FirstCalculater() {
  return (
    <div className={styles.container}>
      <Calculater />
      {/* <SecondCalculater /> */}
    </div>
  );
}

export default FirstCalculater;
