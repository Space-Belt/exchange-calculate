import { React } from "react";
import Calculater from "../components/Calculater";
import styles from "./FirstCalculater.module.css";

function FirstCalculater() {
  return (
    <div className={styles.container}>
      <Calculater />
    </div>
  );
}

export default FirstCalculater;
