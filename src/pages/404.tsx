import { useRouter } from 'next/router';

import Button from '@/components/lib/Button';
import Heading from '@/components/lib/Heading';
import Text from '@/components/lib/Text';
import Meta from '@/templates/Meta';

const NotFound = () => {
  const router = useRouter();
  return (
    <>
      <Meta title="404 - Not found" description="Oops! Page not found. " />

      <section className="grid h-screen w-screen place-content-center place-items-center gap-10 p-10">
        <div className="grid w-full place-items-center text-center">
          <Heading variant="h1">404</Heading>
          <Heading>Oops! Page not found</Heading>
        </div>

        <div className="grid w-full place-items-center">
          <Text className="text-center md:max-w-[50ch]">
            The page you are looking for might have been removed, had its name
            changed or is temporarily unvailable.
          </Text>
        </div>

        <Button
          className="w-full max-w-[250px] md:mx-auto"
          size="medium"
          onClick={() => router.push('/')}
        >
          Go back home
        </Button>
      </section>
    </>
  );
};

export default NotFound;
