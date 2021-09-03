import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import ClientForm from './clientForm/ClientForm';
import BarberForm from './barberForm/BarberForm';
import {If,Then,Else,} from 'react-if';
import {Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button} from '@material-ui/core';
function Auth() {
    const [userType, setUserType] = useState('client');
    const [final, setFinal] = useState('');
    const history=useHistory();
    function handleSubmit(e){
        setFinal(e.target.userType.value);
    }
  return (
      <>
      <If condition={!final}>
          <Then>
          <form onSubmit={handleSubmit}>
      <FormControl component="fieldset">
        <FormLabel component="legend">user type</FormLabel>
        <RadioGroup
          aria-label="User Type"
          name="userType"
          value={userType}
          onChange={e=>setUserType(e.target.value)}>
          <FormControlLabel value="barber" control={< Radio />} label="barber"/>
          <FormControlLabel value="client" control={< Radio />} label="client"/>
        </RadioGroup>
        <Button title="submit" type="submit">Submit</Button>
        <Button title="cancel" type="button" onClick={()=>history.push("/s")}>Cancel</Button>
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
      </>
  )
}

export default Auth
