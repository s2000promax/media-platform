import React, { useState } from 'react';
import MainLayout from '@/layout/MainLayout';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { useInput } from '@/hooks/useInput';
import { ITrack } from '@/types/tracks';

const TrackPage = ({ serverTrack }: any) => {
  const [track, setTrack] = useState<ITrack>(serverTrack);

  const router = useRouter();
  const userName = useInput('');
  const userComment = useInput('');

  const addComment = async () => {
    try {
      const response = await axios.post('http://localhost:5000/tracks/comment/', {
        username: userName.value,
        text: userComment.value,
        trackId: track._id,
      });
      setTrack({...track, comments: [...track.comments, response.data]});
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <MainLayout
      title={'Media platform - ' + track.name + ' - ' + track.artist}
      keywords={track.artist + ', ' + track.name}
    >
      <Button
        variant="outlined"
        onClick={() => router.push('/tracks')}
        style={{
          fontSize: '32px'
        }}
      >
        Tracks list
      </Button>
      <Grid container margin="20px 0">
        <img src={'http://localhost:5000/' + track.picture} width={200} height={200} />
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
          {...userName}
          label="Your name"
          fullWidth
        />
        <TextField
          {...userComment}
          label="Comment"
          fullWidth
          multiline
          rows={4}
          style={{ marginTop: '10px' }}
        />
        <Button onClick={addComment}>Send comment</Button>
      </Grid>
      <div>
        {track.comments.map((comment: { username: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) =>
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await axios.get('http://localhost:5000/tracks/' + params?.id);

  return {
    props: {
      serverTrack: response.data,
    }
  }
}
