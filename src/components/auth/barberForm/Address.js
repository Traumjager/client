import React from "react";
import {Container,TextField,Button,FormControl,InputLabel,Select,MenuItem} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
const cities=['Amman','Irbid','Az Zarqa',"Al Aqabah","As Salt","Jarash","Al Mafraq","Maan","Al Karak","At Tafilah","Ajlun","Madaba"] 
export const Address = ({ formData, setForm, navigation }) => {
  const { shopName, shopGender, city, address,phoneNumber } = formData;
  const valid=shopName.length>0&&shopGender.length>0&&city.length>0&&address.length>0&&phoneNumber.length>0;
  const [showAlert,setShowAlert]=React.useState(false);
  function validate(){
    if(valid){
      navigation.next();
    }
    else{
     setShowAlert(true);
    }
  }
  return (
    <Container maxWidth="xs">
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
          <MenuItem value='male'>Male</MenuItem>
          <MenuItem value='female'>Female</MenuItem>
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
      </div>
    </Container>
  );
};
