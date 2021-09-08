import React, { useState, useEffect } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from '../barber/styles/services.module.scss';
import instance from '../../API/axios';

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
  const [prop, setProp] = useState([]);

  // Did Mount
  useEffect(() => {
    // get bookedServices from backend
  }, []);

  // handle Hide
  function handleHide(name) {
    if (prop.includes(name)) return setProp(() => prop.filter((desName) => desName !== name));
    setProp([...prop, name]);
  }

  // Delete Service handler
  function clientDeleteServiceHandler(service) {
    // delete service from backend
  }

  return (
    <div className={styles.outerContainer}>
      <h2>
        Booked Services <span>{services.length} Services</span>
      </h2>
      {bookedServices.map((ser) => (
        <div className={styles.container}>
          <div className={!prop.includes(ser.serviceName) ? styles.wrapper : styles.wrapper2}>
            <img src={ser.barberProfilePicture} alt='' />
            <p>{ser.serviceName}</p>
            <p>{ser.estimatedTime} min</p>
            <div className={styles.btn}>
              <span onClick={() => handleHide(ser.serviceName)}>more</span> &nbsp;
              <div>
                {!prop.includes(ser.serviceName) ? (
                  <ExpandMoreIcon onClick={() => handleHide(ser.serviceName)} style={{ fontSize: 40 }} />
                ) : (
                  <ExpandLessIcon onClick={() => handleHide(ser.serviceName)} style={{ fontSize: 40 }} />
                )}
              </div>
            </div>
            <p>{ser.price} JD</p>
            <div className={styles.deleteBtn}>
              <DeleteIcon onClick={() => clientDeleteServiceHandler(ser.serviceId)} />
            </div>
          </div>

          <div className={!prop.includes(ser.serviceName) ? styles.hidden : styles.wrapper4}>
            <h5>
              <span>Barber Name:</span> {ser.barberName}
            </h5>
            <h5>
              <span>Service Date:</span> {ser.serviceDate}
            </h5>
            <h5>
              <span>Service Time:</span> {ser.bookingTime}
            </h5>
            <p>{ser.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookedServices;
