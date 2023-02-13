import '../styles/global.scss';
import 'react-loading-skeleton/dist/skeleton.css';

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Auth0Provider } from '@auth0/auth0-react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';

import AuthWrapper from '@/containers/AuthWrapper';
import AppContext from '@/contexts';
import { store } from '@/store';
import Meta from '@/templates/Meta';
import { toastOptions } from '@/utils/config/toaster.config';
import { grahpQLApiUri } from '@/utils/constants';

const httpLink = createHttpLink({
  uri: grahpQLApiUri,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <AppContext>
      <Meta
        title="Aima's Corner"
        description="Welcome to my lifestyle blog"
        images={[
          {
            url: '/assets/images/logo.png',
            alt: "Aima's Corner Logo",
          },
        ]}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />

      <ApolloProvider client={client}>
        <Auth0Provider
          domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN as string}
          clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID as string}
          cacheLocation={'localstorage'}
          authorizationParams={{
            redirect_uri: `${process.env.NEXT_PUBLIC_BASE_URL}/login`,
          }}
        >
          <Provider store={store}>
            <AuthWrapper>
              <Component {...pageProps} key={router.pathname} />
              <Toaster position="top-right" toastOptions={toastOptions} />
            </AuthWrapper>
          </Provider>
        </Auth0Provider>
      </ApolloProvider>
    </AppContext>
  );
};

export default MyApp;
