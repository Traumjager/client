import React from "react";
import useStyles from "../signUpStyles";
import { Container, TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router";
import CustomStepper from "../Stepper";
import { If, Then, Else } from "react-if";
import instance from "../../../API/axios";

import {useDispatch} from 'react-redux'
import { handleSignUp } from "../../../store/actions/index";
export const Submit = ({ steps, formData }) => {

  const dispatch = useDispatch();


  const [submitted, setSubmitted] = React.useState(false);
  const [verificationToken, setVerificationToken] = React.useState("");
  const history = useHistory();
  async function submitData(e) {
    e.preventDefault();
    if (
      localStorage.getItem("token") === verificationToken &&
      verificationToken !== ""
    ) {
      setSubmitted(true);
      const data = {
        email: formData.email,
        role: formData.role,
        verificationToken,
      };
      const response = await instance.post("/verify", data);
        
        dispatch(handleSignUp(response.data))
          // console.log(response.data, 'dataaaaaa')
        history.push("/");
      
    } else {
      console.log("Wrong Token!!");
    }
  }

  const classes = useStyles();
  return (
    <Container
      maxWidth="sm"
      className={classes.container}
      style={{ marginTop: "4rem" }}
    >
      <If condition={submitted}>
        <Then>
          <CustomStepper
            outSteps={steps}
            activeStep={steps.indexOf(steps[3]) + 1}
          />
        </Then>
        <Else>
          <CustomStepper
            outSteps={steps}
            activeStep={steps.indexOf(steps[3])}
          />
        </Else>
      </If>
      <form noValidate onSubmit={submitData}>
        <TextField
          label="Verification Code"
          name="verificationToken"
          required
          value={verificationToken}
          onChange={(e) => setVerificationToken(e.target.value)}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <Button
          fullWidth
          variant="contained"
          type="submit"
          className={classes.nextButton}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};
