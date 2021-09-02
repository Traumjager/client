import { React, useState } from 'react';
import '../../style/ClientProfile.css';
import SubscribedBarbers from './SubscribedBarbers';

export default function ClientProfile() {
  const clientInfo = {
    userName: 'Khaled Othman',
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
      <div className='client_card'>
        <div className='client_card__header'>
          <div className='client_card__profile'>
            <img src='https://randomuser.me/api/portraits/men/52.jpg' alt='A man smiling' />
          </div>
          <div className='client_card__name'>
            <h2>{clientData.userName}</h2>
            <div className='client_card__handle'>
              <span className='handle'>{clientData.city}</span>
              {/* <span className='circle'></span> */}
            </div>
            <span className='category'>{clientData.email}</span>
            <br />
            <span className='category'>{clientData.phoneNumber}</span>
          </div>
          <div className='client_card__button'>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#fff'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='feather feather-edit'
              >
                <path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'></path>
                <path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z'></path>
              </svg>
              <span>Edit</span>
            </button>
          </div>
        </div>
        <hr className='border' />

        <div className='client_card__insights'>
          <div className='client_card__heading'>
            <div className='heading'>Booked Services :</div>
            <div className='date'>June 24 - 2021</div>
          </div>
          <div className='insights'>
            {clientServices.map((item, index) => (
              <div className='insight'>
                <div className='heading'>
                  {item.serviceName}
                  <div className='score'>
                    <h5> {item.price}</h5>
                  </div>
                </div>
                <div className='number'>
                  Barber: {item.barberName}
                  <div className='info'>
                    {item.bookedTime}, {item.estimatedTime}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr className='border' />
        </div>
      </div>
      <SubscribedBarbers />
    </>
  );
}
