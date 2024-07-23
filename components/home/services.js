import React from "react";
import Image from "next/image";
// styles
import styles from "../../styles/home/services.module.css";

function index() {
  return (
    <section className={styles.services}>
      <div>
        <h2>Our Services</h2>

        <div>
          <div className={styles.service}>
            <div>
              <Image
                src="/assets/webDev-logo.jpg"
                alt="contract"
                width={50}
                height={50}
                layout="responsive"
              />
            </div>
            <button>WEB DEVELOPMENT</button>
          </div>

          <div className={styles.service}>
            <div>
              <Image
                src="/assets/design-logo.svg"
                alt="contract"
                width={50}
                height={50}
                layout="responsive"
              />
            </div>
            <button>LOGO DESIGN</button>
          </div>

          <div className={styles.service}>
            <div>
              <Image
                src="/assets/seo-logo.svg"
                alt="contract"
                width={50}
                height={50}
                layout="responsive"
              />
            </div>
            <button>SEO SERVICES</button>
          </div>
        </div>

        <div className={styles.bgPattern}>
          <Image
            src="/assets/bg-pattern-home-5.svg"
            width={100}
            height={100}
            alt="bg-pattern"
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
}

export default index;
