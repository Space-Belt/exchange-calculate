import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.navBox}>
      <ul>
        <li>
          <Link to="/">First Calc</Link>
        </li>
        <li>
          <Link to="/second">Second Calc</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
