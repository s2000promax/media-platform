import React, { useState } from 'react';
import MainLayout from '@/layout/MainLayout';
import { StepWrapper } from '@/components/Upload';
import { Button, Grid, TextField } from '@mui/material';
import { FileUpload } from '@/components/FileUpload';
import { useInput } from '@/hooks/useInput';
import axios from 'axios';
import { useRouter } from 'next/router';

const Create = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);

  const [picture, setPicture] = useState<Blob | null>(null);
  const [audio, setAudio] = useState<Blob | null>(null);

  const name = useInput('');
  const artist = useInput('');
  const text = useInput('');

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep(prevState => prevState + 1);
    } else {

      const formData = new FormData()
      formData.append('name', name.value)
      formData.append('text', text.value)
      formData.append('artist', artist.value)
      if (picture) {
        formData.append('picture', picture);
      }
      if (audio) {
        formData.append('audio', audio);
      }

      axios.post('http://localhost:5000/tracks/', formData)
        .then(res => router.push('/tracks'))
        .catch(e => console.log(e));
    }
  }

  const back = () => {
    setActiveStep(prevState => prevState - 1);
  }

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 &&
          <Grid container direction="column" style={{ padding: '20px' }}>
            <TextField
              {...name}
              label="Track name"
              style={{ marginTop: '10px' }}
            />
            <TextField
              {...artist}
              label="Author name"
              style={{ marginTop: '10px' }}
            />
            <TextField
              {...text}
              label="Track text"
              multiline
              rows={3}
              style={{ marginTop: '10px' }}
            />
          </Grid>
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
