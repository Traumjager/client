import React from 'react';
import styles from './nav.module.css';
import { Link } from 'react-router-dom';
import Logo from '../home/Logo';
import RequestTickets from '../barber/tickets/RequestTickets';

import { useSelector } from 'react-redux';
function NavBar() {
  const role = useSelector((state) => state?.authReducer?.role);
  const userId = useSelector((state) => state?.authReducer?.user?.id);
  const isLoggedIn = useSelector((state) => state?.authReducer?.isLoggedIn);

  console.log(userId);
  return (
    <header className={styles.ahheader}>
      <Logo w={'50pt'} h={'50pt'} />
      <nav className={styles.ahnava}>
        <ul className={styles.aanav__link}>
          <li>
            <Link to='/'>
              <a href={() => false}>Home</a>
            </Link>
          </li>
          <li>
            {' '}
            <Link to='/all-barbers'>
              <a href={() => false}>Barbers</a>
            </Link>
          </li>
          {role === 'client' && (
            <li>
              {' '}
              <Link to={`/my-profile/${userId}`}>
                <a href={() => false}>my profile</a>
              </Link>
            </li>
          )}
          {role === 'barber' && (
            <li>
              {' '}
              <Link to={`/barber-Profile/${userId}`}>
                <a href={() => false}>my profile</a>
              </Link>
            </li>
          )}
          <li>
            <RequestTickets />
          </li>
        </ul>
      </nav>
      {!isLoggedIn && (
        <Link to='/sign'>
          <a href={() => false}>
            {' '}
            <button className={styles.AhlogOut}>Log In</button>
          </a>
        </Link>
      )}
      {isLoggedIn && (
        <a href={() => false}>
          {' '}
          <button className={styles.AhlogOut}>Log out</button>
        </a>
      )}
    </header>
  );
}

export default NavBar;
