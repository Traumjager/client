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
  const [userType,setUserType] = useState('client');
  const [final,setFinal] = useState('');
  const history = useHistory();
  const classes = useStyles();
  function handleSubmit(e) {
    setFinal(e.target.userType.value);
  }
  return ( 
  <> 
  <Container className={`${classes.container} ${classes.textInputs}`} maxWidth="xs">
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
            <Button variant="contained" fullWidth title="submit" type="submit">Submit</Button>
            <Button variant="contained" fullWidth title="cancel" type="button" onClick={() => history.push("/")}>Cancel</Button>
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

  </Container> 
  </>
  )
}

export default Auth