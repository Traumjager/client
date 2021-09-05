import React,{useState} from "react";
import {Container,TextField,Button,FormControl,InputLabel,Select,MenuItem} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import useStyles from "../signUpStyles";
import CustomStepper from '../Stepper';
const cities=['Amman','Irbid','Az Zarqa',"Al Aqabah","As Salt","Jarash","Al Mafraq","Maan","Al Karak","At Tafilah","Ajlun","Madaba"] 
export const Address = ({ formData, setForm, navigation,steps,cancel }) => {
  const { shopName, shopGender, city, address,phoneNumber } = formData;  
  const [showAlert,setShowAlert]=React.useState(false);
  const validFields=shopName&&shopGender&&city&&address&&phoneNumber;
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
        name="shopName"
        value={shopName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        InputProps={{
          className: classes.textInputs,
        }}
      />
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={shopGender}
          name="shopGender"
          onChange={setForm}
          label="Shop Gender"
          fullWidth
        
        >
          <MenuItem  value='men'>Men</MenuItem>
          <MenuItem  value='women'>Women</MenuItem>
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
          InputProps={{
            className: classes.textInputs,
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
        InputProps={{
          className: classes.textInputs,
        }}
      />
      <TextField
        label="Phone Number"
        name="phoneNumber"
        value={phoneNumber}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        InputProps={{
          className: classes.textInputs,
        }}
      />
      <FormControl fullWidth margin="normal">
        {showAlert?<Alert severity="error">All fields are required</Alert>:null}
      </FormControl>
      <div style={{ marginTop: "1rem" }}>
        <Button
          color="secondary"
          variant="contained"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => validate()}
        >
          Next
        </Button>
        <Button
        variant="contained"
        fullWidth
        className={classes.nextButton}
        onClick={() => cancel()}
      >
        Cancel
      </Button>
      </div>
    </Container>
  );
};
