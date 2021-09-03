import React from "react";
import {Container,TextField,Button,FormControl,Select,MenuItem,Checkbox} from "@material-ui/core";
import useStyles from "../signUpStyles";
import CustomStepper from '../Stepper';
export const Contact = ({ formData, setForm, navigation,steps }) => {
  const { workingHours, holidays,endingHour,startingHour } = formData;
  const [localHolidays,setLocalHolidays]=React.useState([holidays]);
  console.log(formData);
  function finalData(){
    console.log(formData);
    navigation.next();
  }
  console.log(holidays[6]);
  function holidayHandler(e){
    if(e.target.checked){
      setLocalHolidays([...localHolidays,e.target.value]);
      setForm({
        target: {
          name: 'holidays', // form element
          value: localHolidays // the data/url
        }
      })
    }
  }
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="xs">
       <CustomStepper outSteps={steps} activeStep={steps.indexOf(steps[2])} />
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
      <Select
        label="E-Mail"
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      >
        <MenuItem name='shit'><Checkbox id='0' name="holidays"  value={localHolidays[6]}onChange={e=>holidayHandler(e)} />Sunday</MenuItem>
        <MenuItem><Checkbox id='6' onChange={e=>holidayHandler(e)}  value={localHolidays[6]} /></MenuItem>
        <MenuItem><Checkbox id='5' onChange={e=>holidayHandler(e)}  value={localHolidays[6]}/>Friday</MenuItem>
        </Select>
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
