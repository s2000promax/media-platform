import React from 'react';
import MainLayout from '@/layout/MainLayout';
import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { ITrack } from '@/types/tracks';
import { TrackList } from '@/components/TrackList';

const TracksPages = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    { _id: '1', name: 'Track 1', artist: 'Artist 1', text: 'Some text', listens: 5, audio: 'http://localhost:5000/audio/123.mp3', picture: 'http://localhost:5000/image/123.png', comments: [] },
    { _id: '2', name: 'Track 2', artist: 'Artist 2', text: 'Some text', listens: 5, audio: 'http://localhost:5000/audio/456.mp3', picture: 'http://localhost:5000/image/456.png', comments: [] },
    { _id: '3', name: 'Track 3', artist: 'Artist 3', text: 'Some text', listens: 5, audio: 'http://localhost:5000/audio/789.mp3', picture: 'http://localhost:5000/image/789.png', comments: [] },
  ];

  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Tracks</h1>
              <Button onClick={() => router.push('/tracks/create')}>Upload</Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default TracksPages;

