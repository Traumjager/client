import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  container:{
    backgroundColor:'#1f2024',
    
  },

  icons:{}
}));




export default function CustomStepper({ activeStep,outSteps}) {
  const classes = useStyles();
  const steps = getSteps();
  function getSteps() {
    return outSteps.map((step) => step.id);
  }

  return (
    <div className={classes.container}>
      <Stepper className={classes.container} activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
