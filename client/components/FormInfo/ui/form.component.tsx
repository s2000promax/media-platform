import React from 'react';
import { Grid, TextField } from '@mui/material';
import { useInput } from '@/hooks/useInput';

export const FormComponent = () => {

  return (
    <Grid container direction="column" style={{ padding: '20px' }}>
      <TextField
        label="Track name"
        style={{ marginTop: '10px' }}
      />
      <TextField
        label="Author name"
        style={{ marginTop: '10px' }}
      />
      <TextField
        label="Track text"
        multiline
        rows={3}
        style={{ marginTop: '10px' }}
      />

    </Grid>
  );
};
