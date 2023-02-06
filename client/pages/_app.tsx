import { AppProps } from 'next/app';
import { wrapper } from '@/store';
import React from 'react';
import { Provider } from 'react-redux';

/*
const WrappedApp: React.FC<AppProps> = ({Component, pageProps}) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(WrappedApp);
 */

const WrappedApp: React.FC<AppProps> = ({Component, pageProps}) => {

  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};

export default WrappedApp;
