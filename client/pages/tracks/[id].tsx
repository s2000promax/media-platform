import React from 'react';
import { ITrack } from '@/types/tracks';
import MainLayout from '@/layout/MainLayout';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const TrackPage = () => {
  const track: ITrack = {
    _id: '1',
    name: 'Track 1',
    artist: 'Artist 1',
    text: 'Some text',
    listens: 5,
    audio: 'http://localhost:5000/audio/123.mp3',
    picture: 'http://localhost:5000/image/123.png',
    comments: []
  };
  const router = useRouter();

  return (
    <MainLayout>
      <Button
        variant="outlined"
        onClick={() => router.push('/tracks')}
        style={{
          fontSize: '32px'
        }}
      >
        to Tracks
      </Button>
      <Grid container margin="20px 0">
        <img src={track.picture} width={200} height={200} />
        <Typography marginLeft="30px">
          <h1>Track - {track.name}</h1>
          <h1>Artist - {track.artist}</h1>
          <h1>Listened - {track.listens}</h1>
        </Typography>
      </Grid>
      <h1>Tracks text</h1>
      <p>{track.text}</p>
      <h1>Comments</h1>
      <Grid container>
        <TextField
          label="Your name"
          fullWidth
        />
        <TextField
          label="Comment"
          fullWidth
          multiline
          rows={4}
          style={{ marginTop: '10px' }}
        />
      </Grid>
      <div>
        {track.comments.map(comment =>
          <div>
            <div>Author - {comment.username}</div>
            <div>Comment - {comment.text}</div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default TrackPage;
