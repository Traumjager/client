import React from 'react'
import styles from './nav.module.css'
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className={styles.ahheader} >
      <h2 className={styles.ahlogo} ><span style={{ color: "#a38350" }} >I S</span><span style={{ color: "#fff" }} >loon</span></h2>
      <nav className={styles.ahnava} >
        <ul className={styles.aanav__link} >
          <li><Link to='/'><a href={() => false}>Home</a></Link></li>
          <li> <Link to='/all-barbers'><a href={() => false}>Barbers</a></Link></li>
          <li>  <Link to='/my-profile/5'><a href={() => false}>client profile</a></Link></li>
          <li>  <Link to='/barber-Profile/1'><a href={() => false}>Barber Profile</a></Link></li>
        </ul>
      </nav>
      <Link to='/sign'><a href={() => false}> <button className={styles.AhlogOut} >Log In</button></a></Link>
    </header>
  )
}

export default NavBar