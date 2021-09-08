import { React, useState } from 'react';
import styles from './style/recom.module.css';
import instance, { url } from '../../API/axios';
import { Link } from 'react-router-dom';

function RatedCard({ barber }) {
  const [isSubscribed, setIsSubscribed] = useState(false);
  let clientId = 2;

  // subscribe handler
  async function subscribeHandler(barberId) {
    const response = await instance.post(`/client/subs`, { clientId, barberId });
    setIsSubscribed(true);
  }

  // Unsubscribe Handler
  async function unSubscribeHandler(barberId) {
    console.log(barberId, clientId);
    const response = await instance.delete(`/client/subs/${barberId}/${clientId}`);
    console.log(response);
    setIsSubscribed(false);
  }

  return (
    //   address: "حي الضباط"
    // age: 29
    // city: "al mafraq"
    // gender: "male"
    // holidays: "Friday"
    // id: 1
    // name: "hatem hatem"
    // phone_num: "0789881099"
    // profile_pic: "/images/profilePics/male.jpg"
    // shop_gender: "male"
    // shop_name: "Aragon Hair Styles"
    // state: "open"
    // working_hours: "10 am - 11 pm"
    <div className={styles.wrapper}>
      <div className={styles.imgArea}>
        <div className={styles.innerArea}>
          <img src={`${url}${barber.profile_pic}`} alt='' />
        </div>
      </div>
      <div className={`${styles.icon} ${styles.arrow}`}>
        <i className='fas fa-arrow-left'></i>
      </div>
      <div className={`${styles.icon} ${styles.dots}`}>
        <i className='fas fa-ellipsis-v'></i>
      </div>
      <div className={styles.name}>{barber.user_name}</div>
      <div className={styles.about}>{barber.city}</div>
      <div className={styles.socialIcons}>
        <a href='#' className={styles.fb}>
          <i className='fab fa-facebook-f'></i>
        </a>
        <a href='#' className={styles.twitter}>
          <i className='fab fa-twitter'></i>
        </a>
        <a href='#' className={styles.insta}>
          <i className='fab fa-instagram'></i>
        </a>
        <a href='#' className={styles.yt}>
          <i className='fab fa-youtube'></i>
        </a>
      </div>
      <div className={styles.buttons}>
        <Link to={`/barber-Profile/${barber.id}`}>
          <button>Visit Profile</button>
        </Link>

        {isSubscribed ? (
          <button
            onClick={() => {
              unSubscribeHandler(barber.id);
            }}
          >
            UnSubscribe
          </button>
        ) : (
          <button
            onClick={() => {
              subscribeHandler(barber.id);
            }}
          >
            Subscribe
          </button>
        )}
      </div>
    </div>
  );
}

export default RatedCard;
