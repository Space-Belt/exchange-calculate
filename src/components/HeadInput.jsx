import { React } from "react";
import styles from "./HeadInput.module.css";
function HeadInput({ money, moneyChange, countryChange }) {
  return (
    <div className={styles.input_container}>
      <input
        type="text"
        className={styles.input_form}
        value={money}
        onChange={moneyChange}
        onKeyUp={moneyChange}
      />
      <select className={styles.select_box} onChange={countryChange}>
        <option>USD</option>
        <option>CAD</option>
        <option>KRW</option>
        <option>HKD</option>
        <option>JPY</option>
        <option>CNY</option>
      </select>
    </div>
  );
}

export default HeadInput;
