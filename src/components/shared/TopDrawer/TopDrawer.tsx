import { useAuth0 } from '@auth0/auth0-react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

import { navLinks } from '@/utils/constants';

import type TopDrawerProps from './TopDrawer.props';

const TopDrawer: FC<TopDrawerProps> = ({ isOpen, onClose }) => {
  const [show, setShow] = useState(false);
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  useEffect(() => {
    setTimeout(() => {
      setShow(isOpen);
    }, 100);
  }, [isOpen]);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  return isOpen ? (
    <>
      <div
        className="fixed top-0 left-0 z-[1500] h-screen w-screen bg-black/20"
        onClick={handleClose}
      />

      <aside
        className={`fixed top-0 left-0 z-[2000] flex max-h-screen w-screen flex-col items-center gap-5 overflow-y-auto bg-white pt-10 pb-28 shadow-lg duration-500 ${
          show ? 'translate-y-0' : 'translate-y-[-150vh]'
        }`}
      >
        <button
          className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary-main"
          onClick={handleClose}
        >
          <Icon
            icon="ep:close"
            className="text-tertiary-main text-2xl text-white"
          />
        </button>

        {navLinks.map((link, index) => (
          <Link href={link.url} key={index}>
            <a className="text-center" onClick={handleClose}>
              {link.title}
            </a>
          </Link>
        ))}

        {!isAuthenticated && (
          <button className="text-center" onClick={() => loginWithRedirect()}>
            Log In
          </button>
        )}
      </aside>
    </>
  ) : (
    <></>
  );
};

export default TopDrawer;
