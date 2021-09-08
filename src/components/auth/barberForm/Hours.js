import React from "react";
import {
  Container,
  TextField,
  Button,
  FormControl,
  Checkbox,
  InputLabel,
  Typography,
} from "@material-ui/core";
import useStyles from "../signUpStyles";
import CustomStepper from "../Stepper";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import instance from "../../../API/axios";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const Contact = ({ formData, setForm, navigation, steps, cancel }) => {
  const { workingHours, holidays, endingHour, startingHour,profile_pic } = formData;
  const [localHolidays, setLocalHolidays] = React.useState([]);
  const [image, setImage] = React.useState(profile_pic);
  const days = [
    { title: "Monday" },
    { title: "Tuesday" },
    { title: "Wednesday" },
    { title: "Thursday" },
    { title: "Friday" },
    { title: "Saturday" },
    { title: "Sunday" },
  ];

  async function finalData(e) {
    e.preventDefault();
    const holi = localHolidays.join(",").replaceAll(",", " ");
    const startHour = convertTime(startingHour);
    const endHour = convertTime(endingHour);
    let form = new FormData();
    form.append("holidays", holi);
    form.append("role",formData.role);
    form.append("firstName", formData.firstName);
    form.append("lastName", formData.lastName);
    form.append("email", formData.email);
    form.append("password", formData.password);
    form.append("age", formData.age);
    form.append("gender",formData.gender)
    form.append("profile_pic",image);
    form.append("shop_name",formData.shop_name);
    form.append("shop_gender",formData.shop_gender);
    form.append("city",formData.city);
    form.append("address",formData.address);
    form.append("phone_num",formData.phone_num);
    form.append("working_hours",`${startHour} -${endHour}`);
    let response = await instance.post("/sign-up", form, {headers: { 'Content-Type': 'multipart/form-data' }});
    localStorage.setItem("token", response.data.verification_token);
    
    navigation.next();
  }
  function holidayHandler(e) {
    if (e.target.checked && localHolidays.indexOf(e.target.value) === -1) {
      setLocalHolidays([...localHolidays, e.target.value]);
    } else {
      setLocalHolidays(localHolidays.filter((item) => item !== e.target.value));
    }
  }
  function convertTime(time) {
    let hours = time.split(":")[0];
    let minutes = time.split(":")[1];
    let suffix = "AM";
    if (hours >= 12) {
      suffix = "PM";
      hours = hours - 12;
    }
    if (hours === 0) {
      hours = 12;
    }
    return `${hours}:${minutes} ${suffix}`;
  }
  React.useEffect(() => {
    setForm({
      target: {
        name: "holidays", // form element
        value: localHolidays, // the data/url
      },
    });
  }, [localHolidays]);
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth="xs">
      <CustomStepper outSteps={steps} activeStep={steps.indexOf(steps[2])} />
      <h3 style={{textAlign:'center',color:'#fff'}}>Working Hours And Holidays</h3>
      <form onSubmit={finalData}>
      <FormControl fullWidth margin="normal">
        <TextField
          id="time"
          label="Open On"
          name="startingHour"
          type="time"
          variant="outlined"
          value={startingHour}
          className={classes.TextField}
          onChange={setForm}
          
          InputLabelProps={{
            shrink: true,
            style: { color: '#fff' },
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
          variant="outlined"
          className={classes.TextField}
          value={endingHour}
          onChange={setForm}
          InputLabelProps={{
            shrink: true,
            style: { color: '#fff' },
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
                style={{ marginRight: 8 ,color:'#fff' }}
                checked={localHolidays.includes(option.title)}
                onChange={(e) => holidayHandler(e)}
                value={option.title}
              />
              {option.title}
            </Typography>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Holidays"
              className={classes.TextField}
              placeholder="Pick A Day"
            />
          )}
        />
      </FormControl>
      <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center' }}>
        <Button
          style={{ width: "2%", marginRight: "1.5rem" }}
          variant="contained"
          className={classes.nextButton}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          style={{ width: "20%" }}
          className={classes.nextButton}
          variant="contained"
          type="submit"
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
      </form>
    </Container>
  );
};
