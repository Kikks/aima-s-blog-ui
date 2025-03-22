import type { NormalizedCacheObject } from '@apollo/client';
import {
  ApolloClient,
  ApolloProvider as BaseApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { grahpQLApiUri } from '@/utils/constants';

type GetTokenFn = () => Promise<string | null>;

interface ApolloContextType {
  client: ApolloClient<NormalizedCacheObject>;
  resetClient: () => void;
}

const ApolloContext = createContext<ApolloContextType | null>(null);

function createApolloClient(getToken: GetTokenFn) {
  const httpLink = createHttpLink({
    uri: grahpQLApiUri,
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );
      });
    }
    if (networkError) {
      console.error(`[Network error]: ${networkError}`);
    }
  });

  const authLink = setContext(async (_, { headers }) => {
    const token = await getToken();
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  return new ApolloClient({
    link: errorLink.concat(authLink).concat(httpLink),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
  });
}

export function ApolloProvider({
  children,
  getToken,
}: {
  children: React.ReactNode;
  getToken: GetTokenFn;
}) {
  const [client, setClient] =
    useState<ApolloClient<NormalizedCacheObject> | null>(null);

  const resetClient = useCallback(() => {
    if (client) {
      // Clear cache
      client.clearStore();
      // Create new client
      setClient(createApolloClient(getToken));
    }
  }, [client, getToken]);

  // Initialize client
  useEffect(() => {
    setClient(createApolloClient(getToken));
  }, [getToken]);

  const contextValue = useMemo(
    () => ({
      client: client!,
      resetClient,
    }),
    [client, resetClient]
  );

  if (!client) return null; // or loading spinner

  return (
    <ApolloContext.Provider value={contextValue}>
      <BaseApolloProvider client={client}>{children}</BaseApolloProvider>
    </ApolloContext.Provider>
  );
}

export function useApollo() {
  const context = useContext(ApolloContext);
  if (!context) {
    throw new Error('useApollo must be used within an ApolloProvider');
  }
  return context;
}
