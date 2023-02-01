import { useMutation } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Text from '@/components/lib/Text';
import { LOGIN } from '@/graphql/mutations/user.mutations';

const Login = () => {
  const router = useRouter();
  const [errorOccured, setErrorOccured] = useState(false);
  const { logout } = useAuth0();

  const [mutate] = useMutation(LOGIN, {
    onCompleted(response) {
      if (response?.login) {
        localStorage.setItem('user', JSON.stringify(response?.login));
      }

      router.push('/');
    },
    onError() {
      setErrorOccured(true);
      logout();
    },
  });

  useEffect(() => {
    setTimeout(() => {
      mutate();
    }, 2000);
  }, []);

  return (
    <main className="grid min-h-screen w-full place-items-center">
      <div className="container grid place-items-center gap-3">
        {errorOccured ? (
          <>
            <Icon
              icon="tabler:face-id-error"
              className="text-[5rem] text-primary-main"
            />

            <Text variant="subheading" className="text-center">
              A problem occured while trying to login. Please try again later.
            </Text>
          </>
        ) : (
          <>
            <motion.figure
              className="relative h-32 w-32 duration-200"
              animate={{
                scale: [0.7, 1, 0.7],
                transition: { repeat: Infinity, duration: 3 },
              }}
            >
              <Image
                src="/android-chrome-192x192.png"
                layout="fill"
                alt="Logo"
              />
            </motion.figure>

            <Text variant="subheading" className="text-center">
              Logging in...
            </Text>
          </>
        )}
      </div>
    </main>
  );
};

export default Login;
