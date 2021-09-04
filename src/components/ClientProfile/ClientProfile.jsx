import { React, useState } from 'react';
// import styles from '../../style/ClientProfile.module.css';
import ClientCard from './ClientCard';
import SubscribedBarbers from './SubscribedBarbers';

export default function ClientProfile() {
  const clientInfo = {
    userName: 'Ahmad Abu Osbeh',
    email: 'khaledothman@gmail.com',
    password: 12345,
    city: 'Amman',
    gender: 'Male',
    age: 26,
    phoneNumber: '07848524642',
    profilePic: 'https://randomuser.me/api/portraits/men/52.jpg',
  };
  const service = {
    serviceName: 'Hair cut',
    price: '10 $',
    barberName: 'Saleh Al Hallaq',
    estimatedTime: '15 mins',
    bookedTime: '1:00 Am',
  };
  const [clientServices, setClientServices] = useState([service, service]);
  const [clientData, setClientData] = useState(clientInfo);
  return (
    <>
      <ClientCard info={clientInfo} />
      <SubscribedBarbers />
    </>
  );
}
