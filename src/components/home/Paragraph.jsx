import React from "react";
import styles from "./style/paragraph.module.css";

function Paragraph() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.image}>
        <div className={styles.imageInside}>
            <img src='https://images.unsplash.com/photo-1592647420148-bfcc177e2117?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFyYmVyc2hvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80' alt='' />
        </div>
      </div>

      <div className={styles.text}>
          <h2>Why Us?</h2>
          <p>The past year has proved to be difficult for all of us, but especially for beauty and barber professionals. Some have, unfortunately, had to close their doors. And although many are back behind the chair, some are still rebuilding. This could mean it’s time to consider working with a new stylist or barber.</p>
      </div>
    </div>
    
  );
}

export default Paragraph;
