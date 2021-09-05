import React from "react";
import {Container,TextField,Button,FormControl,Checkbox,InputLabel,Typography} from "@material-ui/core";
import useStyles from "../signUpStyles";
import CustomStepper from '../Stepper';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const Contact = ({ formData, setForm, navigation,steps,cancel }) => {
  const { workingHours, holidays,endingHour,startingHour } = formData;
  const [localHolidays,setLocalHolidays]=React.useState([]);
  const days=[{title:'Monday'},{title:'Tuesday'},{title:'Wednesday'},{title:'Thursday'},{title:'Friday'},{title:'Saturday'},{title:'Sunday'}];
  function finalData(){
    console.log(formData);
    navigation.next();
  }
  function holidayHandler(e){
     if(e.target.checked&&localHolidays.indexOf(e.target.value)===-1){
       console.log(e.target);
      setLocalHolidays([...localHolidays,e.target.value]);    
     }
     else{
       setLocalHolidays(localHolidays.filter(item=>item!==e.target.value));
     }
  }
  React.useEffect(() => {
    console.log(localHolidays);
    setForm({
      target: {
        name: 'holidays', // form element
        value: localHolidays // the data/url
      }
    })
  }, [localHolidays])
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
      <FormControl fullWidth margin="normal">
      <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={days}
      disableCloseOnSelect
      disableClearable={true}
      getOptionLabel={(option) => option.title}
      renderOption={(option, { selected }) => (
        <Typography color="textSecondary">
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={localHolidays.includes(option.title)}
            onChange={e=>holidayHandler(e)}
            value={option.title}
          />
           {option.title}
           </Typography>
          
      )}

      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="Holidays" placeholder="Pick A Day" />
      )}
    />
        </FormControl>
      <div style={{ marginTop: "1rem" }}>
      <Button
        style={{width:"47%",marginRight:"1.5rem"}}
          variant="contained"
          className={classes.nextButton}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          style={{width:"47%"}}
           className={classes.nextButton}
          variant="contained"
          onClick={() => finalData()}
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
