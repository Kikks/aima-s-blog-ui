import type { FC, PropsWithChildren } from 'react';

import Navigation from '@/components/shared/Navigation';
import TopDrawer from '@/components/shared/TopDrawer';
import { useToggle } from '@/hooks';

import type PageLayoutProps from './PageLayout.props';

const PageLayout: FC<PropsWithChildren<PageLayoutProps>> = ({
  meta,
  children,
}) => {
  const [topDrawerIsOpen, toggleTopDrawerIsOpen] = useToggle(false);

  return (
    <>
      {meta}

      <main className="relative min-h-screen w-full">
        <Navigation onMenuClicked={toggleTopDrawerIsOpen} />
        <TopDrawer isOpen={topDrawerIsOpen} onClose={toggleTopDrawerIsOpen} />
        {children}
      </main>
    </>
  );
};

export default PageLayout;
