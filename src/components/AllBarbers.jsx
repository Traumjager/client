import { React, useState } from 'react';
import '../style/AllBarbers.css';

export default function AllBarbers() {
  // user_name varchar(255) NOT NULL,
  // email varchar(255) NOT NULL,
  // password varchar(255) NOT NULL,
  // city varchar(255) NOT NULL,
  // address varchar(255) NOT NULL,
  // gender varchar(255),
  // age int,
  // shop_gender  varchar(255) NOT NULL,
  // shop_name varchar(255) NOT NULL,
  // phone_num varchar(255),
  // profile_pic varchar(255),
  // working_hours varchar(255),
  // holidays varchar(255),
  // state varchar(255),
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
      'https://scontent.famm2-3.fna.fbcdn.net/v/t1.6435-9/196709769_2074808709326359_2775027692625290496_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGFOM9IQSZQDbxqZAmA9hyAI0SWV6srTsYjRJZXqytOxtl7xIfawVpKudayZYpAo48xQ6BY5TIhfUBcYClBfgdh&_nc_ohc=F0H728oRJnIAX-sIuP5&_nc_ht=scontent.famm2-3.fna&oh=49a25acff53aa6653679fabe5136fdb4&oe=61561B09',
    workingHours: '8 Am - 5 Pm ',
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
      <div className='wrapper'>
        {allBarbers.map((item) => (
          <div className='profile-card js-profile-card'>
            <div className='profile-card__img'>
              <img src={item.profilePicture} alt='profile card' />
            </div>

            <div className='profile-card__cnt js-profile-cnt'>
              <div className='profile-card__name'>{item.userName}</div>
              {/* <div className='profile-card__txt'>{item.email}</div> */}
              <div className='profile-card-loc'>
                <span className='profile-card-loc__icon'>
                  <svg className='icon'>{/* <use xlink:href='#icon-location'></use> */}</svg>
                </span>

                <span className='profile-card-loc__txt'>{item.city}</span>
              </div>

              <div className='profile-card-inf'>
                <div className='profile-card-inf__item'>
                  <div className='profile-card-inf__title'>{followers}</div>
                  <div className='profile-card-inf__txt'>Followers</div>
                </div>

                <div className='profile-card-inf__item'>
                  <div className='profile-card-inf__title'>{following}</div>
                  <div className='profile-card-inf__txt'>Following</div>
                </div>

                <div className='profile-card-inf__item'>
                  <div className='profile-card-inf__title'>{allBarberServices}</div>
                  <div className='profile-card-inf__txt'>Services</div>
                </div>

                <div className='profile-card-inf__item'>
                  <div className='profile-card-inf__title'>{allBarberProducts}</div>
                  <div className='profile-card-inf__txt'>Products</div>
                </div>
              </div>

              <div className='profile-card-ctr'>
                <button className='profile-card__button button--blue js-message-btn'>Follow</button>
                <button className='profile-card__button button--orange'>Visit Page</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
