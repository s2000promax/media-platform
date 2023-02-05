import React, { FC, ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';
import { Container } from '@mui/material';
import { Player } from '@/components/Player';

const MainLayout: FC<React.PropsWithChildren> = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <Container style={{ margin: '90px 0' }}>
        {children}
      </Container>
      <Player />
    </>
  );
};

export default MainLayout;
