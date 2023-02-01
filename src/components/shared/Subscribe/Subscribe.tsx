import React from 'react';

import Button from '@/components/lib/Button';
import Heading from '@/components/lib/Heading';
import Input from '@/components/lib/Input';
import Text from '@/components/lib/Text';

const Subscribe = () => {
  return (
    <section className="w-full">
      <div className="container grid justify-center justify-items-center gap-5 py-28 text-center md:gap-7 md:py-40">
        <Heading className="max-w-[50ch]">
          Stay motivated with our weekly post in your inbox{' '}
        </Heading>

        <Text>Subscribe to the Aima’s Corner newsletter</Text>

        <form className="flex w-[90%] max-w-[500px] flex-wrap justify-center gap-3 md:gap-5">
          <div className="flex-1">
            <Input type="email" placeholder="Enter your email address" />
          </div>
          <Button variant="solid" type="submit" className="">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
