import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import ClientForm from './clientForm';
import BarberForm from './barberForm';
import {If, Then} from 'react-if';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Grid,
  FormLabel,
  Button,
  Container
} from '@material-ui/core';
import useStyles from './signUpStyles';

function Auth(props) {
  const [userType,
    setUserType] = useState('client');
  const [final,
    setFinal] = useState('');
  const history = useHistory();
  const classes = useStyles();
  function handleSubmit(e) {
    setFinal(e.target.userType.value);
  }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{
        width:'30%',
        borderRadius:'6%',
        border:'3px solid #1f2024',
        padding:'1rem',
        margin:'auto',
        marginTop:'15rem',
        marginBottom:'15rem',
        minHeight: '25vh',
        backgroundColor: '#1f2024',
        boxShadow:`inset 10px 10px 15px -10px #17181b,
        inset -10px -10px 15px -10px #27282d`
    }}>

      <If condition={!final}>
        <Then>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth margin="normal" component="fieldset">
              <FormLabel style={{color:"#fff",fontSize:24,textAlign:'center',marginBottom:'2rem'}} component="legend">user type</FormLabel>
              <RadioGroup
                aria-label="User Type"
                name="userType"
                value={userType}
                style={{color:'white'}}
                onChange={e => setUserType(e.target.value)}>
                <FormControlLabel value="barber" control={< Radio style={{color:"#AF844D"}}/>} label="barber"/>
                <FormControlLabel value="client" control={< Radio style={{color:"#AF844D"}}/>} label="client"/>
              </RadioGroup>
              <div style={{
                marginTop: "1rem"
              }}>
                <Button
                  color="secondary"
                  variant="contained"
                  style={{
                  marginRight: "1rem",
                  backgroundColor: '#1f2024',
                  border:'1px solid #a38350 '

                }}
                  onClick={()=>props.toggleShowSignUp()}>

                  Back To Login
                </Button>
                <Button
                  color="primary"
                  style={{
                  marginRight: "1rem",
                  backgroundColor: '#1f2024'
                }}
                  variant="contained"
                  onClick={() => setFinal(userType)}>
                  Next
                </Button>
              </div>
            </FormControl>
          </form>
        </Then>
      </If>
      <If condition={final === 'client'}>
        <Then>
          <ClientForm/>
        </Then>
      </If>
      <If condition={final === 'barber'}>
        <Then>
          <BarberForm/>
        </Then>
      </If>
    </Grid>
  )
}

export default Auth