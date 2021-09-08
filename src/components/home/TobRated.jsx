import React from "react";

import styles from "./style/vision.module.css";
import RatedCard from "./RatedCard";
function TobRated() {
  return (
    <>
    <div className={styles.rateContainer}>
      <div className={styles.container}>
  <div className={styles.card}>
    <div className={styles.box}>
      <div className={styles.content}>
        <h2>01</h2>
        <h3>Card One</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href={()=> false}>Read More</a>
      </div>
    </div>
  </div>
  <div className={styles.card}>
    <div className={styles.box}>
      <div className={styles.content}>
        <h2>02</h2>
        <h3>Card Two</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href={()=> false}>Read More</a>
      </div>
    </div>
  </div>
  <div className={styles.card}>
    <div className={styles.box}>
      <div className={styles.content}>
        <h2>03</h2>
        <h3>Card Three</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href={()=> false}>Read More</a>
      </div>
    </div>
  </div>
</div>
</div>
    </>
  );
}

export default TobRated;
