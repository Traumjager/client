import React from 'react'
import './nav.css'
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="ahheader" >
      <h2 className="ahlogo" ><span style={{ color: "#a38350" }} >I S</span><span style={{ color: "#fff" }} >loon</span></h2>
      <nav className="ahnava" >
        <ul className="aanav__link" >
          <li><a href={() => false}>Home</a></li>
          <li> <Link to='/all-barbers'><a href={() => false}>Barbers</a></Link></li>
          <li>  <Link to='/my-profile/5'><a href={() => false}>client profile</a></Link></li>
          <li>  <Link to='/barber-Profile/1'><a href={() => false}>Barber Profile</a></Link></li>
        </ul>
      </nav>
      <Link to='/sign'><a className="cta" href={() => false}> <button className="AhlogOut" >Log In</button></a></Link>
    </header>
  )
}

export default NavBar
