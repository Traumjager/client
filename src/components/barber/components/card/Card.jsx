import React, { useState } from 'react';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import LocalGroceryStoreOutlinedIcon from '@material-ui/icons/LocalGroceryStoreOutlined';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import GradeIcon from '@material-ui/icons/Grade';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
import styles from '../../styles/card.module.css';
import AccountSettings from '../../../ClientProfile/AccountSettings';

function Card({ info, changePick, active }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerwrap}>
        <section className={`${styles.section1} ${styles.clearfix}`}>
          <div>
            <div className={`${styles.row} ${styles.grid} ${styles.clearfix}`}>
              <div className={`${styles.col2} ${styles.first}`}>
                <img src={info.profilePic} alt="" />

                <h1 style={{ color: '#f2f2f2' }}>{`${info.firstName} ${info.lastName}`}</h1>
                <span onClick={() => handleOpen()}>Subscribe</span>
                <div className={styles.infoData}>
                  <h3>
                    {' '}
                    <h3>Shop : </h3> {info.shopName}
                  </h3>
                  <h3>
                    {' '}
                    <h3>Adress : </h3> {info.address}
                  </h3>
                  <h3>
                    {' '}
                    <h3>Mobile : </h3> {info.phoneNumber}
                  </h3>
                </div>
              </div>
              <div className={`${styles.col2} ${styles.last}`}>
                <div className={`${styles.grid} ${styles.clearfix}`}>
                  <div className={`${styles.col3} ${styles.first}`}>
                    <h1>
                      {info.rating} &nbsp; <GradeIcon className={`${styles.star}`} style={{ fontSize: 31 }} />
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
                <li onClick={changePick} id="services" className={active === 'services' ? styles.pick : ''}>
                  <div className={styles.icon}>
                    <AssignmentTurnedInOutlinedIcon onClick={changePick} id="services" style={{ fontSize: 25 }} />{' '}
                    <span onClick={changePick} id="services" style={{ marginLeft: '10px' }}>
                      Services
                    </span>
                  </div>
                </li>
                <li onClick={changePick} id="products" className={active === 'products' ? styles.pick : ''}>
                  <div className={styles.icon}>
                    <LocalGroceryStoreOutlinedIcon onClick={changePick} id="products" style={{ fontSize: 25 }} />{' '}
                    <span onClick={changePick} id="products" style={{ marginLeft: '10px' }}>
                      Products
                    </span>
                  </div>
                </li>
                <li onClick={changePick} id="reviews" className={active === 'reviews' ? styles.pick : ''}>
                  <div className={styles.icon}>
                    <RateReviewOutlinedIcon onClick={changePick} id="reviews" style={{ fontSize: 25 }} />
                    <span onClick={changePick} id="reviews" style={{ marginLeft: '10px' }}>
                      Reviews
                    </span>
                  </div>
                </li>
                <li onClick={changePick} id="subs" className={active === 'subs' ? styles.pick : ''}>
                  <div className={styles.icon}>
                    <SubscriptionsOutlinedIcon onClick={changePick} id="subs" style={{ fontSize: 25 }} />
                    <span onClick={changePick} id="subs" style={{ marginLeft: '10px' }}>
                      Subscribers
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {showModal&&<AccountSettings handleOpen={handleOpen} userType={"barber"} user={info} handleClose={handleClose} showModal={showModal} />}
        {/* <section className={`${styles.section2} ${styles.clearfix}`}></section> */}
      </div>
    </div>
  );
}

export default Card;
