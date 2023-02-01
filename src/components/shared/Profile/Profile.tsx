import { useAuth0 } from '@auth0/auth0-react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import React from 'react';

import Avatar from '@/components/lib/Avatar';
import Button from '@/components/lib/Button';
import Heading from '@/components/lib/Heading';
import Text from '@/components/lib/Text';
import { useToggle } from '@/hooks';

const Profile = () => {
  const { isAuthenticated, user, logout, isLoading } = useAuth0();
  const [open, toggleOpen] = useToggle(false);

  const handleLogout = () => {
    logout();
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    toggleOpen();
  };

  return (
    <>
      {isAuthenticated && (
        <button
          className={`fixed bottom-5 right-5 z-[900] h-12 w-12 overflow-hidden rounded-full shadow-lg duration-200 md:h-16 md:w-16`}
          onClick={toggleOpen}
        >
          <Avatar
            name={user?.name}
            image={user?.picture}
            className="h-12 w-12 md:h-16 md:w-16"
          />
        </button>
      )}

      {open && (
        <div
          className={`fixed left-0 top-0 z-[1000] grid h-full w-full place-items-center shadow-md`}
        >
          <div
            className="absolute top-0 left-0 z-0 h-full w-full bg-black/40"
            onClick={toggleOpen}
          />

          <motion.div
            className="z-10 flex max-h-[600px] w-[90%] max-w-[500px] flex-col items-center gap-5 rounded-xl bg-white p-5 text-center md:p-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.25 } }}
          >
            <div className="flex w-full justify-end">
              <button onClick={toggleOpen}>
                <Icon className="text-2xl" icon="carbon:close" />
              </button>
            </div>

            <Avatar
              name={user?.name}
              image={user?.picture}
              className="h-20 w-20"
            />

            <Heading>Your Account</Heading>

            <div className="w-full flex-1">
              <div className="w-full rounded-lg border p-5 text-left">
                <Text variant="subheading" className="font-medium capitalize">
                  {user?.name}
                </Text>
                <Text className="text-aima-black/50">{user?.email}</Text>
              </div>
            </div>

            <Button
              loading={isLoading}
              className="w-full"
              onClick={handleLogout}
            >
              Log Out
            </Button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Profile;
