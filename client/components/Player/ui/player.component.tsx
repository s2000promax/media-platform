import React from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import styles from '../style/player.module.scss'
import { ITrack } from '@/types/tracks';
import { TrackProgress } from '@/components/TrackProgress';
import { useTypeSelector } from '@/hooks/useTypeSelector';
import { useActions } from '@/hooks/useActions';

export const PlayerComponent: React.FC = () => {
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
  const { active, volume, pause, currentTime, duration } = useTypeSelector(state => state.player)
  const { playTrack, pauseTrack } = useActions();

  const play = () => {
    if (pause) {
      playTrack();
    } else {
      pauseTrack();
    }
  }

  return (
    <div className={styles.player}>
      <IconButton onClick={play}>
        {!pause ? <Pause/> : <PlayArrow/>}
      </IconButton>
      <Grid container direction="column" width="200px" margin="20px 0">
        <Typography>{track.name}</Typography>
        <Typography style={{ fontSize: '12px', color: 'gray' }}>{track.artist}</Typography>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => ({})}/>
      <VolumeUp style={{ marginLeft: 'auto' }}/>
      <TrackProgress left={0} right={100} onChange={() => ({})}/>
    </div>
  );
};
