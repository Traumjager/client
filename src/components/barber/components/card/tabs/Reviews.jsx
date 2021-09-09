import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import css from '../../../styles/reviews.module.scss';
import { Link } from 'react-router-dom';
import instance, { url } from '../../../../../API/axios';
const reviews = [
  {
    name: 'hatem ghazi',
    subject: 'shave',
    text: 'awesome style plus quick as lightening',
    rate: 5,
    date: '04 - 10 - 2021',
    link: '#',
  },
  {
    name: 'ahmmad ammoura',
    subject: 'hair cut',
    text: 'good shop with good service...recommend it highly',
    rate: 4.3,
    date: '15 - 5- 2021',
    link: '#',
  },
  {
    name: null,
    subject: 'shave',
    text: 'very modern, not suitable for my age. hated it ',
    rate: 1.8,
    date: '26 - 7- 2021',
    link: '#',
  },
];
const barberId = 2;

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    fetchReviews();
  }, []);
  async function fetchReviews() {
    let response = await instance.get(`client/reviews/${barberId}`);
    setReviews(response.data);
  }
  return (
    <div className={css.container}>
      <h2>
        Reviews <span>{reviews.length} Review</span>
      </h2>
      {reviews.map((rev) => (
        <div className={css.card} key={rev.id}>
          <div className={css.top}>
            <img src={`${url}${rev.profile_pic}`} alt="" />
            <div className={css.info}>
              <h3>{rev.user_name ? rev.user_name : 'Anonymous'} </h3>
              <span>{rev.city} </span>
            </div>
          </div>

          <div className={css.rating}>
            <Rating name="read-only" value={rev.rate} readOnly />
          </div>

          <div className={css.body}>
            <p>{rev.description}</p>
          </div>

          <div className={css.bottom}>
            <span className={css.date}> reviewed on : {rev.date.substring(0, 10)}</span>

            {rev.user_name && (
              <Link to={`/my-profile/${rev.id}`}>
                <div>
                  <Button variant="outlined" style={{ color: '#a38350' }} size="small">
                    <span> view profile </span> <AccountCircleOutlinedIcon />
                  </Button>
                </div>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
