import React, { useState } from 'react';
import styles from '../../../styles/services.module.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const services = [
  {
    name: 'hair cut',
    price: 3,
    time: 30,
    description: 'modern styles for modern times',
  },
  {
    name: 'shave',
    price: 2,
    time: 20,
    description: 'using every technique available',
  },
  {
    name: 'face care',
    price: 5,
    time: 25,
    description: 'make your face clean and shiny',
  },
];

function Services() {
  // const [listOfServices, setListOfServices] = useState([]);
  const [prop, setProp] = useState([]);

  function handleHide(name) {
    if (prop.includes(name)) return setProp(() => prop.filter((desName) => desName !== name));
    setProp([...prop, name]);
  }

  return (
    <div className={styles.outerContainer}>
      <h2>
        Services <span>{services.length} Services</span>
      </h2>
      {services.map((ser) => (
        <div className={styles.container}>
          <div className={!prop.includes(ser.name) ? styles.wrapper : styles.wrapper2}>
            <img src="http://i.imgur.com/qM6QY03.jpg" alt="" />
            <p>{ser.name}</p>
            <p>{ser.time} min</p>
            <div className={styles.btn}>
              <span onClick={() => handleHide(ser.name)}>more</span> &nbsp;
              <div>
                {prop !== ser.name ? (
                  <ExpandMoreIcon onClick={() => handleHide(ser.name)} style={{ fontSize: 40 }} />
                ) : (
                  <ExpandLessIcon onClick={() => handleHide(ser.name)} style={{ fontSize: 40 }} />
                )}
              </div>
            </div>
            <p>{ser.price} JD</p>
          </div>

          <div className={!prop.includes(ser.name) ? styles.hidden : styles.wrapper3}>
            <p>{ser.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
