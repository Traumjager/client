import React, { useState } from 'react';
import { Alert } from '@material-ui/lab';
import { Container, Button, TextField, InputAdornment, IconButton, FormControl, Grid } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { If, Then } from 'react-if';
import Auth from './SignUp';
import useStyles from './signUpStyles';
import { useDispatch } from 'react-redux';
import { handleSignUp } from '../../store/actions';

import axios from '../../API/axios';
import { useHistory } from 'react-router';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const classes = useStyles();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [validationMessage, setValidationMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  async function login() {
    //login or show alert
    const response = await axios.post(
      'sign-in',
      {},
      {
        auth: {
          username: email,
          password: password,
        },
      }
    );
    dispatch(handleSignUp(response.data));

    history.push('/')
  }
  function validate(e) {
    e.preventDefault();
    let checkFields = email && password;
    let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    if (!checkFields) {
      setValidationMessage('Please fill all fields');
      setShowAlert(true);
    } else if (!validEmail) {
      setValidationMessage('Please enter valid email');
      setShowAlert(true);
    }
    if (checkFields && validEmail) {
      login();
    }
  }
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const toggleShowSignUp = () => {
    setShowSignUp(!showSignUp);
  };
  return (
    <>
      <If condition={showSignUp == false}>
        <Then>
          <div className={classes.loginContainer}>
            <form onSubmit={validate}>
              <FormControl fullWidth margin='normal'>
                <TextField
                  label='E-Mail'
                  name='email'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setShowAlert(false);
                  }}
                  className={classes.TextField}
                  variant='outlined'
                  autoComplete='off'
                  InputLabelProps={{
                    style: { color: '#fff' }, 
                 }}
                />
              </FormControl>
              <TextField
                label='Password'
                name='password'
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setShowAlert(false);
                }}
                margin='normal'
                variant='outlined'
                autoComplete='off'
                className={classes.TextField}
                InputProps={{
                  className: classes.textInputs,
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              InputLabelProps={{
                  style: { color: '#fff' }, 
               }}
              />

              {showAlert ? <Alert severity='error'>{validationMessage}</Alert> : null}
              <Button variant='contained' fullWidth className={classes.nextButton} type='submit'>
                Login
              </Button>
              <Button
                variant='contained'
                fullWidth
                className={classes.nextButton}
                onClick={() => {
                  setShowSignUp(true);
                }}
              >
                Sign Up Instead
              </Button>
            </form>
          </div>
        </Then>
      </If>
      <If condition={showSignUp == true}>
        <Then>
          <Auth toggleShowSignUp={toggleShowSignUp} />
        </Then>
      </If>
    </>
  );
};
export default Login;
