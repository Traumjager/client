import React,{useState} from "react";
import {Container,TextField,Button,FormControl,InputLabel,Select,MenuItem} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import useStyles from "../signUpStyles";
import CustomStepper from '../Stepper';
const cities=['Amman','Irbid','Az Zarqa',"Al Aqabah","As Salt","Jarash","Al Mafraq","Maan","Al Karak","At Tafilah","Ajlun","Madaba"] 
export const Address = ({ formData, setForm, navigation,steps,cancel }) => {
  const { shop_name, shop_gender, city, address,phone_num } = formData;  
  const [showAlert,setShowAlert]=React.useState(false);
  const validFields=shop_name&&shop_gender&&city&&address&&phone_num;
  function validate(){
    if(validFields){
      navigation.next();
    }
    else{
     setShowAlert(true);
    }
  }
  const classes=useStyles();
  return (
    <Container className={classes.container} maxWidth="xs">
       <CustomStepper outSteps={steps} activeStep={steps.indexOf(steps[1])} />
      <h3>Shop Information</h3>
      <TextField
        label="Shop Name"
        name="shop_name"
        value={shop_name}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        className = {classes.TextField}
        InputLabelProps={{
          style: { color: '#fff' }, 
       }}
      />
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel style={{color:'#fff'}} id="demo-simple-select-outlined-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={shop_gender}
          name="shop_gender"
          onChange={setForm}
          label="Shop Gender"
          fullWidth
          className = {classes.TextField}
          InputLabelProps={{
            style: { color: '#fff' }, 
         }}
        >
          <MenuItem  value='men'>Men</MenuItem>
          <MenuItem  value='women'>Women</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel style={{color:'#fff'}}  id="city">Home City</InputLabel>
        <Select
          labelId="city"
          id="city"
          value={city}
          name="city"
          onChange={setForm}
          label="Home City"
          fullWidth
          className = {classes.TextField}
          InputLabelProps={{
            style: { color: '#fff' }, 
         }}
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
        className = {classes.TextField}
        InputLabelProps={{
          style: { color: '#fff' }, 
       }}
      />
      <TextField
        label="Phone Number"
        name="phone_num"
        value={phone_num}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        className = {classes.TextField}
        InputLabelProps={{
          style: { color: '#fff' }, 
       }}
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
