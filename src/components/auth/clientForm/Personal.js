import React,{useState} from "react";
import { Alert } from "@material-ui/lab";
import ImageUpload from "../imageUpload";
import useStyles from "../signUpStyles";
import {Container,Button,TextField,InputAdornment,IconButton ,FormControl } from "@material-ui/core";
import {Visibility,VisibilityOff} from '@material-ui/icons';
import CustomStepper from "../Stepper";
export const Names = ({ formData, setForm, navigation,steps,cancel }) => {
  const { firstName,lastName, email, password,profilePic,activeStep,phone_num } = formData;
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert,setShowAlert]=useState(false);
  const [image,setImage]=useState({});
  const valid=firstName&&lastName&&email&&password&&phone_num;
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
  const handleImageChange=(e)=>{
    setImage(e.target.files[0]);
  }

  React.useEffect(() => {
    setForm({
      target: {
        name: "profile_pic", // form element
        value: image, // the data/url
      },
    });
  }, [image]);

  const classes=useStyles();
  return (
    <Container className={`${classes.container} ${classes.textInputs}`} maxWidth="xs">
      <CustomStepper outSteps={steps} activeStep={steps.indexOf(steps[0])} />
      <h3 style={{textAlign:'center' , color:'#fff'}}>Basic Information</h3>
      <TextField
        label="User Name"
        name="firstName"
        required
        value={firstName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        className={classes.TextField}
        InputLabelProps={{
          style: { color: '#fff' }, 
       }}

      />
      <TextField
        label="User Name"
        name="lastName"
        required
        value={lastName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        className={classes.TextField}
        InputLabelProps={{
          style: { color: '#fff' }, 
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
        className={classes.TextField}
        InputLabelProps={{
          style: { color: '#fff' }, 
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
                className: classes.TextField,
                endAdornment: (
                  <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  style={{color:'white'}}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
                )
              }
              
            }
            InputLabelProps={{
              style: { color: '#fff' }, 
           }}
           className={classes.TextField}
          />
       <TextField
        label="Phone Number"
        name="phone_num"
        type="number"
        value={phone_num}
        onChange={e=>e > 50? setForm(50):setForm(e)}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        className={classes.TextField}


        InputProps={{ inputProps: { min: 18,max:50, className: classes.TextField,} }}
        InputLabelProps={{
          style: { color: '#fff' }, 
       }}
      />
       
      <FormControl margin="normal" fullWidth >
        <TextField type="file" onChange={e=>handleImageChange(e)} name="image"/>
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
