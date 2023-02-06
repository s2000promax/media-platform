import React from 'react';
import { ITrack } from '@/types/tracks';
import { Card, Grid, IconButton, Typography } from '@mui/material';
import styles from '../../../styles/trackItem.module.scss'
import { Delete, Pause, PlayArrow } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { useActions } from '@/hooks/useActions';

interface ITrackItemProps {
  track: ITrack;
  active?: boolean;
}

export const TrackItem: React.FC<ITrackItemProps> = ({ track, active = false }) => {
  const router = useRouter();

  const { playTrack, pauseTrack, setActive } = useActions();

    const play = (event: React.UIEvent) => {
      event.stopPropagation();
      setActive(track);
      playTrack();
  }

  return (
    <Card className={styles.track} onClick={() => router.push(`/tracks/${track._id}`)}>
      <IconButton onClick={play}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <img width={70} height={70} src={track.picture} />
      <Grid container direction="column" width="200px" margin="0 20px">
        <Typography>{track.name}</Typography>
        <Typography fontStyle="12px" color="gray">{track.artist}</Typography>
      </Grid>
      {!active && <Typography>02:42 / 03:22</Typography>}
      <IconButton style={{ marginLeft: 'auto' }} onClick={e => e.stopPropagation()}>
        <Delete />
      </IconButton>
    </Card>
  );
};
