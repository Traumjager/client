import React from "react";
import useStyles from "../signUpStyles";
import {Container, TextField, Button} from '@material-ui/core';
import {useHistory} from "react-router";
import CustomStepper from "../Stepper";
import {If, Then, Else} from 'react-if';
export const Submit = ({formData, setForm, navigation, steps,cancel}) => {
  const {verificationToken} = formData;
  const [submitted,setSubmitted] = React.useState(false);
  const history = useHistory();
  function submitData() {
    setSubmitted(true);
    console.log(formData);
    setTimeout(() => {
      history.push("/");
    }, 2000);

  }
  const classes = useStyles();
  return (
    <Container
      maxWidth="sm"
      className={classes.container}
      style={{
      marginTop: '4rem'
    }}>
      <If condition={submitted}>
        <Then>
          <CustomStepper outSteps={steps} activeStep={steps.indexOf(steps[2]) + 1}/>
        </Then>
        <Else>
          <CustomStepper outSteps={steps} activeStep={steps.indexOf(steps[2])}/>
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
        fullWidth/>
      <Button
        variant="contained"
        onClick={() => submitData()}
        fullWidth
        className={classes.nextButton}>
        Submit
      </Button>
    </Container>
  );
};
