import React from 'react';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import LocalGroceryStoreOutlinedIcon from '@material-ui/icons/LocalGroceryStoreOutlined';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import GradeIcon from '@material-ui/icons/Grade';
import '../../styles/card.css';

function Card({ info, changePick, active }) {
  return (
    <div className="barber-body">
      <div className="container">
        <div className="innerwrap">
          <section className="section1 clearfix">
            <div>
              <div className="row grid clearfix">
                <div className="col2 first">
                  <img src={info.profilePic} alt="" />
                  <h1>{info.shopName}</h1>
                  <div>
                    <p>
                      {info.name}, &nbsp; {info.age}
                    </p>
                    <p>Gender: {info.gender}</p>
                    <p>For: {info.shopGender}</p>
                    <p>{info.address}</p>
                    <p>{info.phoneNumber}</p>
                  </div>
                  <span>Subscribe</span>
                </div>
                <div className="col2 last">
                  <div className="grid clearfix">
                    <div className="col3 first">
                      <h1>
                        {info.rating} &nbsp; <GradeIcon className="star" style={{ fontSize: 31 }} />
                      </h1>
                      <span>Rating</span>
                    </div>{' '}
                    <div className="col3">
                      <h1>{info.subscribers.length}</h1>
                      <span>Subscribers</span>
                    </div>
                    <div className="col3 last">
                      <h3>{info.workingHours}</h3>
                      <span>Working Hours</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row clearfix">
                <ul className="row2tab clearfix">
                  <li onClick={changePick} id="services" className={active === 'services' ? 'pick' : ''}>
                    <AssignmentTurnedInOutlinedIcon onClick={changePick} id="services" style={{ fontSize: 25 }} />{' '}
                    Services{' '}
                  </li>
                  <li onClick={changePick} id="products" className={active === 'products' ? 'pick' : ''}>
                    <LocalGroceryStoreOutlinedIcon onClick={changePick} id="products" style={{ fontSize: 25 }} />{' '}
                    Products{' '}
                  </li>
                  <li onClick={changePick} id="reviews" className={active === 'reviews' ? 'pick' : ''}>
                    <RateReviewOutlinedIcon onClick={changePick} id="reviews" style={{ fontSize: 25 }} /> Reviews{' '}
                  </li>
                  <li onClick={changePick} id="subs" className={active === 'subs' ? 'pick' : ''}>
                    <SubscriptionsOutlinedIcon onClick={changePick} id="subs" style={{ fontSize: 25 }} /> Subscribers{' '}
                  </li>
                </ul>
              </div>
            </div>
            <span className="smalltri">
              <GradeIcon className="star" style={{ fontSize: 20 }} />
            </span>
          </section>

          <section className="section2 clearfix"></section>
        </div>
      </div>
    </div>
  );
}

export default Card;
