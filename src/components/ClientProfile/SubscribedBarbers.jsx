import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import {PersonAddDisabledOutlined,RateReviewOutlined} from '@material-ui/icons';
import { Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoTitle, InfoSubtitle } from '@mui-treasury/components/info';
import { useTutorInfoStyles } from '@mui-treasury/styles/info/tutor';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import {Box} from '@material-ui/core';
import {Rating} from '@material-ui/lab';
const useStyles = makeStyles((theme) => ({
  action: {
    backgroundColor: '#fff',
    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.12)',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
    },
  },
  rating: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight:"15%"
  },
  avatar:{
    marginTop:"5%",
  },
  container:{
    width:'78%',
    margin:'auto',
    marginBottom:10,
    
  },
  info:{
    maxWidth:'25%',
    margin:'auto',
    marginLeft:'-1%',
    justifyContent:'center',
  },
  bigContainer:{
    marginTop:"-10%",
    textAlign:"left",
  }
}));
const example=[
  {
  id:1,
  name:'Ammoura',
  location:'Irbid',
  image:'https://www.biography.com/.image/t_share/MTU0ODUwMjQ0NjIwNzI0MDAx/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg',
  rating:3, 
  },
  {
  id:2,
  name:'Hatem',
  location:'Mafraq',
  image:'https://www.biography.com/.image/t_share/MTU0ODUwMjQ0NjIwNzI0MDAx/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg',
  rating:4, 
  },
  {
  id:3,
  name:'Abo osbeh',
  location:'Zarqa',
  image:'https://www.biography.com/.image/t_share/MTU0ODUwMjQ0NjIwNzI0MDAx/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg',
  rating:5, 
  },
  {
  id:4,
  name:'Ramahi',
  location:'Amman',
  image:'https://www.biography.com/.image/t_share/MTU0ODUwMjQ0NjIwNzI0MDAx/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg',
  rating:2, 
  }
]


//generate random number between 1 and 100

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(100));
}


function SubscribedBarbers(){
  const [barbers,setBarbers]=useState([]);
  useEffect(()=>{
  setBarbers(example);
  },[])

  function unsubscribe(id){
    setBarbers(barbers.filter(barber=>barber.id!==id));
  }
  
  function review(id){
    
  }

  const styles = useStyles();
  const iconBtnStyles = useSizedIconButtonStyles({ size: 48 });
  const avatarStyles = useDynamicAvatarStyles({ radius: 12, size: 48 });
  return (
    <div className={styles.bigContainer}>
    {barbers.map(barber=>(
      <Row key={barber.id}  p={1.5} gap={2} border={'solid 2px #c7b74e'} className={styles.container} bgcolor={'#f5f5f5'}>
      <Item>
        <Avatar
          className={styles.avatar}
          classes={avatarStyles}
          src={
            barber.image
          }
        />
      </Item>
     
      <Info position={'middle'} useStyles={useTutorInfoStyles} className={styles.info}>
        <InfoTitle>{barber.name}</InfoTitle>
        <InfoSubtitle>Location: {barber.location}</InfoSubtitle>
      </Info>
      <Box component="fieldset" className={styles.rating} borderColor="transparent">
        <Rating name="read-only" value={barber.rating} readOnly />
        <small style={{textAlign:'center'}}>{getRandomInt()} Reviews</small>
      </Box>
      <Item pl={'5%'} pr={'5%'} alignContent={"center"}  position={'middle'}>
        <IconButton className={styles.action} onClick={()=>unsubscribe(barber.id)} classes={iconBtnStyles}>
          <PersonAddDisabledOutlined />
        </IconButton>
      </Item>
      <Item pl={'5%'} pr={'5%'}  position={'middle'}>
        <IconButton className={styles.action} onClick={()=>review(barber.id)} classes={iconBtnStyles}>
          <RateReviewOutlined />
        </IconButton>
      </Item>
    </Row>
    ))}
    </div>
  );
}
export default SubscribedBarbers;