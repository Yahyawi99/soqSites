import React from "react";
import Image from "next/image";
// styles
import styles from "../../styles/shared/header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.imgContainer}>
          <Image
            src="/assets/logo.png"
            width={100}
            height={100}
            alt="logo"
            layout="responsive"
            priority
          />
        </div>

        <nav className={styles.nav}>
          <ul>
            <li>Home</li>
            <li>Our Services</li>
            <li>Company</li>
          </ul>

          <button>Contact</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
