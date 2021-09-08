import React, { useState } from 'react';
import css from '../barber/styles/booking.module.scss';
import { AddCircleOutlineOutlined, AddCircleOutlined } from '@material-ui/icons';
import { Button } from '@material-ui/core';
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
  const [listOfServices, setListOfServices] = useState(services);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  function addToCart(ser) {
    if (cart.filter((e) => e.id === ser.id).length > 0) {
      setCart(cart.filter((item) => item.id !== ser.id));
      setTotal(total - ser.price);
      return;
    }
    setCart([...cart, ser]);
    setTotal(total + ser.price);
  }

  return (
    <div className={css.container}>
      <h2>Choose Services</h2>
      <div className={css.checkOut}>
        <div className={css.services}>
          {listOfServices.map((ser) => (
            <div className={css.card}>
              <div onClick={() => addToCart(ser)}>
                {cart.filter((e) => e.id === ser.id).length > 0 ? <AddCircleOutlined /> : <AddCircleOutlineOutlined />}
              </div>
              <div>
                <h4>{ser.name}</h4>
                <span>{ser.time} min</span>
              </div>
              <div>
                <span>{ser.price} JD</span>
              </div>
            </div>
          ))}
        </div>

        <div className={css.bill}>
          <div className={css.pic}>
            <img src={user.profilePic} alt="" />
          </div>
          <div className={css.text}>
            <h5>{user.shopName}</h5>
            <span>{user.address}</span>
          </div>
          {cart.length > 0 &&
            cart.map((ser) => (
              <div className={css.selectedService}>
                <div>
                  <span>{ser.name}</span>
                  <span>{ser.time} min</span>
                </div>
                <span>{ser.price} JD</span>
              </div>
            ))}
          <span>Total: {total} JD</span>
          <Button size="small" className={css.btn} variant="outlined">
            Date
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
