import React, { useState, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { PersonAddDisabledOutlined, PersonOutline, RateReviewOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import css from '../barber/styles/subscriber.module.scss';
import { Rating } from '@material-ui/lab';
import instance, { url } from '../../API/axios';
import CreateReview from './reviews/CreateReview';

import {useParams} from 'react-router-dom'
//generate random number between 1 and 100
function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(100));
}

function SubscribedBarbers() {

  const {id} = useParams()

  const [barbers, setBarbers] = useState([]);
  const [review, setReview] = useState({});
  useEffect(() => {
    fetchSubscribedBarbers();
    console.log('ccccc');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  function unsubscribe(id) {
    setBarbers(barbers.filter((barber) => barber.id !== id));
  }
  async function fetchSubscribedBarbers() {
    
    const response = await instance.get(`barber/subs/0/1`);

     console.log(response.data);
     setBarbers(response.data);
  }
  useEffect(() => {
    
    console.log(barbers);
  },[barbers]);

  // const [reviews, setReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  function handleClose() {
    setShowModal(false);
  }
  return (
    <div className={css.container}>
      <div className={css.head}>
        <h2>Subscribers </h2>
        <span>{barbers?.rows?.length} subscriber </span>
      </div>
      {barbers.rows?.map((sub) => (
        <div className={css.card} key={sub.id}>
          <div className={css.start}>
            <img src={url + sub.profile_pic} alt={sub.name} />
            <div>
              <h3>{sub.user_name}</h3>
              <span>{sub.city}</span>
            </div>
          </div>

          <div className={css.body}>
            <Rating name='read-only' value={barbers.average ? barbers.average.average : 0} readOnly precision={0.1} />
            <small style={{ textAlign: 'center' }}>{barbers?.average.count} Reviews</small>
          </div>

          <div className={css.end}>
            <IconButton onClick={() => unsubscribe(sub.id)} className={css.icon} size='large'>
              <PersonAddDisabledOutlined />
            </IconButton>

            <IconButton
              className={css.icon}
              onClick={() => {
                setReview(sub);
                setShowModal(true);
              }}
              size='large'
            >
              <RateReviewOutlined />
            </IconButton>

            <Link to='#'>
              <IconButton className={css.icon} size='large'>
                <PersonOutline />
              </IconButton>
            </Link>
          </div>
        </div>
      ))}
      {showModal && <CreateReview showModal={showModal} fetch={fetchSubscribedBarbers} review={review} handleClose={handleClose} setShowModal={setShowModal} />}
    </div>
  );
}
export default SubscribedBarbers;
