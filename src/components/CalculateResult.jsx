import React from "react";
import styles from "./CalculateResult.module.css";

function CalculateResult({
  countriesMenu,
  money,
  date,
  country,
  exchange,
  tabClick,
  currentTab,
}) {
  let numberMoney = Number(money.replace(/,/g, ""));
  let resultMoney = (
    numberMoney *
    (exchange["USD" + currentTab] / exchange["USD" + country])
  )
    .toFixed(2)
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  return (
    <div className={styles.resultBox}>
      <ul className={styles.tabMenus}>
        {countriesMenu.map((data, i) => (
          <li
            key={i}
            onClick={tabClick}
            className={data === currentTab ? styles.active : null}
            value={data}
          >
            {console.log({ data })}
            {data}
          </li>
        ))}
      </ul>
      <div className={styles.result}>
        <p>
          {currentTab} &nbsp;
          {resultMoney}
        </p>
        <span>기준일 :</span>
        <span className={styles.date}>{date}</span>
      </div>
    </div>
  );
}

export default CalculateResult;
