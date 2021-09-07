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
import { useSelector, useDispatch } from 'react-redux';
import { getServicesAction } from './../../../../store/actions';

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
export default function CreateserviceModal({ showModal, handleClose, handleOpen }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.authReducer);
  const classes = useStyles();
  const [serviceData, setserviceData] = useState({ barberID: 27 });
 
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      await instance.post('/barber/services', serviceData);
      const services = await instance.get('/barber/services/0/27');
      console.log(services.data);
      dispatch(getServicesAction(services.data.rows));
      handleClose();
    } catch (e) {
      console.log('ADD service Error', e.message);
    }
  };
  const handleChange = (e) => {
      setserviceData({ ...serviceData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
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
            <form className={classes.root} onSubmit={submitHandler} noValidate autoComplete="off">
              <h2 id="transition-modal-title">Add service</h2>

              <div>
                <TextField
                  id="standard-error"
                  onChange={(e) => handleChange(e)}
                  label="serviceName"
                  name="serviceName"
                  defaultValue={''}
                  variant="outlined"
                />
                <TextField
                  onChange={(e) => handleChange(e)}
                  id="standard-error-helper-text"
                  label="serviceDescrp"
                  name="serviceDescrp"
                  defaultValue={''}
                  variant="outlined"
                />
              </div>
              <div>
                <TextField
                  id="filled-error"
                  type="number"
                  onChange={(e) => handleChange(e)}
                  label="servicePrice in JD"
                  defaultValue={''}
                  name="servicePrice"
                  variant="outlined"
                />
                <TextField
                  className={classes.email}
                  onChange={(e) => handleChange(e)}
                  id="filled-error-helper-text"
                  type="number"
                  label="discount in %"
                  defaultValue={''}
                  name="discount"
                  variant="outlined"
                />
              </div>

              <div>
                <TextField
                  onChange={(e) => handleChange(e)}
                  type="date"
                  id="outlined-error"
                  placeHolder=" discount endDate"
                  name="endDate"
                  defaultValue={''}
                  variant="outlined"
                />

                <TextField
                  onChange={(e) => handleChange(e)}
                  id="outlined-error-helper-text"
                  placeHolder="estimated Time"
                  name="estimatedTime"
                  type="number"
                  defaultValue={''}
                  variant="outlined"
                />
              </div>
              <Button
                onClick={handleClose}
                variant="contained"
                size="large"
                className={classes.Closebutton}
                startIcon={<CloseIcon />}
              >
                Close
              </Button>
              <Button
                variant="contained"
                size="large"
                type="submit"
                className={classes.Savebutton}
                startIcon={<SaveIcon />}
              >
                Create
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
