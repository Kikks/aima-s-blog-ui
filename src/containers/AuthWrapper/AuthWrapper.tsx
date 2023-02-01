import { useAuth0 } from '@auth0/auth0-react';
import type { FC, PropsWithChildren } from 'react';
import { useEffect } from 'react';

const AuthWrapper: FC<PropsWithChildren> = ({ children }) => {
  const { isAuthenticated, getIdTokenClaims } = useAuth0();

  const getAndStoreToken = async () => {
    const token = await getIdTokenClaims();

    if (token) localStorage.setItem('token', String(token?.__raw));
  };

  useEffect(() => {
    if (isAuthenticated) {
      getAndStoreToken();
    }
  }, [isAuthenticated]);

  return <>{children}</>;
};

export default AuthWrapper;
