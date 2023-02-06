import React, { PropsWithChildren, useRef } from 'react';

interface TrackProgressComponentProps {
  left: number;
  right: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TrackProgressComponent: React.FC<TrackProgressComponentProps> = ({ left, right, onChange }) => {


  return (
    <div style={{ display: 'flex' }}>
      <input
        type="range"
        min={0}
        max={right}
        value={left}
        onChange={onChange}
      />
      <div style={{ marginLeft: '5px' }}>{left} / {right}</div>
    </div>
  );
};
