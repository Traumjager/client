import { React, useState } from 'react';
// import styles from '../../style/ClientProfile.module.css';
import ClientCard from './ClientCard';
import SubscribedBarbers from './SubscribedBarbers';
import BookedServices from './bookedServices';
import AccountSettings from './AccountSettings';
export default function ClientProfile() {
  const clientInfo = {
    firstName: 'ahmad',
    lastName: 'Abo Osbeh',
    email: 'khaledothman@gmail.com',
    password: 12345,
    city: 'Amman',
    gender: 'male',
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
  const [showModal, setShowModal] = useState(false);

  const [activeComponent, setActiveComponent] = useState(null);
  const [activeTab, setactiveTab] = useState('');

  function changePick(e) {
    if (e.target.parentElement.className == 'clientrow2tab clientclearfix') {
      if (activeComponent) {
        activeComponent.className = '';
      }
      setActiveComponent(e.target);
      e.target.className = 'pick';
      setactiveTab(e.target.id);
    }

    if (!e.target.parentElement.className && e.target.parentElement.className != 'clientrow2tab clientclearfix') {
      if (activeComponent) {
        activeComponent.className = '';
      }
      e.target.parentElement.className = 'pick';
      setActiveComponent(e.target.parentElement);
      setactiveTab(e.target.parentElement.id);
    }

    if (e.target.id == 'AccountSettings') {
      handleOpen();
    }
    if (e.target.parentElement.id == 'AccountSettings') {
      handleOpen();
    }
  }

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <ClientCard info={clientInfo} changePick={changePick} />
      {activeTab == 'bookedServices' ? <BookedServices /> : null}
      {activeTab == 'subscribedBarbers' ? <SubscribedBarbers /> : null}
      {activeTab == 'AccountSettings' ? <AccountSettings handleOpen={handleOpen} user={clientInfo} handleClose={handleClose} userType={"client"} showModal={showModal} /> : null}
    </>
  );
}
