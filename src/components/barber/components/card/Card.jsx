import React from "react";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import LocalGroceryStoreOutlinedIcon from "@material-ui/icons/LocalGroceryStoreOutlined";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import GradeIcon from "@material-ui/icons/Grade";
import styles from "../../styles/card.module.css";

function Card({ info, changePick, active }) {
  return (
    <div className={styles.container}>
      <div className={styles.innerwrap}>
        <section className={`${styles.section1} ${styles.clearfix}`}>
          <div>
            <div className={`${styles.row} ${styles.grid} ${styles.clearfix}`}>
              <div className={`${styles.col2} ${styles.first}`}>
                <img src={info.profilePic} alt="" />
                <h1 style={{ color: "#f2f2f2" }}>{info.name}</h1>
                <span>Subscribe</span>

                <div
                  className={styles.infoData}
                >
                  <h3> <h3>Shop : </h3> {info.name}</h3>
                  <h3> <h3>Adress : </h3> {info.address}</h3>
                  <h3> <h3>Mobile : </h3> {info.phoneNumber}</h3>
                </div>
              </div>
              <div className={`${styles.col2} ${styles.last}`}>
                <div className={`${styles.grid} ${styles.clearfix}`}>
                  <div className={`${styles.col3} ${styles.first}`}>
                    <h1>
                      {info.rating} &nbsp;{" "}
                      <GradeIcon
                        className={`${styles.star}`}
                        style={{ fontSize: 31 }}
                      />
                    </h1>
                    <span>Rating</span>
                  </div>
                  <div className={`${styles.col3}`}>
                    <h1>{info.subscribers.length}</h1>
                    <span>Subscribers</span>
                  </div>
                  <div className={`${styles.col3} ${styles.last}`}>
                    <h3>{info.workingHours}</h3>
                    <span>Working Hours</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.row} ${styles.clearfix}`}>
              <ul className={`${styles.row2tab} ${styles.clearfix}`}>
                <li
                  onClick={changePick}
                  id="services"
                  className={active === "services" ? styles.pick : ""}
                >
                  <AssignmentTurnedInOutlinedIcon
                    onClick={changePick}
                    id="services"
                    style={{ fontSize: 25 }}
                  />{" "}
                  <span style={{ marginLeft: "10px" }}>Services</span>
                </li>
                <li
                  onClick={changePick}
                  id="products"
                  className={active === "products" ? styles.pick : ""}
                >
                  <LocalGroceryStoreOutlinedIcon
                    onClick={changePick}
                    id="products"
                    style={{ fontSize: 25 }}
                  />{" "}
                  <span style={{ marginLeft: "10px" }}>Products</span>
                </li>
                <li
                  onClick={changePick}
                  id="reviews"
                  className={active === "reviews" ? styles.pick : ""}
                >
                  <RateReviewOutlinedIcon
                    onClick={changePick}
                    id="reviews"
                    style={{ fontSize: 25 }}
                  />
                  <span style={{ marginLeft: "10px" }}>Reviwes</span>
                </li>
                <li
                  onClick={changePick}
                  id="subs"
                  className={active === "subs" ? styles.pick : ""}
                >
                  <SubscriptionsOutlinedIcon
                    onClick={changePick}
                    id="subs"
                    style={{ fontSize: 25 }}
                  />
                  <span style={{ marginLeft: "10px" }}>Subscriper</span>
                </li>
              </ul>
            </div>
          </div>
          {/* <span className={styles.smalltri}>
            <GradeIcon className={styles.star} style={{ fontSize: 20 }} />
          </span> */}
        </section>

        {/* <section className={`${styles.section2} ${styles.clearfix}`}></section> */}
      </div>
    </div>
  );
}

export default Card;
