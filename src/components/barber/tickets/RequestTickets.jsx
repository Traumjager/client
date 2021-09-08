import { React, useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import instance, { url } from '../../../API/axios';
import { useSelector, useDispatch } from 'react-redux';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
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
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function RequestTickets() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [allTickets, setAllTickets] = useState([]);
  const dispatch = useDispatch();
  let barberId = useSelector((state) => state?.authReducer?.user?.id);
  barberId = 1;
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
  }

  return (
    <div style={{ position: 'relative', zIndex: '15' }}>
      <NotificationsNoneIcon aria-controls='customized-menu' aria-haspopup='true' variant='contained' onClick={handleClick} />
      <span>{allTickets.length}</span>
      <StyledMenu id='customized-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        {allTickets?.map((ticket) => {
          return (
            <StyledMenuItem key={ticket.id} style={{ display: 'block' }}>
              <ListItemIcon>
                <img src={url + ticket.profile_pic} style={{ width: '5rem', height: '5rem', marginButton: '3rem' }} fontSize='small' />
              </ListItemIcon>
              <h5>client name:{ticket.user_name}</h5>
              <h5>service name:{ticket.service_name}</h5>

              <h5>service period:{ticket.estimated_time} min</h5>

              <h5>booking time and data: {ticket.time}</h5>

              <CheckCircleOutlineIcon onClick={() => addToQueue(ticket)} />
              <HighlightOffIcon onClick={() => deleteTicket(ticket.id)} />
            </StyledMenuItem>
          );
        })}
      </StyledMenu>
    </div>
  );
}
