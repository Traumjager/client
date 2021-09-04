import React, { useState, useEffect } from 'react';
import styles from './style/bookedServices.module.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import DeleteIcon from '@material-ui/icons/Delete';

const services = [
  {
    serviceId: 1,
    serviceName: 'hair cut',
    price: 3,
    estimatedTime: 30,
    barberName: 'Khaled Othman',
    serviceDate: '5/9/2021',
    bookingTime: '1:30 Am',
    barberProfilePicture: 'http://i.imgur.com/qM6QY03.jpg',
    description: 'modern styles for modern times',
  },
  {
    serviceId: 2,
    serviceName: 'shave',
    price: 2,
    estimatedTime: 20,
    barberName: 'Omar hani',
    serviceDate: '1/2/2021',
    bookingTime: '5:20 Pm',
    barberProfilePicture: 'http://i.imgur.com/qM6QY03.jpg',
    description: 'using every technique available',
  },
  {
    serviceId: 3,
    serviceName: 'face care',
    price: 5,
    estimatedTime: 10,
    barberName: 'Mohannad hani',
    serviceDate: '8/10/2021',
    bookingTime: '2:30 Am',
    barberProfilePicture: 'http://i.imgur.com/qM6QY03.jpg',
    description: 'make your face clean and shiny',
  },
];

function BookedServices() {
  const [bookedServices, setBookedServices] = useState(services);
  const [prop, setProp] = useState('');

  // Did Mount
  useEffect(() => {
    // get bookedServices from backend
  }, []);

  // handle Hide
  function handleHide(name) {
    if (prop === name) return setProp('');
    setProp(name);
  }

  // Delete Service handler
  function clientDeleteServiceHandler(service) {
    // delete service from backend
  }

  return (
    <div className={styles.outerContainer}>
      {bookedServices.map((ser) => (
        <div className={prop !== ser.serviceName ? styles.container : styles.container2}>
          <div className={prop !== ser.serviceName ? styles.wrapper : styles.wrapper2}>
            <img src={ser.barberProfilePicture} alt='' />
            <p>{ser.serviceName}</p>
            <p>{ser.estimatedTime} min</p>
            <div className={styles.btn}>
              <span onClick={() => handleHide(ser.serviceName)}>more</span> &nbsp;
              <div>
                {prop !== ser.serviceName ? (
                  <ExpandMoreIcon onClick={() => handleHide(ser.serviceName)} style={{ fontSize: 40 }} />
                ) : (
                  <ExpandLessIcon onClick={() => handleHide(ser.serviceName)} style={{ fontSize: 40 }} />
                )}
              </div>
            </div>
            <p>{ser.price} JD</p>
            <DeleteIcon onClick={() => clientDeleteServiceHandler(ser)} />
          </div>

          <div className={prop !== ser.serviceName ? styles.hidden : styles.wrapper3}>
            <h5>barber name: {ser.barberName}</h5>
            <h5>service date: {ser.serviceDate}</h5>
            <h5>service time: {ser.bookingTime}</h5>
            <p>{ser.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookedServices;
