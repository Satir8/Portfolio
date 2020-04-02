import React from "react";
import styles from "./Burger.module.css";

const Burger = ({ isActive, onToggle }) => {
  return (
    <div className={styles.burger} onClick={onToggle}>
      <span
        className={isActive ? styles.activeSp1 : styles.notActiveSp1}
      ></span>
      <span
        className={isActive ? styles.activeSp2 : styles.notActiveSp2}
      ></span>
      <span
        className={isActive ? styles.activeSp3 : styles.notActiveSp3}
      ></span>
    </div>
  );
};

export default Burger;
