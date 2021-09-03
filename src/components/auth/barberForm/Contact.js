import React,{useState} from "react";
import {Container,TextField,Button,FormControl} from "@material-ui/core";


export const Contact = ({ formData, setForm, navigation }) => {
  const { workingHours, holidays,endingHour,startingHour } = formData;
 //const [startingHour,setStartingHour]=useState("08:30");
  //const [endingHour,setEndingHour]=useState("17:30");
  console.log(formData.startingHour);
  function finalData(){
    console.log(formData);
    navigation.next();
  }
  return (
    <Container maxWidth="xs">
      <h3>Working Hours And Holidays</h3>
      <FormControl fullWidth margin="normal"> 
      <TextField
      id="time"
      label="Open On"
      name="startingHour"
      type="time"
      value={startingHour}
      onChange={setForm}
      InputLabelProps={{
      shrink: true,
      }}
      inputProps={{
      step: 300, // 5 min
      }}
  />
  </FormControl>
  <FormControl fullWidth margin="normal">
   <TextField
    id="time"
    label="Close On"
    name="endingHour"
    type="time"
    value={endingHour}
    onChange={setForm}
    InputLabelProps={{
      shrink: true,
    }}
    inputProps={{
      step: 300, // 5 min
    }}
  />
      </FormControl>
      <TextField
        label="E-Mail"
        name="email"
        value={''}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
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
          onClick={() => finalData()}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};
