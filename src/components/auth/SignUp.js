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

function Auth() {
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
      justify="center"
      style={{
      minHeight: '90vh',
      marginTop: '6vh',
      backgroundColor: '#f5f5f5'
    }}>

      <If condition={!final}>
        <Then>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth margin="normal" component="fieldset">
              <FormLabel component="legend">user type</FormLabel>
              <RadioGroup
                aria-label="User Type"
                name="userType"
                value={userType}
                onChange={e => setUserType(e.target.value)}>
                <FormControlLabel value="barber" control={< Radio />} label="barber"/>
                <FormControlLabel value="client" control={< Radio />} label="client"/>
              </RadioGroup>
              <div style={{
                marginTop: "1rem"
              }}>
                <Button
                  color="secondary"
                  variant="contained"
                  style={{
                  marginRight: "1rem",
                  /*backgroundColor: '#0f0'*/
                }}
                  onClick={() => history.push('/')}>

                  Back To Login
                </Button>
                <Button
                  color="primary"
                  style={{
                  marginRight: "1rem",
                  /*backgroundColor: '#ff0'*/
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