import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { PersonAddDisabledOutlined, PersonAddOutlined, PersonOutline } from '@material-ui/icons';
import css from '../../../styles/subscriber.module.scss';
import { Link } from 'react-router-dom';

const subscribers = [
  {
    id: 1,
    name: 'Ammoura',
    location: 'Irbid',
    image: 'http://images.contactmusic.com/newsimages/david_beckham_1133321.jpg',
  },
  {
    id: 3,
    name: 'Abo osbeh',
    location: 'Zarqa',
    image: 'http://images.contactmusic.com/newsimages/david_beckham_1133321.jpg',
  },
  {
    id: 4,
    name: 'Ramahi',
    location: 'Amman',
    image: 'http://images.contactmusic.com/newsimages/david_beckham_1133321.jpg',
  },
];

function Subscribers({ role }) {
  return (
    <div className={css.container}>
      <div className={css.head}>
        <h2>Subscribers </h2>
        <span> {subscribers.length} subscriber </span>
      </div>
      {subscribers.map((sub) => (
        <div className={css.card} key={sub.id}>
          <div className={css.start}>
            <img src={sub.image} alt={sub.name} />
            <div>
              <h3>{sub.name}</h3>
              <span>{sub.location}</span>
            </div>
          </div>

          <div className={css.end}>
            {role === 'barber' && (
              <IconButton className={css.icon} size="large">
                <PersonAddDisabledOutlined />
              </IconButton>
            )}
            {role === 'client' && (
              <IconButton className={css.icon} size="large">
                <PersonAddOutlined />
              </IconButton>
            )}
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

export default Subscribers;
