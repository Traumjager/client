import React, { useEffect } from 'react';
import { CollectionsBookmarkOutlined, Edit, SubscriptionsOutlined } from '@material-ui/icons';
import styles from './style/card.module.css';
import {url} from '../../API/axios';
function Card({ info, changePick, active, subscribed, handleOpen }) { 
  return (
    <div className={styles.container}>
      <div className={styles.innerwrap}>
        <section className={`${styles.section1} ${styles.clearfix}`}>
          <div>
            <div className={`${styles.row} ${styles.grid} ${styles.clearfix}`}>
              <div className={styles.edit} onClick={handleOpen}>
                <i class="far fa-edit"></i>
              </div>
              <div className={`${styles.col2} ${styles.first}`}>
                
                <img src={`${url}${info.profile_pic}`} alt="" />
                <h1 style={{ color: '#f2f2f2' }}>{`${info.user_name}`}</h1>
                <span>bla bla</span>
                <div className={styles.infoData}>
                  <h3>
                    {' '}
                    <h3>City : </h3> {info.city}
                  </h3>
                  <h3>
                    {' '}
                    <h3>Mobile : </h3> {info.phone_num}
                  </h3>
                </div>
              </div>
              <div className={`${styles.col2} ${styles.last}`}>
                <div className={`${styles.grid} ${styles.clearfix}`}>
                  <div className={`${styles.col3} ${styles.first}`}>
                    <h1>{info.products} &nbsp; Products</h1>
                    <span>Bought</span>
                  </div>
                  <div className={`${styles.col3}`}>
                    <h1>{subscribed.length} Barbers</h1>
                    <span>Following</span>
                  </div>
                  <div className={`${styles.col3} ${styles.last}`}>
                    <h1>{info.services} Service</h1>
                    <span>Made</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.row} ${styles.clearfix}`}>
              <ul className={`${styles.row2tab} ${styles.clearfix}`}>
                <li onClick={changePick} id="bookedServices" className={active === 'bookedServices' ? styles.pick : ''}>
                  <div className={styles.icon}>
                    <CollectionsBookmarkOutlined onClick={changePick} id="bookedServices" style={{ fontSize: 25 }} />{' '}
                    <span onClick={changePick} id="bookedServices" style={{ marginLeft: '10px' }}>
                      Booked Services
                    </span>
                  </div>
                </li>
                <li
                  onClick={changePick}
                  id="subscribedBarbers"
                  className={active === 'subscribedBarbers' ? styles.pick : ''}
                >
                  <div className={styles.icon}>
                    <SubscriptionsOutlined onClick={changePick} id="subscribedBarbers" style={{ fontSize: 25 }} />
                    <span onClick={changePick} id="subscribedBarbers" style={{ marginLeft: '10px' }}>
                      Subscribed Barbers
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Card;
