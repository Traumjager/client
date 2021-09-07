import React, { useState, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { PersonAddDisabledOutlined, PersonOutline, RateReviewOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import css from '../barber/styles/subscriber.module.scss';
import { Rating } from '@material-ui/lab';

//generate random number between 1 and 100
function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(100));
}

function SubscribedBarbers({ example }) {
  const [barbers, setBarbers] = useState([]);
  useEffect(() => {
    setBarbers(example);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function unsubscribe(id) {
    setBarbers(barbers.filter((barber) => barber.id !== id));
  }

  // function review(id) {}

  return (
    <div className={css.container}>
      <div className={css.head}>
        <h2>Subscribers </h2>
        <span> {example.length} subscriber </span>
      </div>
      {barbers.map((sub) => (
        <div className={css.card}>
          <div className={css.start}>
            <img src={sub.image} alt={sub.name} />
            <div>
              <h3>{sub.name}</h3>
              <span>{sub.location}</span>
            </div>
          </div>

          <div className={css.body}>
            <Rating name="read-only" value={sub.rating} readOnly precision={0.1} />
            <small style={{ textAlign: 'center' }}>{getRandomInt()} Reviews</small>
          </div>

          <div className={css.end}>
            <IconButton onClick={() => unsubscribe(sub.id)} className={css.icon} size="large">
              <PersonAddDisabledOutlined />
            </IconButton>

            <IconButton className={css.icon} size="large">
              <RateReviewOutlined />
            </IconButton>

            <Link to="#">
              <IconButton className={css.icon} size="large">
                <PersonOutline />
              </IconButton>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
export default SubscribedBarbers;
