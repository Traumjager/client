import { React, useState, useEffect } from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CircularProgress from '@material-ui/core/CircularProgress';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import instance from '../../API/axios';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

let queue = [
  {
    barber_id: 1,
    client_id: 2,
    estimated_time: '10',
    phone_num: '056232450',
    price: 67,
    profile_pic: '/images/profilePics/male.jpg',
    service_id: 4,
    service_name: 'gjjjjjjjjjjjjjjjjjjjj',
    time: '11:00',
    user_name: 'mahmoud Al Akhdar',
    working_hours: '08:00 AM - 7:00 PM',
  },

  {
    barber_id: 1,
    client_id: 2,
    estimated_time: '30',
    phone_num: '056232450',
    price: 67,
    profile_pic: '/images/profilePics/male.jpg',
    service_id: 4,
    service_name: 'gjjjjjjjjjjjjjjjjjjjj',
    time: '11:10',
    user_name: 'mahmoud Al Akhdar',
    working_hours: '08:00 AM - 7:00 PM',
  },
];
export default function Queues() {
  let queueState = useSelector((state) => state?.queueReducer?.acceptedTicket);

  const startWorkingHour = 8;
  const endWorkingHour = 17;
  const arrayLength = (endWorkingHour - startWorkingHour) * 60;
  const workingHoursArray = new Array(arrayLength).fill(0);
  const [finalWorkingHours, setfinalWorkingHours] = useState(workingHoursArray);
  const [renderedDivs, setrenderedDivs] = useState([]);
  const [allTickets, setallTickets] = useState([]);
  const [AllQueues, setAllQueues] = useState([]);
  let renderedTickets = [];
  let check = new Date();
  let activeHour = check.getHours();

  const { id } = useParams();
  // fetch queues
  async function fetchQueues() {
    const response = await instance.get(`/barber/queue/${1}/0`);
    console.log(response.data);
    setAllQueues(response.data);
  }
  useEffect(() => {
    setAllQueues(queue);
  }, [queueState]);
  // useEffect(() => {
  //   fetchQueues();
  // }, []);
  // add ticket handler
  function addTicketHandler(e) {
    e.preventDefault();

    let hour = Number(e.target.bookingTime.value.split(':')[0]);
    let minute;
    e.target.bookingTime.value.split(':')[1] ? (minute = Number(e.target.bookingTime.value.split(':')[1])) : (minute = 0);
    let startIndex = (hour - startWorkingHour) * 60 + minute;
    let removedItems = Number(e.target.servicePeriod.value);

    if (finalWorkingHours[startIndex] == 0 && finalWorkingHours[startIndex + removedItems - 1] != 1) {
      setallTickets([...allTickets, { bookingTime: e.target.bookingTime.value, servicePeriod: e.target.servicePeriod.value, startIndex }]);
    } else {
      alert('this time is full! please pick different time..');
    }
  }

  // remove ticket handler
  function removeTicketHandler(startIndex) {
    const allTicketsUpdated = allTickets.filter((item) => item.startIndex != startIndex);
    setallTickets(allTicketsUpdated);
  }
  // did update on all tickets
  useEffect(() => {
    let startIndex;
    let removedItems;
    let bookedArray;
    let startPercentage;
    let widthPercentage;
    let hour;
    let minute;

    //     barber_id: 1
    // client_id: 2
    // estimated_time: "10"
    // phone_num: "056232450"
    // price: 67
    // profile_pic: "/images/profilePics/male.jpg"
    // service_id: 4
    // service_name: "gjjjjjjjjjjjjjjjjjjjj"
    // time: "11:00"
    // user_name: "mahmoud Al Akhdar"
    // working_hours: "08:00 AM - 7:00 PM"

    AllQueues.map((item) => {
      hour = Number(item.time.split(':')[0]);
      item.time.split(':')[1] ? (minute = Number(item.time.split(':')[1])) : (minute = 0);
      startIndex = (hour - startWorkingHour) * 60 + minute;
      removedItems = Number(item.estimated_time);
      bookedArray = new Array(removedItems).fill(1);
      startPercentage = (startIndex / workingHoursArray.length) * 100;
      widthPercentage = (removedItems / workingHoursArray.length) * 100;
      if (workingHoursArray[startIndex] == 0 && workingHoursArray[startIndex + removedItems - 1] != 1) {
        workingHoursArray.splice(startIndex, removedItems, ...bookedArray);
        renderedTickets.push({
          div: (
            <div
              style={{
                width: `${widthPercentage}%`,
                height: '100%',
                position: 'absolute',
                left: `${startPercentage}%`,
                backgroundColor: '#FFC107',
                boxSizing: 'border-box',
                border: 'solid 5px white',
                display: 'inline-block',
              }}
            >
              <DeleteForeverIcon style={{ position: 'absolute', right: '0' }} onClick={() => removeTicketHandler(item.startIndex, item.removedItems)} />

              {activeHour > hour ? (
                //   <p style={{ writingMode: 'vertical-lr', textOrientation: 'upright  ', position: 'absolute', top: '2rem' }}>completed</p>
                <DoneAllIcon style={{ marginBottom: '-120px', marginLeft: '1rem' }} />
              ) : null}

              {activeHour == hour ? <CircularProgress style={{ marginBottom: '-8rem', marginLeft: '20%' }} /> : null}
            </div>
          ),
          text: (
            <p
              style={{
                // width: `${widthPercentage}%`,
                width: 'fit-content',
                // width: '15px',
                height: '100%',
                position: 'absolute',
                bottom: '-50%',
                left: `${startPercentage}%`,
                // backgroundColor: 'black',
                // boxSizing: 'border-box',
                // border: 'solid 1px white',
                color: 'white',
                // display: 'inline-block',
                // fontSize: 'larger',
                marginLeft: `${widthPercentage / 1.8}rem`,
              }}
            >
              {/* {Number(item.bookingTime) + ':' + item.servicePeriod} */}
              {Number(minute) + Number(item.estimated_time) >= 60 ? `${hour + 1}:${Number(minute) + Number(item.estimated_time) - 60}0` : `${hour}:${Number(minute) + Number(item.estimated_time)}`}
            </p>
          ),

          parameters: { widthPercentage, startPercentage, startIndex, removedItems },
        });
      } else {
        alert('this time is full! please pick different time..');
      }
    });
    setfinalWorkingHours(workingHoursArray);
    setrenderedDivs(renderedTickets);
  }, [AllQueues]);

  // for styling
  const style = {
    queuecontainer: {
      backgroundColor: '#99154E',
      boxSizing: 'border-box',
      border: '#a38350 solid 1px ',
      width: `75rem`,
      height: '15rem',
      margin: 'auto',
      position: 'relative',
    },
    timeLineContainer: {
      //   backgroundColor: 'black',
      boxSizing: 'border-box',

      //   border: '#a38350 solid 1px',
      width: `75rem`,
      height: '2rem',
      margin: 'auto',
      position: 'relative',
      justifyContent: 'center',
    },
  };
  return (
    <div className={style.bigContainer}>
      <h1 style={{ color: 'white', marginLeft: '5rem' }}>Client Orders :</h1>
      <form style={{ color: 'white', marginLeft: '5rem' }} onSubmit={addTicketHandler}>
        <label>booking time</label>
        <br />
        <input type='float' name='bookingTime'></input>
        <br />

        <label>service period</label>
        <br />

        <input type='number' name='servicePeriod'></input>
        <button>add ticket</button>
      </form>
      <br />
      <div style={style.timeLineContainer}>
        {/* <hr style={{ color: 'red' }} /> */}
        <p style={{ float: 'left', position: 'absolute', top: '-1rem', color: 'white' }}>{startWorkingHour}:00</p>
        {renderedDivs.map((item) => {
          return <>{item.text}</>;
        })}
        <p style={{ float: 'right', marginTop: '0rem', color: 'white' }}>{endWorkingHour}:00</p>
      </div>
      <div style={style.queuecontainer}>{renderedDivs.map((item) => item.div)}</div>
    </div>
  );
}
