import React from 'react';
import Card from './Card';
import profilePic from './htu.jpg';

function BarberProfile() {
  const user = {
    name: 'hatem husnieh',
    city: 'Al-Mafraq',
    address: 'hiten St, Al-Mafraq',
    age: 29,
    gender: 'male',
    shopGender: 'male',
    shopName: 'Something Silly',
    phoneNumber: '0789881099',
    profilePic: profilePic,
    workingHours: '10 am - 10 pm',
    holidays: 'Friday',
    subscribers: ['ammoura', 'abo-osbeh', 'ramahi'],
  };

  return (
    <div>
      <Card info={user} />
    </div>
  );
}

export default BarberProfile;
