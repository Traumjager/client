// // import styles from './style/PersonalInformation.module.css';
// import './style/PersonalInformation.css';
import { React, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import {If,Then } from 'react-if';
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
export default function AccountSettings({ showModal, handleClose, handleOpen, user,userType }) {
  const classes = useStyles();
  const [userInformation, setUserInformation] = useState(user);
  const cities=['Amman','Irbid','Az Zarqa',"Al Aqabah","As Salt","Jarash","Al Mafraq","Maan","Al Karak","At Tafilah","Ajlun","Madaba"] 

  useEffect(() => {
    handleOpen();
  }, []);

  const convertToTwelve=(start,end)=>{
    let startTime=start.split(':')
    let endTime=end.split(':')
    let startHour=startTime[0]
    let endHour=endTime[0]
    let startMin=startTime[1]
    let endMin=endTime[1]
    let startAMPM=startHour>12?'PM':'AM'
    let endAMPM=endHour>12?'PM':'AM'
    let startHour12=startHour>12?startHour-12:startHour
    let endHour12=endHour>12?endHour-12:endHour
    let startTime12=startHour12+':'+startMin+' '+startAMPM
    let endTime12=endHour12+':'+endMin+' '+endAMPM
    return `${startTime12} - ${endTime12}`;
  }
  const submitHandler = (e) => {
    e.preventDefault();
    //convert 24 hours to 12 hours
    const workingHours=convertToTwelve(userInformation.startingHour,userInformation.endingHour);
    console.log(workingHours);
    handleClose();
  }
  const handleChange = (e) => {
        setUserInformation({ ...userInformation, [e.target.name]: e.target.value });  
  }
  useEffect(()=>{
    console.log(userInformation);
  },[userInformation])
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
            <If condition={userType=="client"}>
              <Then>
              <form className={classes.root} onSubmit={submitHandler}  noValidate autoComplete='off'>
              <h2 id='transition-modal-title'>Account Settings</h2>
              <p id='transition-modal-description'>edit your information</p>
              <div>
                <TextField id='standard-error' onChange={(e)=>handleChange(e)} label='First Name' name="firstName" defaultValue={userInformation.firstName} variant='outlined' />
                <TextField
                 onChange={(e)=>handleChange(e)}
                  id='standard-error-helper-text'
                  label='Last Name'
                  name="lastName"
                  defaultValue={
                    userInformation.lastName
                  }
                  variant='outlined'
                />
              </div>
              <div>
                <TextField id='filled-error' type="password" onChange={(e)=>handleChange(e)} label='Password' defaultValue={userInformation.password} name="password" variant='outlined' />
                <TextField className={classes.email}  onChange={(e)=>handleChange(e)} id='filled-error-helper-text' label='E-mail' defaultValue={userInformation.email} name="email" variant='outlined' />
              </div>
              <div>
              <FormControl style={{width:"48%",marginLeft:"1%"}} variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={userInformation.gender}
          onChange={(e)=>handleChange(e)}
          name="gender"
          label="Gender"
         
        >
          <MenuItem  value='male'>Male</MenuItem>
          <MenuItem  value='female'>Female</MenuItem>
        </Select>
      </FormControl>
      <FormControl style={{width:"48%",marginLeft:"2%"}} variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={userInformation.city}
          name="city"
          onChange={(e)=>handleChange(e)}
          label="City"
         
        >
          {cities.map((city,key)=><MenuItem key={key} value={city}>{city}</MenuItem>)}
        </Select>
      </FormControl>
              </div>
              <div>
                <TextField  onChange={(e)=>handleChange(e)} id='outlined-error' label='age' name="age" defaultValue={userInformation.age} variant='outlined' />
                <TextField  onChange={(e)=>handleChange(e)} id='outlined-error-helper-text' label='Phone Number' name="phoneNumber" defaultValue={userInformation.phoneNumber} variant='outlined' />
              </div>
              <Button onClick={handleClose} variant='contained' size='large' className={classes.Closebutton} startIcon={<CloseIcon />}>
                Close
              </Button>
              <Button variant='contained' size='large' type="submit" className={classes.Savebutton} startIcon={<SaveIcon />}>
                Save
              </Button>
            </form>
              </Then>
              </If>
            <If condition={userType=='barber'}>
            <form className={classes.root} onSubmit={submitHandler} noValidate autoComplete='off'>
              <h2 id='transition-modal-title'>Account Settings</h2>
              <p id='transition-modal-description'>edit your information</p>
              <div>
                <TextField  onChange={(e)=>handleChange(e)} name="firstName" id='standard-error' label='First Name' defaultValue={userInformation.firstName} variant='outlined' />
                <TextField
                 onChange={(e)=>handleChange(e)}
                  id='standard-error-helper-text'
                  label='Last Name'
                  name="lastName"
                  defaultValue={
                    userInformation.lastName
                  }
                  variant='outlined'
                />
              </div>
              <div>
                <TextField type="password"  onChange={(e)=>handleChange(e)} id='filled-error' name="password" label='Password' defaultValue={userInformation.password} variant='outlined' />
                <TextField  onChange={(e)=>handleChange(e)} className={classes.email} id='filled-error-helper-text' label='email' name="email" defaultValue={userInformation.email} variant='outlined' />
              </div>
              <div style={{marginTop:"2%"}}>
              <FormControl style={{width:"48%",marginLeft:"1%"}} variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={userInformation.gender}
          name="gender"
          onChange={(e)=>handleChange(e)}
          label="Gender"
        >
          <MenuItem  value='male'>Male</MenuItem>
          <MenuItem  value='female'>Female</MenuItem>
        </Select>
      </FormControl>
      <FormControl style={{width:"48%",marginLeft:"2%"}} variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={userInformation.city}
          name="city"
          onChange={(e)=>handleChange(e)}
          label="City"
         
        >
          {cities.map((city,key)=><MenuItem key={key} value={city}>{city}</MenuItem>)}
        </Select>
      </FormControl>
              </div>
              <div>
                <TextField  onChange={(e)=>handleChange(e)} id='outlined-error' label='age' name="age" defaultValue={userInformation.age} variant='outlined' />
                <TextField  onChange={(e)=>handleChange(e)} id='outlined-error-helper-text' name="phoneNumber" label='Phone Number' defaultValue={userInformation.phoneNumber} variant='outlined' />
              </div>
              <div >
              <FormControl style={{width:"48%"}} variant="outlined"> 
      <TextField
      id="time"
      label="Open On"
      name="startingHour"
      type="time"
      onChange={(e)=>handleChange(e)}
      value={userInformation.startingHour}
      InputLabelProps={{
      shrink: true,
      }}
      inputProps={{
      step: 300, // 5 min
      }}
  />
  </FormControl>
  <FormControl style={{width:"48%",marginLeft:"2%"}} variant="outlined">
   <TextField
    id="time"
    label="Close On"
    name="endingHour"
    type="time"
    onChange={(e)=>handleChange(e)}
    value={userInformation.endingHour}
    
    InputLabelProps={{
      shrink: true,
    }}
    inputProps={{
      step: 300, // 5 min
    }}
  />
      </FormControl>
              </div>
              <div >
              <TextField name="shopName"  onChange={(e)=>handleChange(e)} className={classes.email} id='filled-error-helper-text' label='Shop Name' defaultValue={userInformation.shopName} variant='outlined' />
              <FormControl style={{width:"48%",marginLeft:"1%",marginTop:"1.3%"}} variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">Shop gender</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={userInformation.shopGender}
          name="shopGender"
          onChange={(e)=>handleChange(e)}
          label="Shop Gender"
         
        >
          <MenuItem  value='men'>Men</MenuItem>
          <MenuItem  value='women'>Women</MenuItem>
        </Select>
      </FormControl>
              </div>
              <Button onClick={handleClose} variant='contained' size='large' className={classes.Closebutton} startIcon={<CloseIcon />}>
                Close
              </Button>
              <Button variant='contained' type="submit" size='large' className={classes.Savebutton} startIcon={<SaveIcon />}>
                Save
              </Button>
            </form>
            </If>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
