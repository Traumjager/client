import React, { useState, useEffect } from 'react';
import css from '../barber/styles/booking.module.scss';
import { AddCircleOutlineOutlined, AddCircleOutlined } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import instance, { url } from '../../API/axios';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import BookModal from '../checkout/BookModal';

// import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
// import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

const services = [
  {
    id: 1,
    name: 'hair cut',
    price: 3,
    time: 30,
    description: 'modern styles for modern times',
  },
  {
    id: 2,
    name: 'shave',
    price: 2,
    time: 20,
    description: 'using every technique available',
  },
  {
    id: 3,
    name: 'face care',
    price: 5,
    time: 25,
    description: 'make your face clean and shiny',
  },
];
const user = {
  firstName: 'hatem',
  lastName: 'husnieh',
  email: 'hatem@gmail.com',
  password: '123456',
  city: 'Al Mafraq',
  address: 'hiten St, Al-Mafraq',
  age: 29,
  gender: 'male',
  shopGender: 'men',
  shopName: 'Something Silly',
  phoneNumber: '0789881099',
  profilePic: 'http://images.contactmusic.com/newsimages/david_beckham_1133321.jpg',
  startingHour: '10:00',
  endingHour: '22:00',
  workingHours: '10 am - 10 pm',
  holidays: 'Friday',
  subscribers: ['ammoura', 'abo-osbeh', 'ramahi'],
  rating: 4.5,
};

function CheckOut() {
  let { id } = useParams();

  const [listOfServices, setListOfServices] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);

  function addToCart(ser) {
    if (cart.filter((e) => e.id === ser.id).length > 0) {
      setCart(cart.filter((item) => item.id !== ser.id));
      setTotal(total - ser.price);
      return;
    }
    setCart([...cart, ser]);
    setTotal(total + ser.price);
  }

  // fetch servicess
  async function fetchServices() {
    const services = await instance.get(`/barber/services/0/${id}`);
    setListOfServices(services.data.rows);
  }

  // fetch barber
  async function fetchBarber() {
    const response = await instance.get(`/barber/user/${id}`);
    setUser(response.data);
  }

  useEffect(() => {
    fetchServices();
    fetchBarber();
  }, []);

  //handleClose
  function handleClose() {
    setShowModal(false);
  }
  // barber_id: 1
  // description: "شعر قص"
  // discount: 5
  // end_date: null
  // estimated_time: "10 min "
  // id: 1
  // price: 20
  // service_name: "Beard trim"
  return (
    <div className={css.container}>
      <h2>Choose Services</h2>
      <div className={css.checkOut}>
        <div className={css.services}>
          {listOfServices.map((ser) => (
            <div className={css.card} key={ser.service_name}>
              <div onClick={() => addToCart(ser)}>{cart.filter((e) => e.id === ser.id).length > 0 ? <AddCircleOutlined /> : <AddCircleOutlineOutlined />}</div>
              <div>
                <h4>{ser.service_name}</h4>
                <span>{ser.estimated_time} min</span>
              </div>
              <div>
                <span>{ser.price} JD</span>
              </div>
            </div>
          ))}
        </div>

        {/* // "id": 6,
  // "name": "Ahmad Omar",
  // "city": "Amman",
  // "address": "Jubeiha",
  // "gender": "male",
  // "age": 18,
  // "shop_gender": "men",
  // "shop_name": "ramahi saloon",
  // "phone_num": "0798254625",
  // "profile_pic": "/images/profilePics/male.jpg",
  // "working_hours": "08:30 AM - 5:00 PM",
  // "holidays": "",
  // "state": "open" */}

        <div className={css.bill}>
          <div className={css.pic}>
            <img src={`${url}${user.profile_pic}`} alt='' />
          </div>
          <div className={css.text}>
            <h5>{user.shop_name}</h5>
            <span>{user.address}</span>
          </div>
          {cart.length > 0 &&
            cart.map((ser) => (
              <div className={css.selectedService}>
                <div>
                  <span>{ser.service_name}</span>
                  <span>{ser.estimated_time} min</span>
                </div>
                <span>{ser.price} JD</span>
              </div>
            ))}
          <span>Total: {total} JD</span>
          <Button
            size='small'
            onClick={() => {
              setShowModal(true);
            }}
            className={css.btn}
            variant='outlined'
          >
            Date
          </Button>
          {showModal && <BookModal showModal={showModal} handleClose={handleClose} barberId={id} cart={cart} />}
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
