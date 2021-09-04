import React, { useState, useEffect } from 'react';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import GradeIcon from '@material-ui/icons/Grade';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './style/ClientCard.css';

function Card({ info, changePick }) {
  return (
    <div className='clientbarber-body'>
      <div className='clientcontainer'>
        <div className='clientinnerwrap'>
          <section className='clientsection1 clientclearfix'>
            <div>
              <div className='clientrow clientgrid clientclearfix'>
                <div className='clientcol2 first'>
                  <img src={'http://images.contactmusic.com/newsimages/david_beckham_1133321.jpg'} alt='' />
                  <h1>{info.userName}</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                  <span>Follow</span>
                </div>
                <div className='clientcol2 last'>
                  <div className='clientgrid clientclearfix'>
                    <div className='clientcol3 first'>
                      <h1>694</h1>
                      <span>Following</span>
                    </div>{' '}
                    <div className='clientcol3'>
                      <h1>452</h1>
                      <span>Likes</span>
                    </div>
                    <div className='clientcol3 last'>
                      <h1>1207</h1>
                      <span>Bookmarks</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='clientrow clientclearfix'>
                <ul className='clientrow2tab clientclearfix'>
                  <li onClick={changePick} id='AccountSettings'>
                    <AccountCircleIcon style={{ fontSize: 25 }} />
                    Account Settings
                  </li>
                  <li onClick={changePick} id='bookedServices'>
                    <AssignmentTurnedInOutlinedIcon style={{ fontSize: 25 }} />
                    Booked Services
                  </li>
                  <li onClick={changePick} id='subscribedBarbers'>
                    <SubscriptionsOutlinedIcon style={{ fontSize: 25 }} />
                    Subscribed Barbers
                  </li>
                  <li onClick={changePick}>
                    <BookOutlinedIcon style={{ fontSize: 25 }} />
                    Book Appointment
                  </li>
                </ul>
              </div>
            </div>
            <span className='clientsmalltri'>
              <GradeIcon className='clientstar' style={{ fontSize: 23 }} />
            </span>
          </section>

          <section className='clientsection2 clientclearfix'></section>
        </div>
      </div>
    </div>
  );
}

export default Card;
