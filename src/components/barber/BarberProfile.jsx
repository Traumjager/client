import React, { useState } from 'react';
import Card from './components/card/Card';
import Queues from './components/Queues';
import Services from './components/card/tabs/Services';
import Media from './components/Media';
import Products from './components/card/tabs/Products';
import Reviews from './components/card/tabs/Reviews';
import Subscribers from './components/card/tabs/Subscribers';

function BarberProfile() {
  const [tab, setTab] = useState('services');

  function changePick(e) {
    try {
      setTab(e.target.id);
    } catch (err) {
      console.error(err);
      // window.location.reload(false);
    }
  }

  const user = {
    name: 'hatem husnieh',
    city: 'Al-Mafraq',
    address: 'hiten St, Al-Mafraq',
    age: 29,
    gender: 'male',
    shopGender: 'men',
    shopName: 'Something Silly',
    phoneNumber: '0789881099',
    profilePic: 'http://images.contactmusic.com/newsimages/david_beckham_1133321.jpg',
    workingHours: '10 am - 10 pm',
    holidays: 'Friday',
    subscribers: ['ammoura', 'abo-osbeh', 'ramahi'],
    rating: 4.5,
  };

  return (
    <div>
      <Card info={user} changePick={changePick} active={tab} />

      {/* <Queues /> */}

      {tab === 'services' ? <Services /> : tab === 'products' ? <Products /> : tab === 'reviews' ? <Reviews /> : <Subscribers />}

      <Media />
    </div>
  );
}

export default BarberProfile;
