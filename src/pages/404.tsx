import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/lib/Button';
import Heading from '@/components/lib/Heading';
import Text from '@/components/lib/Text';
import Meta from '@/templates/Meta';

import logo from '../../public/assets/images/logo-mobile.png';
import HomeBg from '../layouts/Home/index';

const NotFound = () => {
  return (
    <>
      <Meta title="404 - Not found" description="Oops! Page not found. " />
      <HomeBg>
        <section className="absolute top-1/2 left-1/2 mx-auto w-[90%] -translate-y-1/2 -translate-x-1/2 text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
          <div className="pb-8 text-center">
            <Image src={logo} alt="logo" priority />
          </div>

          <div className="mx-auto grid w-full place-items-center text-center">
            <Heading variant="h1" className="mt-2 text-[2.125em] font-semibold">
              404
            </Heading>

            <Heading>Oops! Page not found</Heading>
          </div>

          <div className="grid w-full place-items-center">
            <Text className="my-14 max-w-[50ch] text-center font-medium">
              The page you are looking for might have been removed, had its name
              changed or is temporarily unvailable.
            </Text>
          </div>

          <Link href="/login">
            <Button
              className="my-4 block w-full md:mx-auto md:w-[60%] lg:w-[50%] xl:w-[30%]"
              size="medium"
            >
              Go back home
            </Button>
          </Link>
        </section>
      </HomeBg>
    </>
  );
};

export default NotFound;
