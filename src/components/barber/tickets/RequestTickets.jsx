import { React, useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import instance, { url } from '../../../API/axios';
import { useSelector, useDispatch } from 'react-redux';
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import zIndex from '@material-ui/core/styles/zIndex';
import { getQueuesAction } from '../../../store/actions';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #a38350',
    backgroundColor: '#1f2024',
    height: '20rem',
    paddingTop: '2rem',
    color: '#f1f1f1',
    zIndex: '8888811111111111156465135',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: '#1f2024',
      border: `#a38350 solid 1px`,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: '#a38350',
      },
    },
    '& .MuiListItemIcon-root': {
      color: '#f1f1f1',
    },
  },
}))(MenuItem);

export default function RequestTickets() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [allTickets, setAllTickets] = useState([]);
  const dispatch = useDispatch();
  let barberId = useSelector((state) => state?.authReducer?.user?.id);
  let queueState = useSelector((state) => state?.queueReducer?.acceptedTicket);
  // fetch tickets
  async function fetchTickets() {
    const response = await instance.get(`/barber/requests/${barberId}`);
    console.log('response', response.data);
    setAllTickets(response.data);
  }
  // did mount
  useEffect(() => {
    fetchTickets();
    console.log('barberId', barberId);
  }, []);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // deleteTicket
  async function deleteTicket(ticketId) {
    const response = await instance.delete(`/barber/requests/${ticketId}`);
    fetchTickets();
  }

  // addToQueue
  async function addToQueue(ticket) {
    // { barbarId, serviseId, clientId, time }
    let ticketData = {
      barbarId: barberId,
      serviseId: ticket.service_id,
      clientId: ticket.client_id,
      time: ticket.time,
      id: ticket.id,
    };
    const response = await instance.post(`/barber/queue/post`, ticketData);
    fetchTickets();
    dispatch(getQueuesAction(!queueState));
  }

  return (
    <div style={{ position: 'relative', zIndex: '51551313515' }}>
      {!allTickets.length ? (
        <NotificationsIcon
          aria-controls='customized-menu'
          variant='contained'
          aria-haspopup='true'
          onClick={handleClick}
          style={{
            color: '#f1f1f1',
            fontSize: 29,
            position: 'absolute',
            top: '-22px',
          }}
        />
      ) : (
        <NotificationsActiveIcon
          variant='contained'
          aria-controls='customized-menu'
          aria-haspopup='true'
          onClick={handleClick}
          style={{
            color: 'red',
            fontSize: 29,
            position: 'absolute',
            top: '-22px',
          }}
        />
      )}
      {/* <NotificationsNoneIcon aria-controls='customized-menu' aria-haspopup='true' variant='contained' onClick={handleClick} /> */}

      <StyledMenu id='customized-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} style={{ paddingTop: '50px' }}>
        {allTickets?.map((ticket) => {
          return (
            <StyledMenuItem key={ticket.id} style={{ display: 'block' }}>
              <ListItemIcon
                style={{
                  // marginTop:'1rem',
                  width: '35rem',
                  height: '5rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}
              >
                <img
                  src={url + ticket.profile_pic}
                  style={{
                    width: '5rem',
                    height: '5rem',
                    marginButton: '3rem',
                  }}
                  fontSize='small'
                />
                <h5>{ticket.user_name}</h5>
                <h5>{ticket.service_name}</h5>

                <h5>{ticket.estimated_time} min</h5>

                <h5>{ticket.time}</h5>

                <CheckCircleOutlineIcon onClick={() => addToQueue(ticket)} />
                <HighlightOffIcon onClick={() => deleteTicket(ticket.id)} />
              </ListItemIcon>
            </StyledMenuItem>
          );
        })}
      </StyledMenu>
    </div>
  );
}
