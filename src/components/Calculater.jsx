import { React, useState, useEffect } from "react";
import CalculateResult from "./CalculateResult";
import HeadInput from "./HeadInput";
import styles from "./Calculate.module.css";

function Calculater() {
  // **********   DATE   ********** //
  const date = new Date();
  const year = date.getFullYear();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();

  // **********   API   ********** //
  const [exchange, setExchange] = useState([]);
  const getExchange = async () => {
    const response = await fetch(
      `http://apilayer.net/api/live?access_key=87b766f61ca40d4a69a9e0170c7dadd7&currencies=USD,CAD,KRW,HKD,JPY,CNY&source=USD&format=1`
    );
    const json = await response.json();
    setExchange(json.quotes);
  };
  useEffect(() => {
    getExchange();
  }, []);

  // **********   INPUT   ********** //
  const [money, setMoney] = useState("");
  const [country, setCountry] = useState("USD");
  // const []
  // **********   RESULT   ********** //
  const countries = ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"];
  const [countriesMenu, setCountriesMenu] = useState(countries.slice(1));

  // **********   Input , Result Country    **********
  const countryChange = (event) => {
    const selectCountry = event.target.value;
    const newCountries = countries.filter((tab) => tab !== selectCountry);
    setCountry(selectCountry);
    setCountriesMenu(newCountries);
    setCurrentTab(newCountries[0]);
  };

  // **********   INPUT Money 입력  ********** //
  const moneyChange = (event) => {
    let changeMoney = event.target.value.replace(/,/g, "");
    if (event.type === "keyUp" && event.key < 0 && event.key > 9) {
      return;
    } else if (event.type === "change" && isNaN(changeMoney)) {
      return;
    }
    changeMoney = Number(changeMoney).toLocaleString();
    setMoney(changeMoney);
  };

  // **********   Result tabClick 기본 & click 됐을때  ********** //
  const [currentTab, setCurrentTab] = useState("CAD");
  const tabClick = (event) => {
    const clickedTab = event.target.innerText;
    setCurrentTab(clickedTab);
  };

  return (
    <div className={styles.container}>
      <HeadInput
        money={money}
        country={country}
        moneyChange={moneyChange}
        countryChange={countryChange}
      />
      <CalculateResult
        money={money}
        country={country}
        exchange={exchange}
        currentTab={currentTab}
        date={`${year}-${month}-${day}`}
        countriesMenu={countriesMenu}
        tabClick={tabClick}
      />
    </div>
  );
}

export default Calculater;
