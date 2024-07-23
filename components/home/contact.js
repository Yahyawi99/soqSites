import React from "react";
import Image from "next/image";
// styles
import styles from "../../styles/home/contact.module.css";

function Contact() {
  return (
    <section className={styles.contact}>
      <div>
        <h2>Ready to get started?</h2>
        <button>contact us</button>
      </div>

      <div className={styles.bgPattern}>
        <Image
          src="/assets/bg-pattern-home-6-about-5.svg"
          width={100}
          height={100}
          alt="bg-pattern"
          layout="responsive"
        />
      </div>
    </section>
  );
}

export default Contact;
