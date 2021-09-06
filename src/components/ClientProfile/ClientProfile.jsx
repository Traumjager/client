import { React, useState } from 'react';
import ClientCard from './ClientCard';
import SubscribedBarbers from './SubscribedBarbers';
import BookedServices from './bookedServices';
import AccountSettings from './AccountSettings';

const clientInfo = {
  id: 1,
  firstName: 'ahmad',
  lastName: 'Abo Osbeh',
  email: 'khaledothman@gmail.com',
  password: 12345,
  city: 'Amman',
  gender: 'male',
  age: 26,
  phoneNumber: '07848524642',
  profilePic: 'https://randomuser.me/api/portraits/men/52.jpg',
  products: 3,
  services: 15,
};

const example = [
  {
    id: 1,
    name: 'Ammoura',
    location: 'Irbid',
    image:
      'https://www.biography.com/.image/t_share/MTU0ODUwMjQ0NjIwNzI0MDAx/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Hatem',
    location: 'Mafraq',
    image:
      'https://www.biography.com/.image/t_share/MTU0ODUwMjQ0NjIwNzI0MDAx/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Abo osbeh',
    location: 'Zarqa',
    image:
      'https://www.biography.com/.image/t_share/MTU0ODUwMjQ0NjIwNzI0MDAx/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg',
    rating: 2,
  },
  {
    id: 4,
    name: 'Ramahi',
    location: 'Amman',
    image:
      'https://www.biography.com/.image/t_share/MTU0ODUwMjQ0NjIwNzI0MDAx/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg',
    rating: 3.5,
  },
];

export default function ClientProfile() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState('');

  function changePick(e) {
    try {
      setActiveTab(e.target.id);
    } catch (err) {
      console.error(err);
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
      <ClientCard
        info={clientInfo}
        changePick={changePick}
        active={activeTab}
        subscribed={example}
        handleOpen={handleOpen}
      />
      {activeTab === 'bookedServices' ? <BookedServices /> : null}
      {activeTab === 'subscribedBarbers' ? <SubscribedBarbers example={example} /> : null}

      <AccountSettings
        handleOpen={handleOpen}
        user={clientInfo}
        handleClose={handleClose}
        userType={'client'}
        showModal={showModal}
      />
    </>
  );
}
