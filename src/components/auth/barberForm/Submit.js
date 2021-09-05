import React from "react";
import useStyles from "../signUpStyles";
import {Container,TextField,Button} from '@material-ui/core';
import { useHistory } from "react-router";
import CustomStepper from "../Stepper";
import {If, Then, Else} from 'react-if';
export const Submit = ({ formData, setForm, navigation,steps,cancel }) => {
  const {verificationToken} = formData;
  const [submitted,setSubmitted] = React.useState(false);
  const history=  useHistory();
  function submitData(){
    console.log(formData);
    setSubmitted(true);
    //Verify the token logic goes here
    setTimeout(()=>{
      history.push("/");
    },2000);
    
  }
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.container} style={{ marginTop: '4rem' }}>
      <If condition={submitted}>
        <Then>
          <CustomStepper outSteps={steps} activeStep={steps.indexOf(steps[3]) + 1}/>
        </Then>
        <Else>
          <CustomStepper outSteps={steps} activeStep={steps.indexOf(steps[3])}/>
        </Else>
      </If>
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
          fullWidth
          variant="contained"
          onClick={() => submitData()}
          className={classes.nextButton}
      >
        Submit
        </Button>
    </Container>
  );
};
