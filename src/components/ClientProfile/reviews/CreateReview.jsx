import { React, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import instance from '../../../API/axios'
import { useSelector, useDispatch } from 'react-redux';
import { getServicesAction } from '../../../store/actions';
import { Rating } from '@material-ui/lab';
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
export default function CreateReview({ showModal, handleClose, review,fetch }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.authReducer);
  const classes = useStyles();
  const [serviceData, setserviceData] = useState({barberId: review.barber_id,clientId:review.client_id});
 
  const submitHandler = async (e) => {
    try {
     e.preventDefault();
     console.log(serviceData);
      await instance.post('/client/reviews', serviceData);
      fetch();
      handleClose();
    } catch (e) {
      console.log('ADD service Error', e.message);
    }
  };
  useEffect(() => {
    console.log('review', serviceData);
  }, [serviceData]);
  const handleChange = (e) => {
      if(e.target.name==='simple-controlled'){
        setserviceData({...serviceData,rate:e.target.value})
      }
      else{
        setserviceData({ ...serviceData, [e.target.name]: e.target.value });
      }
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
                  label="description"
                  name="description"
                  defaultValue={''}
                  variant="outlined"
                />
                  <Rating name="simple-controlled" onChange={e=>handleChange(e)} value={setserviceData.rate} precision={1} />
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
