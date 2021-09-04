import { React, useState } from 'react';
import styles from './style/AllBarbers.module.css';

export default function AllBarbers() {
  const barber = {
    userName: 'Saleh Al Hallaq',
    email: 'saleh@gmail.com',
    city: 'Amman, Jordan',
    address: 'location.GPS',
    gender: 'Male',
    age: 28,
    shopGender: 'for Men',
    shopName: 'Sha3rati',
    phoneNumber: '0771253651',
    profilePicture:
      'https://scontent.famm2-3.fna.fbcdn.net/v/t1.6435-9/196709769_2074808709326359_2775027692625290496_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGFOM9IQSZQDbxqZAmA9hyAI0SWV6srTsYjRJZXqytOxtl7xIfawVpKudayZYpAo48xQ6BY5TIhfUBcYClBfgdh&_nc_ohc=AR1HtgIzKpAAX9rgxWv&_nc_ht=scontent.famm2-3.fna&oh=0612e47b0b1225ee6732e1ec143e81ce&oe=61561B09',
    workingHours: '8 Am _ 5 Pm ',
    holidays: 'Monday',
    state: 'open',
  };
  const [allBarbers, setAllBarbers] = useState([barber, barber, barber, barber, barber, barber, barber]);
  const [allBarberServices, setAllBarberServices] = useState(23);
  const [allBarberProducts, setAllBarberProducts] = useState(16);
  const [followers, setFollowers] = useState(1258);
  const [following, setFollowing] = useState(49);

  return (
    <>
      <div className={styles.wrapper}>
        {allBarbers.map((item) => (
          <div className={`${styles.profile_card} ${styles.js_profile_card}`}>
            <div className={styles.profile_card__img}>
              <img src={item.profilePicture} alt={`${styles.profile} ${styles.card}`} />
            </div>

            <div className={`${styles.profile_card__cnt} ${styles.js_profile_cnt}`}>
              <div className={styles.profile_card__name}>{item.userName}</div>
              {/* <div className='profile_card__txt'>{item.email}</div> */}
              <div className={styles.profile_card_loc}>
                <span className={styles.profile_card_loc__icon}></span>

                <span className={styles.profile_card_loc__txt}>{item.city}</span>
              </div>

              <div className={styles.profile_card_inf}>
                <div className={styles.profile_card_inf__item}>
                  <div className={styles.profile_card_inf__title}>{followers}</div>
                  <div className={styles.profile_card_inf__txt}>Followers</div>
                </div>

                <div className={styles.profile_card_inf__item}>
                  <div className={styles.profile_card_inf__title}>{following}</div>
                  <div className={styles.profile_card_inf__txt}>Following</div>
                </div>

                <div className={styles.profile_card_inf__item}>
                  <div className={styles.profile_card_inf__title}>{allBarberServices}</div>
                  <div className={styles.profile_card_inf__txt}>Services</div>
                </div>

                <div className={styles.profile_card_inf__item}>
                  <div className={styles.profile_card_inf__title}>{allBarberProducts}</div>
                  <div className={styles.profile_card_inf__txt}>Products</div>
                </div>
              </div>

              <div className={styles.profile_card_ctr}>
                <button className={`${styles.profile_card__button} ${styles.button_blue} ${styles.js_message_btn}`}>Follow</button>
                <button className={`${styles.profile_card__button} ${styles.button_orange}`}>Visit Page</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
