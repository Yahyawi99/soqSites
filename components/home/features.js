import React from "react";
import Image from "next/image";
// styles
import styles from "../../styles/home/features.module.css";

function index() {
  return (
    <section className={styles.features}>
      <div>
        <div>
          <h3>
            <span>We make</span> first-class websites.
          </h3>
          <p>
            Most web agencies stop after web design, WE don't! We know much
            better.
          </p>
        </div>

        <div>
          <div>
            <Image
              src="/assets/icon-contract.png"
              alt="contract"
              width={50}
              height={50}
            />
            <h3>Contract-Free</h3>
            <p>
              We think that the true contract between us is the quality of our
              job; we do not believe in tying clients up with unsatisfactory
              contracts.
            </p>
          </div>

          <div>
            <Image
              src="/assets/icon-tasks.png"
              alt="tasks"
              width={50}
              height={50}
            />
            <h3>Transparency</h3>
            <p>
              Nothing is more critical than the trust we have with our
              customers. As William Shakespeare says: Honesty is the best
              policy.
            </p>
          </div>

          <div>
            <Image
              src="/assets/icon-happy.png"
              alt="happy"
              width={50}
              height={50}
            />
            <h3>Customer Success</h3>
            <p>
              When you work with SoqSites, you join our growing list of
              satisfied clients. When our customers grow, we grow as well.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.bgPattern}>
        <Image
          src="/assets/bg-pattern-home-3.svg"
          width={100}
          height={100}
          alt="bg-pattern"
          layout="responsive"
        />
      </div>
    </section>
  );
}

export default index;
