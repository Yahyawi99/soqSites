import React from "react";
import Image from "next/image";
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

        <p>
          <span>Based in Casablanca</span>, Morocco, Soqsites is your go-to web
          digital agency for launching digital products swiftly and effectively.
          Beyond code compliance, we advocate for your business from every
          angle, ensuring full support and market success.
        </p>
      </div>

      <div className={styles.bgPattern1}>
        <Image
          src="/assets/bg-pattern-home-1.svg"
          width={100}
          height={100}
          alt="bg-pattern-1"
          layout="responsive"
        />
      </div>

      <div className={styles.bgPattern2}>
        <Image
          src="/assets/bg-pattern-home-2.svg"
          width={100}
          height={100}
          alt="bg-pattern-1"
          layout="responsive"
        />
      </div>
    </section>
  );
}

export default Intro;
