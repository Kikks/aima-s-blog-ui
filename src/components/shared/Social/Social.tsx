import React from 'react';

import Heading from '@/components/lib/Heading';
import Text from '@/components/lib/Text';

import SocialLink from './SocialLink/SocialLink';

const Social = () => {
  return (
    <section className="w-full bg-secondary-light">
      <div className="mx-auto flex max-w-[900px] flex-col items-center justify-between gap-10 px-5 py-28 text-center md:flex-row  md:gap-7 md:px-10 md:text-left">
        <div className="grid gap-3">
          <Heading>Connect with us</Heading>
          <Text className="font-ephesis text-2xl" variant="subheading">
            Let’s get social
          </Text>
        </div>

        <div className="flex items-center gap-5">
          <SocialLink
            icon="ri:twitter-fill"
            url="https://twitter.com/ai_ma_lohi"
          />

          <SocialLink
            icon="ion:logo-instagram"
            url="https://www.instagram.com/aimascorner/"
          />

          <SocialLink
            icon="mdi:email"
            url="mailto:mailto:therealaimascorner@gmail.com"
          />

          <SocialLink
            icon="material-symbols:call-sharp"
            url="tel:+234 704 161 8825"
          />
        </div>
      </div>
    </section>
  );
};

export default Social;
