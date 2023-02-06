import React, { FC, ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';
import { Container } from '@mui/material';
import { Player } from '@/components/Player';
import Head from 'next/head';

interface MainLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
  children?: any;
}

const MainLayout
  = ({
       children,
       title,
       description,
       keywords,
     }: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || 'Media platform'}</title>
        <meta name="description" content={'Media platform. For every one! ' + description} />
        <meta name="robots" content={'index, follow'} />
        <meta name="keywords" content={keywords || 'Music, tracks, artists'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar/>
      <Container style={{ margin: '90px 0' }}>
        {children}
      </Container>
      <Player/>
    </>
  );
};

export default MainLayout;
