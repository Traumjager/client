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


  return (
    <header className={styles.ahheader}>
      <Logo w={'50pt'} h={'50pt'} />
      <p className={styles.logoText}> <span className={styles.spanLogo} >I</span>SALOON</p>
      <nav className={styles.ahnava}>
        <ul className={styles.aanav__link}>
          <li>
            <Link to='/'>
              <i class="fas fa-home"></i>
              
            </Link>
          </li>
          <li>
            {' '}
            <Link to='/all-barbers'>
              <i class="fas fa-users"></i>
            </Link>
          </li>
          {role === 'client' && (
            <li>
              {' '}
              <Link to={`/my-profile/${userId}`}>
                <i class="far fa-user-circle"></i>
              </Link>
            </li>
          )}
          {role === 'barber' && (
            <li>
              {' '}
              <Link to={`/barber-Profile/${userId}`}>
<<<<<<< HEAD
                <i class="far fa-user-circle"></i>
=======
                <a href={() => false}>Profile</a>
>>>>>>> ae717cc433479196af413bfda621d3e7503f3961
              </Link>
            </li>
          )}
          {role === 'barber' && isLoggedIn && <li>
            <RequestTickets />
          </li>}
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
