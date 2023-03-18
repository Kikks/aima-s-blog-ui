import type { FC, PropsWithChildren } from 'react';

import { LikesAndCommentsProvider } from './likesAndComments';
import { UserProvider } from './user';

const AppContext: FC<PropsWithChildren> = ({ children }) => {
  return (
    <UserProvider>
      <LikesAndCommentsProvider>{children}</LikesAndCommentsProvider>
    </UserProvider>
  );
};

export default AppContext;
