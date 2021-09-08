import React, { useState } from "react";
import {Container,TextField,Button,FormControl,InputLabel,Select,MenuItem} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import useStyles from "../signUpStyles";
import CustomStepper from "../Stepper";
import instance from '../../../API/axios';
const cities=['Amman','Irbid','Az Zarqa',"Al Aqabah","As Salt","Jarash","Al Mafraq","Maan","Al Karak","At Tafilah","Ajlun","Madaba"] 
export const Address = ({ formData, setForm, navigation,steps,cancel}) => {
  const { gender, city, address,age,profile_pic } = formData;
  const valid=gender&&city&&address&&age;
  const [showAlert,setShowAlert]=React.useState(false);
  const [image,setImage]=useState({});
  async function validate(){
    let form = new FormData();
    form.append('role',formData.role);
    form.append('firstName',formData.firstName);
    form.append('lastName',formData.lastName);
    form.append('email',formData.email);
    form.append('password',formData.password);
    form.append('age',formData.age);
    form.append('gender',formData.gender);
    form.append('profile_pic',image);
    form.append('city',formData.city);
    form.append('phone_num',formData.phone_num);
    if(valid){
      let response=await instance.post('/sign-up',form,{headers:{'Content-Type':'application/json'}});
      localStorage.setItem('token',response.data.verification_token);
      navigation.next();
    }
    else{
     setShowAlert(true);
    }
  }
  React.useEffect(() => {
    setImage(profile_pic);
  });
  const classes=useStyles();
  return (
    <Container className={classes.container} maxWidth="xs">
      <CustomStepper outSteps={steps} activeStep={steps.indexOf(steps[1])} />
      <h3 style={{textAlign:'center', color:'#f1f1f1'}}>Contact Information</h3>
      <FormControl variant="outlined" fullWidth   margin="normal">
        <InputLabel  id="demo-simple-select-outlined-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={gender}
          name="gender"
          onChange={setForm}
          label="Gender"
          fullWidth
          className={classes.TextField}
          InputLabelProps={{
            style: { color: '#fff' }, 
         }}

        >
          <MenuItem className={classes.TextField} value='male'>Male</MenuItem>
          <MenuItem className={classes.TextField} value='female'>Female</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel id="city">Home City</InputLabel>
        <Select
          labelId="city"
          id="city"
          value={city}
          name="city"
          onChange={setForm}
          label="Home City"
          fullWidth
          className={classes.TextField}
          
        >
          {cities.map((city,key)=><MenuItem key={key} value={city}>{city}</MenuItem>)};
        </Select>
      </FormControl>
      <TextField
        label="Address"
        name="address"
        value={address}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        
        autoComplete="off"
        fullWidth
        className={classes.TextField}

      />
      <TextField
        label="Age"
        name="age"
        type="number"
        value={age}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        className={classes.TextField}
      />
      <FormControl fullWidth margin="normal">
        {showAlert?<Alert severity="error">All fields are required</Alert>:null}
      </FormControl>
      <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center' }}>
      <Button
        style={{width:"20%",marginRight:"1.5rem"}}
          variant="contained"
          className={classes.nextButton}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          style={{width:"20%"}}
           className={classes.nextButton}
          variant="contained"
          onClick={() => validate()}
        >
          Next
        </Button>
        </div>
        <Button
        variant="contained"
        fullWidth
        className={classes.nextButton}
        onClick={() => cancel()}
      >
        Cancel
      </Button>
     
    </Container>
  );
};
