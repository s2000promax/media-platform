import React from 'react';
import { ITrack } from '@/types/tracks';
import { Grid, Box } from '@mui/material';
import { TrackItem } from './trackItem';

interface ITrackListProps {
  tracks: ITrack[];
}

export const TrackListComponent: React.FC<ITrackListProps> = ({ tracks }) => {
  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks.map(track =>
          <TrackItem
            key={track._id}
            track={track}
          />
        )}
      </Box>

    </Grid>
  );
};
