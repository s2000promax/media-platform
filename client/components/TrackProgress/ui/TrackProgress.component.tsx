import React, { PropsWithChildren, useRef } from 'react';

interface TrackProgressComponentProps {
  left: number;
  right: number;
  onChange: (event: React.ChangeEvent) => void;
}

export const TrackProgressComponent: React.FC<TrackProgressComponentProps> = ({ left, right, onChange }) => {


  return (
    <div style={{ display: 'flex' }}>
      <input
        type="range"
        min={left}
        max={right}
        value={left}
      />
      <div>{left} / {right}</div>
    </div>
  );
};
