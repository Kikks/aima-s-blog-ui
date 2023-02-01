import type { FC, PropsWithChildren } from 'react';

import Footer from '@/components/shared/Footer';
import Navigation from '@/components/shared/Navigation';
import Profile from '@/components/shared/Profile';
import Social from '@/components/shared/Social';
import Subscribe from '@/components/shared/Subscribe';
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

      <div className="relative min-h-screen w-full">
        <Navigation onMenuClicked={toggleTopDrawerIsOpen} />
        <TopDrawer isOpen={topDrawerIsOpen} onClose={toggleTopDrawerIsOpen} />
        <main className="grid w-full gap-32 py-5 md:gap-40 md:py-10">
          {children}
        </main>
        <Subscribe />
        <Social />
        <Footer />
        <Profile />
      </div>
    </>
  );
};

export default PageLayout;
