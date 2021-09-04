import React,{useState} from "react";
import { Alert } from "@material-ui/lab";
import {Container,Button,TextField,InputAdornment,IconButton, FormControl,Grid } from "@material-ui/core";
import {Visibility,VisibilityOff} from '@material-ui/icons';
import useStyles from './signUpStyles';
  const Login = () => {
  const classes = useStyles();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert,setShowAlert]=useState(false);
  function login(){
    //login or show alert
    console.log(email,password);
  }
  function validate(e){
    e.preventDefault();
    let checkFields=email && password;
    let validEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    if(!checkFields){
      setValidationMessage("Please fill all fields");
      setShowAlert(true);
    }
    else if(!validEmail){
      setValidationMessage("Please enter valid email");
      setShowAlert(true);
    }
    if(checkFields&&validEmail){
      login();
    }
    
  }
  const handleClickShowPassword = () => {
    setShowPassword( !showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{
    minHeight: '90vh',
    marginTop: '6vh',
    maxWidth: '100%',
    backgroundColor: '#f5f5f5'
  }}>
      <Grid item xs={6} className={classes.loginForm}>
      <form onSubmit={validate}>
      <FormControl fullWidth margin="normal">
      <TextField
        label="E-Mail"
        name="email"
        value={email}
        onChange={e=>{setEmail(e.target.value);setShowAlert(false)}}
        variant="outlined"
        autoComplete="off"
        InputProps={{
          className: classes.textInputs,
        }}
      />
      </FormControl>
      <TextField
            label="Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={e=>{setPassword(e.target.value);setShowAlert(false)}}
            margin="normal"
            variant="outlined"
            autoComplete="off"
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
       
      {showAlert?<Alert severity="error">{validationMessage}</Alert>:null}
      <Button
        variant="contained"
        fullWidth
        className={classes.nextButton}
        type="submit"
      >
        Login
      </Button>
      </form>
    </Grid>
    </Grid>
  );
};
export default Login;