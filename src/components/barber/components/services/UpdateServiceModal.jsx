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
export default function UpdateserviceModal({ showUpdateForm, handleClose, onSubmitUpdate, pro }) {
  const classes = useStyles();
  const [serviceData, setserviceData] = useState({});

  const handleChange = (e) => {
    if (e.target.name == 'serviceImg') {
      setserviceData({ ...serviceData, [e.target.name]: e.target.files[0] });
    } else {
      setserviceData({ ...serviceData, [e.target.name]: e.target.value });
    }
  };

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
            <form className={classes.root} onSubmit={(e) => onSubmitUpdate(e, pro, serviceData)} noValidate autoComplete='off'>
              <h2 id='transition-modal-title'>Update service</h2>

              <div>
                <TextField id='standard-error' onChange={(e) => handleChange(e)} label='serviceName' name='serviceName' defaultValue={pro.service_name} variant='outlined' />
                <TextField onChange={(e) => handleChange(e)} id='standard-error-helper-text' label='serviceDescrp' name='serviceDescrp' defaultValue={pro.description} variant='outlined' />
              </div>
              <div>
                <TextField id='filled-error' type='number' onChange={(e) => handleChange(e)} label='servicePrice in JD' defaultValue={pro.price} name='servicePrice' variant='outlined' />
                <TextField
                  className={classes.email}
                  onChange={(e) => handleChange(e)}
                  id='filled-error-helper-text'
                  type='number'
                  label='discount in %'
                  defaultValue={pro.discount}
                  name='discount'
                  variant='outlined'
                />
              </div>

              <div>
                <TextField onChange={(e) => handleChange(e)} type='date' id='outlined-error' name='endDate' defaultValue={pro.end_date} variant='outlined' />

                <TextField onChange={(e) => handleChange(e)} id='outlined-error-helper-text' placeHolder='serviceImg' name='serviceImg' type='file' defaultValue={''} variant='outlined' />
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
