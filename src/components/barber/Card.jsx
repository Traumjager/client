import React, { useState } from 'react';
import './card.css';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import LocalGroceryStoreOutlinedIcon from '@material-ui/icons/LocalGroceryStoreOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import GradeIcon from '@material-ui/icons/Grade';

function Card({ info }) {
  const [activeComponent, setActiveComponent] = useState(null);

  function changePick(e) {
    if (activeComponent) {
      activeComponent.className = '';
    }
    setActiveComponent(e.target);
    e.target.className = 'pick';
  }

  return (
    <div className="barber-body">
      <div className="container">
        <div className="innerwrap">
          <section className="section1 clearfix">
            <div>
              <div className="row grid clearfix">
                <div className="col2 first">
                  <img src={'http://images.contactmusic.com/newsimages/david_beckham_1133321.jpg'} alt="" />
                  <h1>{info.name}</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's
                  </p>
                  <span>Follow</span>
                </div>
                <div className="col2 last">
                  <div className="grid clearfix">
                    <div className="col3 first">
                      <h1>694</h1>
                      <span>Following</span>
                    </div>{' '}
                    <div className="col3">
                      <h1>452</h1>
                      <span>Likes</span>
                    </div>
                    <div className="col3 last">
                      <h1>1207</h1>
                      <span>Bookmarks</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix">
                <ul className="row2tab clearfix">
                  <li onClick={changePick}>
                    <AssignmentTurnedInOutlinedIcon style={{ fontSize: 25 }} /> Services{' '}
                  </li>
                  <li onClick={changePick}>
                    <SubscriptionsOutlinedIcon style={{ fontSize: 25 }} /> Subscribers{' '}
                  </li>
                  <li onClick={changePick}>
                    <LocalGroceryStoreOutlinedIcon style={{ fontSize: 25 }} /> Products{' '}
                  </li>
                  <li onClick={changePick}>
                    <BookOutlinedIcon style={{ fontSize: 25 }} /> Book Appointment{' '}
                  </li>
                </ul>
              </div>
            </div>
            <span className="smalltri">
              <GradeIcon className="star" style={{ fontSize: 23 }} />
            </span>
          </section>

          <section className="section2 clearfix"></section>
        </div>
      </div>
    </div>
  );
}

export default Card;
