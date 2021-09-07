import React, { useState,useEffect } from 'react';
import styles from '../../../styles/services.module.scss';
import AddProduct from '../../products/ProductButton';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import { getProductsAction, getServicesAction } from '../../../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import instance from '../../../../../API/axios';
import ServiceButton from '../../services/ServiceButton';

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
  const dispatch = useDispatch();
  const state = useSelector((state) => state.servicesReducer);
  const state2 = useSelector((state) => state.authReducer);
  let barberId = state2?.user?.id ? state2?.user?.id : 27;
  const [listOfServices, setListOfServices] = useState([]);
  const [prop, setProp] = useState([]);
  const [model, setModel] = useState(false);
  
  
  async function fetchSerivces() {
    const response = await instance.get(`/barber/services/0/27`);
     dispatch(getServicesAction(response.data.rows));
    
  }
  useEffect(() => {
    fetchSerivces();
  }, []);
  useEffect(() => {
    setListOfServices(state.barberServices);
  }, [state.barberServices]);



  function handleHide(name) {
    if (prop.includes(name)) return setProp(() => prop.filter((desName) => desName !== name));
    setProp([...prop, name]);
  }

  return (
    <div className={styles.outerContainer}>
      <h2>
        Services <span>{listOfServices.length} Services</span>
      </h2>
      <div className={styles.productButton}>
        {/*<AddProduct name="Service" />*/}
        <ServiceButton/>

      </div>

      {listOfServices.map((ser) => (
        <div className={styles.container} key={ser.id}>
          <div className={!prop.includes(ser.service_name) ? styles.wrapper : styles.wrapper2}>
            <img src="http://i.imgur.com/qM6QY03.jpg" alt="" />
            <p>{ser.service_name}</p>
            <p>{ser.estimated_time} min</p>
            <div className={styles.btn}>
              <span onClick={() => handleHide(ser.service_name)}>more</span> &nbsp;
              <div>
                {prop !== ser.service_name ? (
                  <ExpandMore onClick={() => handleHide(ser.service_name)} style={{ fontSize: 40 }} />
                ) : (
                  <ExpandLess onClick={() => handleHide(ser.service_name)} style={{ fontSize: 40 }} />
                )}
              </div>
            </div>
            <p>{ser.price} JD</p>
          </div>

          <div className={!prop.includes(ser.service_name) ? styles.hidden : styles.wrapper3}>
            <p>{ser.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
