// // import styles from './style/PersonalInformation.module.css';
// import './style/PersonalInformation.css';
import { React, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
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
    border: '2px solid #000',
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
export default function PersonalInformation({ showModal, handleClose, handleOpen }) {
  const classes = useStyles();
  const [clientInformation, setClientInformation] = useState({
    userName: 'Ahmad Abu Osbeh',
    email: 'khaledothman@gmail.com',
    password: 12345,
    city: 'Amman',
    gender: 'Male',
    age: 26,
    phoneNumber: '07848524642',
    profilePic: 'https://randomuser.me/api/portraits/men/52.jpg',
  });

  useEffect(() => {
    handleOpen();
  }, []);

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
            <form className={classes.root} noValidate autoComplete='off'>
              <h2 id='transition-modal-title'>Account Settings</h2>
              <p id='transition-modal-description'>edit your personal information</p>
              <div>
                <TextField id='standard-error' label='First Name' defaultValue={clientInformation.userName.split(' ')[0]} variant='outlined' />
                <TextField
                  id='standard-error-helper-text'
                  label='Last Name'
                  defaultValue={
                    clientInformation.userName.split(' ')[2] ? clientInformation.userName.split(' ')[1] + ' ' + clientInformation.userName.split(' ')[2] : clientInformation.userName.split(' ')[1]
                  }
                  variant='outlined'
                />
              </div>
              <div>
                <TextField id='filled-error' label='Password' defaultValue={clientInformation.password} variant='outlined' />
                <TextField className={classes.email} id='filled-error-helper-text' label='email' defaultValue={clientInformation.email} variant='outlined' />
              </div>
              <div>
                <TextField id='outlined-error' label='City' defaultValue={clientInformation.city} variant='outlined' />
                <TextField id='outlined-error-helper-text' label='gender' defaultValue={clientInformation.gender} variant='outlined' />
              </div>
              <div>
                <TextField id='outlined-error' label='age' defaultValue={clientInformation.age} variant='outlined' />
                <TextField id='outlined-error-helper-text' label='Phone Number' defaultValue={clientInformation.phoneNumber} variant='outlined' />
              </div>
              <Button onClick={handleClose} variant='contained' size='large' className={classes.Closebutton} startIcon={<CloseIcon />}>
                Close
              </Button>
              <Button variant='contained' size='large' className={classes.Savebutton} startIcon={<SaveIcon />}>
                Save
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
