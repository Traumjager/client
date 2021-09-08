import { React, useEffect, useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { PersonAddDisabledOutlined, PersonAddOutlined, PersonOutline } from '@material-ui/icons';
import css from '../../../styles/subscriber.module.scss';
import { Link } from 'react-router-dom';
import instance, { url } from '../../../../../API/axios';

function Subscribers({ role }) {
  const [subscribers, setSubscribers] = useState([]);

  //fetch Subscribers
  async function fetchSubscribers() {
    const response = await instance.get(`/barber/subs/1/0`);
    setSubscribers(response.data.rows);
  }
  useEffect(() => {
    // localhost:8099/barber/subs/1/0
    fetchSubscribers();
  }, []);
  return (
    <div className={css.container}>
      <div className={css.head}>
        <h2>Subscribers </h2>
        <span> {subscribers.length} subscriber </span>
      </div>
      {subscribers?.map((sub) => (
        <div className={css.card} key={sub.user_name}>
          <div className={css.start}>
            <img src={url + sub.profile_pic} alt={sub.user_name} />
            <div>
              <h3>{sub.user_name}</h3>
              <span>{sub.city}</span>
            </div>
          </div>

          <div className={css.end}>
            {role === 'barber' && (
              <IconButton className={css.icon} size='large'>
                <PersonAddDisabledOutlined />
              </IconButton>
            )}
            {role === 'client' && (
              <IconButton className={css.icon} size='large'>
                <PersonAddOutlined />
              </IconButton>
            )}
            <Link to='#'>
              <IconButton className={css.icon} size='large'>
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
