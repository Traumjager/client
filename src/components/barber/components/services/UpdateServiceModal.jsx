import { React, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import instance from '../../../../API/axios';
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
export default function UpdateserviceModal({service,handleClose,showUpdateForm,setListOfServices}) {
  const classes = useStyles();
  const [serviceData, setserviceData] = useState(service);
  const handleChange = (e) => {
      setserviceData({ ...serviceData, [e.target.name]: e.target.value });
  };
  async function submitHandler(e){
  e.preventDefault();
  const data={
    serviceName:serviceData.service_name,
    serviceDescrp:serviceData.description,
    servicePrice:serviceData.price,
    estimatedTime:serviceData.estimated_time,
    discount:serviceData.discount,
    endDate:serviceData.end_date,
  }
  let res=await instance.put(`barber/services/${service.id}`,data);
  let response = await instance.get('barber/services/0/0');
  setListOfServices(response.data.rows);
  handleClose();
  }
  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={showUpdateForm}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showUpdateForm}>
          <div className={classes.paper}>
            <CloseIcon className={classes.closeIcon} onClick={handleClose} />
            <form className={classes.root} onSubmit={submitHandler} noValidate autoComplete='off'>
              <h2 id='transition-modal-title'>Update service</h2>
               {/* */}
              <div>
                <TextField id='standard-error' onChange={(e) => handleChange(e)} label='serviceName' name='service_name' value={serviceData.service_name} variant='outlined' />
                <TextField onChange={(e) => handleChange(e)} id='standard-error-helper-text' label='serviceDescrp' name='description' value={serviceData.description} variant='outlined' />
              </div>
              <div>
                <TextField id='filled-error' type='number' onChange={(e) => handleChange(e)} label='servicePrice in JD' value={serviceData.price} name='price' variant='outlined' />
                <TextField
                  className={classes.email}
                  onChange={(e) => handleChange(e)}
                  id='filled-error-helper-text'
                  type='number'
                  label='discount in %'
                  value={serviceData.discount}
                  name='discount'
                  variant='outlined'
                />
              </div>

              <div>
                <TextField onChange={(e) => handleChange(e)} type='date' id='outlined-error' name='end_date' value={serviceData.end_date} variant='outlined' />
                <TextField onChange={(e) => handleChange(e)} type='number' id='outlined-error' name='estimated_time' value={serviceData.estimated_time} variant='outlined' />
              </div>
              <Button onClick={handleClose} variant='contained' size='large' className={classes.Closebutton} startIcon={<CloseIcon />}>
                Close
              </Button>
              <Button variant='contained' size='large' type='submit' className={classes.Savebutton} startIcon={<SaveIcon />}>
                Update
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
