import React from "react";
import {Container,TextField,Button} from '@material-ui/core';
import { Redirect } from "react-router";
export const Submit = ({ formData, setForm, navigation }) => {
  const {verificationToken} = formData;
  function submitData(){
    console.log(formData);
    return <Redirect to="/sdsa"/>
    
  }
  return (
    <Container maxWidth="sm" style={{ marginTop: '4rem' }}>
      <TextField
        label="Verification Code"
        name="verificationToken"
        required
        value={verificationToken}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <Button
          color="primary"
          variant="contained"
          onClick={() => submitData()}
      >
        Submit
        </Button>
    </Container>
  );
};
