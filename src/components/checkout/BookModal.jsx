import { React, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';
import instance from '../../API/axios';
import { Modal, Backdrop, Fade, Select, MenuItem, InputLabel, FormControl, TextField, Button } from '@material-ui/core';

// import { useSelector, useDispatch } from 'react-redux';
// import { getServicesAction } from './../../../../store/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    float: 'left',

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 300,
    },
    closeIcon: {
      float: 'right',
      backgroundColor: '#a38350',
      color: 'secondary',
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#a38350',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '0.3rem solid #a38350',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  Savebutton: {
    margin: theme.spacing(1),
  },
  Closebutton: {
    margin: theme.spacing(1),
  },
}));

const initialHours = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];
export default function BookModal({ showModal, handleClose, barberId, cart }) {
  // const dispatch = useDispatch();
  // const state = useSelector((state) => state.authReducer);
  const classes = useStyles();
  const [selectedTime, setSelectedTime] = useState({});
  // { barbarId, serviseId, clientId, time }
  // const [ticket, setTicket] = useState({});
  let ticket;
  const [hours, setHours] = useState(initialHours);
  let periods = [];
  // create & post ticket handle
  function createTicket() {
    let x = selectedTime?.bookHour;
    // let bookedHour = x?.split(' ')[0];
    // console.log(bookedHour);
    let hour = x?.split(':')[0];
    let mintue = x?.split(':')[1];
    let totalMinutes = Number(hour) * 60 + Number(mintue);
    console.log(totalMinutes);

    let hourAlone = 0;
    let hourRevers;
    let mintreverse;
    let mintreverse2;
    let timeSer = x + ' ' + selectedTime.bookDate;
    let mintreverse3;
    cart.forEach(async (service, idx) => {
      console.log('timeSer', timeSer);
      console.log(service);
      // setTicket({ barbarId: barberId, clientId: 2, serviseId: service.id, time: timeSer });
      ticket = { barbarId: barberId, clientId: 2, serviseId: service.id, time: timeSer };
      // periods.push({ period: service.estimated_time, id: service.id });
      console.log(typeof service.estimated_time, 'est');
      hourAlone = ((totalMinutes + Number(service.estimated_time)) / 60).toFixed(2);
      console.log(hourAlone, 'hourAlone');
      hourRevers = hourAlone.toString().split('.')[0];
      mintreverse = hourAlone.toString().split('.')[1]?.substring(0, 2);
      mintreverse2 = Math.ceil((Number(mintreverse) * 60) / 100);
      console.log(hourRevers, mintreverse2);
      // mintreverse2.toString().split('')[1] ? mintreverse3 = mintreverse2: mintreverse3=mintreverse2
      timeSer = `${hourRevers}:${mintreverse2} ${selectedTime.bookDate}`;
      const response = await instance.post('/client/tickets', ticket);
    });

    // fetch tickets from data base
  }
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      createTicket();

      handleClose();
    } catch (e) {
      console.log('ADD ticket Error', e.message);
    }
  };
  const handleChange = (e) => {
    setSelectedTime({ ...selectedTime, [e.target.name]: e.target.value });
    //     bookDate: "2021-09-08"
    // bookHour: "11:00 Am"
  };

  useEffect(() => {
    // console.log(selectedTime.bookHour);
  }, [selectedTime]);
  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={showModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showModal}>
          <div className={classes.paper}>
            <CloseIcon className={classes.closeIcon} onClick={handleClose} />
            <form className={classes.root} onSubmit={submitHandler} noValidate autoComplete='off'>
              <h2 id='transition-modal-title'>Book Services</h2>

              <div>
                <TextField onChange={(e) => handleChange(e)} type='date' id='outlined-error' name='bookDate' defaultValue={selectedTime.bookDate} variant='outlined' />

                <FormControl style={{ width: '48%', marginLeft: '2%' }} variant='outlined'>
                  <InputLabel id='demo-simple-select-outlined-label'>Time</InputLabel>
                  <Select labelId='demo-simple-select-outlined-label' id='demo-simple-select-outlined' value={selectedTime.bookHour} name='bookHour' onChange={(e) => handleChange(e)} label='Time'>
                    {hours.map((hour, key) => (
                      <MenuItem key={hour} value={hour}>
                        {hour}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <Button onClick={handleClose} variant='contained' size='large' className={classes.Closebutton} startIcon={<CloseIcon />}>
                Cancel
              </Button>
              <Button variant='contained' size='large' type='submit' className={classes.Savebutton} startIcon={<SaveIcon />}>
                Book Now
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
