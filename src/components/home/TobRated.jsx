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
        <h2>Our Vision</h2>
        <h3>Our Vision</h3>
        <p>Question Assumptions. Think Deeply. Iterate as a Lifestyle. Details, Details. Hairstyles is Everywhere. Integrity.</p>
        <a href={()=> false}>Read More</a>
      </div>
    </div>
  </div>
  <div className={styles.card}>
    <div className={styles.box}>
      <div className={styles.content}>
        <h2>Our Goal</h2>
        <h3>Our Goal</h3>
        <p>To provide superior quality Hairstyling services that: we all need!</p>
        <a href={()=> false}>Read More</a>
      </div>
    </div>
  </div>
  <div className={styles.card}>
    <div className={styles.box}>
      <div className={styles.content}>
        <h2>Our Mission</h2>
        <h3>Our Mission</h3>
        <p>Is to make all of our customers satisfied and make booking for a barber a piece of cake!</p>
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
