import React from 'react';
import { Card, Container, Grid, Step, StepLabel, Stepper } from '@mui/material';

interface IStepWrapperProps {
  activeStep: number;
}

const steps = ['Track info', 'Album cover', 'Track upload'];
export const StepWrapper: React.FC<IStepWrapperProps & React.PropsWithChildren> = ({ activeStep, children }) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) =>
          <Step
            key={index}
            completed={activeStep > index}
          >
            <StepLabel>{step}</StepLabel>
          </Step>
        )}
      </Stepper>
      <Grid container justifyContent="center" style={{ margin: '70px 0', height: '270px' }}>
        <Card style={{ width: '600px' }}>
          {children}
        </Card>
      </Grid>
    </Container>
  );
};
