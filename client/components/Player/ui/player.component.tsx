import React, { useEffect } from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import styles from '../style/player.module.scss'
import { ITrack } from '@/types/tracks';
import { TrackProgress } from '@/components/TrackProgress';
import { useTypeSelector } from '@/hooks/useTypeSelector';
import { useActions } from '@/hooks/useActions';

let audio: any | undefined;

export const PlayerComponent: React.FC = () => {
  /*
  const track: ITrack = {
    _id: '1',
    name: 'Track 1',
    artist: 'Artist 1',
    text: 'Some text',
    listens: 5,
    audio: 'http://localhost:5000/audio/123.mp3',
    picture: 'http://localhost:5000/image/123.png',
    comments: []
  }; */
  const { active, volume, pause, currentTime, duration } = useTypeSelector(state => state.player)
  const { playTrack, pauseTrack, setVolume, setCurrentTime, setDuration, setActive } = useActions();

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      play();
    }
  }, [active]);

  const setAudio = () => {
    if (active) {
      audio.src = active.audio;
      audio.volume = volume / 100;

      audio.onloadedmetadata = () => {
        setDuration(Math.ceil(audio.duration));
      }

      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio.currentTime));
      }
    }
  }

  const play = () => {
    if (pause) {
      playTrack();
      audio.play();
    } else {
      pauseTrack();
      audio.pause();
    }
  }

  const changeVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(event.target.value) / 100;
    setVolume(Number(event.target.value));
  }

  const changeCurrentTime = (event: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(event.target.value);
    setCurrentTime(Number(event.target.value));
  }

  if (!active) {
    return null;
  }

  return (
    <div className={styles.player}>
      <IconButton onClick={play}>
        {!pause ? <Pause/> : <PlayArrow/>}
      </IconButton>
      <Grid container direction="column" width="200px" margin="20px 0">
        <Typography>{active?.name}</Typography>
        <Typography style={{ fontSize: '12px', color: 'gray' }}>{active?.artist}</Typography>
      </Grid>
      <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime}/>
      <VolumeUp style={{ marginLeft: 'auto' }}/>
      <TrackProgress left={volume} right={100} onChange={changeVolume}/>
    </div>
  );
};
