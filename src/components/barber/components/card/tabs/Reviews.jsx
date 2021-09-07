import React from 'react';
import { Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import css from '../../../styles/reviews.module.scss';
import { Link } from 'react-router-dom';

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

function Reviews() {
  return (
    <div className={css.container}>
      <h2>
        Reviews <span>{reviews.length} Review</span>
      </h2>
      {reviews.map((rev) => (
        <div className={css.card}>
          <div className={css.top}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3L90MBvnewdL0dRvKkixc6WG71TiImbLSjA&usqp=CAU"
              alt=""
            />
            <div className={css.info}>
              <h3>{rev.name ? rev.name : 'Anonymous'} </h3>
              <span>{rev.subject} </span>
            </div>
          </div>

          <div className={css.rating}>
            <Rating name="hover" value={rev.rate} precision={0.1} readOnly />
          </div>

          <div className={css.body}>
            <p>{rev.text}</p>
          </div>

          <div className={css.bottom}>
            <span className={css.date}> reviewed on : {rev.date}</span>

            {rev.name && (
              <Link to={rev.link}>
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
