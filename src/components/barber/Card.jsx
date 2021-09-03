import React, { useState } from 'react';
import styles from './card.module.css';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import LocalGroceryStoreOutlinedIcon from '@material-ui/icons/LocalGroceryStoreOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import GradeIcon from '@material-ui/icons/Grade';

function Card({ info }) {
  const [activeComponent, setActiveComponent] = useState(null);

  function changePick(e) {
    if (activeComponent) {
      activeComponent.className = '';
    }
    setActiveComponent(e.target);
    e.target.className = styles.pick;
  }

  return (
    <div>
      <div className={`${styles.container}`}>
        <div className={styles.innerwrap}>
          <section className={`${styles.section1} ${styles.clearfix}`}>
            <div>
              <div className={`${styles.row} ${styles.grid} ${styles.clearfix}`}>
                <div className={`${styles.col2} ${styles.first}`}>
                  <img src={'http://images.contactmusic.com/newsimages/david_beckham_1133321.jpg'} alt="" />
                  <h1>{info.name}</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's
                  </p>
                  <span>Follow</span>
                </div>
                <div className={`${styles.col2} ${styles.last}`}>
                  <div className={`${styles.grid} ${styles.clearfix}`}>
                    <div className={`${styles.col3} ${styles.first}`}>
                      <h1>694</h1>
                      <span>Following</span>
                    </div>{' '}
                    <div className={styles.col3}>
                      <h1>452</h1>
                      <span>Likes</span>
                    </div>
                    <div className={`${styles.col3} ${styles.last}`}>
                      <h1>1207</h1>
                      <span>Bookmarks</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.row} ${styles.clearfix}`}>
                <ul className={`${styles.row2tab} ${styles.clearfix}`}>
                  <li onClick={changePick}>
                    <AssignmentTurnedInOutlinedIcon style={{ fontSize: 25 }} /> Services{' '}
                  </li>
                  <li onClick={changePick}>
                    <SubscriptionsOutlinedIcon style={{ fontSize: 25 }} /> Subscribers{' '}
                  </li>
                  <li onClick={changePick}>
                    <LocalGroceryStoreOutlinedIcon style={{ fontSize: 25 }} /> Products{' '}
                  </li>
                  <li onClick={changePick}>
                    <BookOutlinedIcon style={{ fontSize: 25 }} /> Book Appointment{' '}
                  </li>
                </ul>
              </div>
            </div>
            <span className={styles.smalltri}>
              <GradeIcon className="star" style={{ fontSize: 23 }} />
            </span>
          </section>

          <section className={`${styles.section2} ${styles.clearfix}`}></section>
        </div>
      </div>
    </div>
  );
}

export default Card;
