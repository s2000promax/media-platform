import React, { useState } from 'react';
import MainLayout from '@/layout/MainLayout';
import { StepWrapper } from '@/components/Upload';
import { Button, Grid } from '@mui/material';
import { FormInfo } from '@/components/FormInfo';
import { FileUpload } from '@/components/FileUpload';

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep(prevState => prevState + 1);
    }
  }

  const back = () => {
    setActiveStep(prevState => prevState - 1);
  }

  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 &&
          <FormInfo />
        }
        {activeStep === 1 &&
          <FileUpload setFile={setPicture} accept="image/*">
            <Button>Image upload</Button>
          </FileUpload>
        }
        {activeStep === 2 &&
          <FileUpload setFile={setAudio} accept="audio/*">
            <Button>Audio upload</Button>
          </FileUpload>
        }
      </StepWrapper>
      <Grid container justifyContent="space-between">
        <Button disabled={activeStep === 0} onClick={back}>Back</Button>
        <Button onClick={next}>Next</Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;
