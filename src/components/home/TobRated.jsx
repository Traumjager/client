import React from "react";

import styles from "./style/recom.module.css";
import RatedCard from "./RatedCard";
function TobRated() {
  return (<>
  <h2 className={styles.topRatedH} >Top Rated</h2>
    <div className={styles.rateContainer}>
      <RatedCard/>
      <RatedCard/>
      <RatedCard/>
      <RatedCard/>
    </div>
    </>
  );
}

export default TobRated;
