import '../styles/global.scss';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';

import { store } from '@/store';
import { toastOptions } from '@/utils/config/toaster.config';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <Provider store={store}>
      <Component {...pageProps} key={router.pathname} />
      <Toaster position="top-right" toastOptions={toastOptions} />
    </Provider>
  );
};

export default MyApp;
