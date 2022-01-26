import React, { useState, useEffect } from "react";
import styles from "./SecondCalculater.module.css";

function SecondCalculater() {
  const [exchange, setExchange] = useState([]);
  const [country, setCountry] = useState("KRW");
  const [money, setMoney] = useState(0);

  const getExchange = async () => {
    const response = await fetch(
      `http://apilayer.net/api/live?access_key=87b766f61ca40d4a69a9e0170c7dadd7&currencies=USD,KRW,JPY,PHP&source=USD&format=1`
    );
    const json = await response.json();
    setExchange(json.quotes);
  };
  useEffect(() => {
    getExchange();
  }, []);

  const handleCountry = (event) => {
    setCountry(event.target.value);
  };

  const showMoneyChange = (event) => {
    let changeMoney = event.target.value.replace(/,/g, "");
    if (event.type === "keyUp" && event.key < 0 && event.key > 9) {
      return;
    } else if (event.type === "change" && isNaN(changeMoney)) {
      return;
    }
    setMoney(changeMoney);
    changeMoney = Number(changeMoney).toLocaleString();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.secondContainer}>
        <h1>환율 계산</h1>
        <p>송금국가: 미국(USD)</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              수취국가:
              <select onChange={handleCountry} value={country}>
                <option value="KRW" select="true">
                  한국(KRW)
                </option>
                <option value="JPY">일본(JPY)</option>
                <option value="PHP">필리핀(PHP)</option>
              </select>
            </label>
          </div>
          <div>
            <p>
              환율:&nbsp;&nbsp;
              {Number(exchange["USD" + country]).toLocaleString()} &nbsp;
              {country}
              /USD
            </p>
          </div>
          <div>
            송금액:
            <input
              type="text"
              className={styles.howMuch}
              onChange={showMoneyChange}
              onKeyUp={showMoneyChange}
              value={money}
            />
            &nbsp;&nbsp; USD
            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </div>
        </form>
        <div>
          {/* <p>송금액을 제대로 입력해주세요.</p> */}
          <p>
            수취금액은{" "}
            {Number(money * exchange["USD" + country])
              .toLocaleString()
              .slice(0, -1)}{" "}
            {country}
            입니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SecondCalculater;
