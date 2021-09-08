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
          <h2>text here</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora hic dolor dignissimos. Unde est dicta laudantium vitae voluptatem eos ad non incidunt consectetur nisi corrupti repellendus quod nam, facere quasi!</p>
      </div>
    </div>
    
  );
}

export default Paragraph;
