import React, { useState } from 'react';
import Card from './components/card/Card';
import Queues from './components/Queues';
import Services from './components/card/tabs/Services';
import Media from './components/Media';
import Products from './components/card/tabs/Products';
import Reviews from './components/card/tabs/Reviews';
import Subscribers from './components/card/tabs/Subscribers';
import ProductButton from './components/products/ProductButton';

function BarberProfile() {
  const [tab, setTab] = useState('services');
  const role = 'barber';

  function changePick(e) {
    try {
      setTab(e.target.id);
    } catch (err) {
      console.error(err);
    }
  }

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

  return (
    <div>
      <Card info={user} changePick={changePick} active={tab} />

      {/* <Queues /> */}

      {tab === 'services' ? (
        <Services />
      ) : tab === 'products' ? (
        <>
          <Products />
          <ProductButton />
        </>
      ) : tab === 'reviews' ? (
        <Reviews />
      ) : (
        <Subscribers role={role} />
      )}

      <Media />
    </div>
  );
}

export default BarberProfile;
