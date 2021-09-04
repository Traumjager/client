import React,{useState} from "react";
import { Alert } from "@material-ui/lab";
import ImageUpload from "../imageUpload";
import useStyles from "../signUpStyles";
import {Container,Button,TextField,InputAdornment,IconButton ,FormControl } from "@material-ui/core";
import {Visibility,VisibilityOff} from '@material-ui/icons';
import CustomStepper from "../Stepper";
export const Names = ({ formData, setForm, navigation,steps }) => {
  const { userName, email, password,profilePic,activeStep,phoneNumber } = formData;
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert,setShowAlert]=useState(false);
  const valid=userName&&email&&password&&phoneNumber;
  function validate(){
    if(valid){
      navigation.next();
    }
    else{
     setShowAlert(true);
    }
  }
  const handleClickShowPassword = () => {
    setShowPassword( !showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const classes=useStyles();
  return (
    <Container className={`${classes.container} ${classes.textInputs}`} maxWidth="xs">
      <CustomStepper outSteps={steps} activeStep={steps.indexOf(steps[0])} />
      <h3>Basic Information</h3>
      <TextField
        label="User Name"
        name="userName"
        required
        value={userName}
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
        label="E-Mail"
        name="email"
        required
        value={email}
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
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            required
            fullWidth
            InputProps={
              {
                className: classes.textInputs,
                endAdornment: (
                  <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
                )
              }
              
            }
          />
       <TextField
        label="Phone Number"
        name="phoneNumber"
        type="number"
        value={phoneNumber}
        onChange={e=>e > 50? setForm(50):setForm(e)}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        InputProps={{ inputProps: { min: 18,max:50, className: classes.textInputs,} }}
      />
       
      <FormControl margin="normal" fullWidth >
        <ImageUpload className={classes.textInputs} setForm={setForm}/>
      </FormControl>
      {showAlert?<Alert severity="error">Please fill all the fields</Alert>:null}
      <Button
        variant="contained"
        fullWidth
        className={classes.nextButton}
        onClick={() => validate()}
      >
        Next
      </Button>
    </Container>
  );
};
