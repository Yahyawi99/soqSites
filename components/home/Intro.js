import React from "react";
// components
import Header from "../shared/Header";
// styles
import styles from "../../styles/home/intro.module.css";

function Intro() {
  return (
    <section className={styles.intro}>
      <Header />

      <div>
        <h1>
          Transform your <span>online</span> presence
        </h1>
      </div>
    </section>
  );
}

export default Intro;
