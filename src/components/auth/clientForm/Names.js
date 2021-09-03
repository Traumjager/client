import React,{useState} from "react";
import {Container,Button,TextField,InputAdornment,IconButton } from "@material-ui/core";
import {AccountCircleOutlined,Visibility,VisibilityOff,EmailOutlined,LockOutlined} from '@material-ui/icons';
export const Names = ({ formData, setForm, navigation }) => {
  const { userName, email, password } = formData;
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword( !showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Container maxWidth="xs">
      <h3>Names</h3>
      <TextField
        label="User Name"
        name="userName"
        value={userName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircleOutlined />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="E-Mail"
        name="email"
        value={email}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailOutlined />
            </InputAdornment>
          ),
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
            fullWidth
            InputProps={
              {
                startAdornment:(
                  <InputAdornment position="start">
                  <LockOutlined />
                </InputAdornment>
                ),
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
      <Button
        variant="contained"
        fullWidth
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={() => navigation.next()}
      >
        Next
      </Button>
    </Container>
  );
};
