import Image from 'next/image';

import Heading from '@/components/lib/Heading';
import Text from '@/components/lib/Text';

const AboutBlogger = () => {
  return (
    <section className="w-full bg-primary-bg">
      <div className="group container grid justify-items-center gap-5 py-10 md:gap-10 md:py-20">
        <Heading variant="h3" className="text-center">
          ABOUT - <span className="font-ephesis">The Blogger</span>
        </Heading>

        <div className="flex w-full flex-col items-center justify-between gap-10 md:flex-row">
          <div className="order-2 flex-1 md:order-1">
            <Text className="max-w-[48ch] font-light leading-loose">
              My name is{' '}
              <span className="font-semibold">Oyekpen Testimony Aimalohi</span>.
              There was once a little corner in my head where inquisity
              conceived. I nurtured that inquisity all through high school and
              until my first year in the university. At the end of my second
              year, it was my due date... &quot;and so the birth of Aima&apos;s
              Corner.&quot; I am primarily a lot of things. I mean where do I
              even start. I am an athlete, a model, an influencer, a tutor,
              sike, I’m none of those things. The indisputable truth however
              remains that I am these 5 emojis: I am a Christian, a dancer, a
              girl with a nice voice she should use more, a writer and a
              potential actress. Welcome to my lifestyle blog with premium
              content, insightful articles and of course, a place where you can
              get to be you I assure you this blog will definitely be worth your
              time.
            </Text>
          </div>

          <div className="order-1 flex w-full flex-1 items-center justify-center md:order-2">
            <figure
              className="duration-110 relative z-10 aspect-square w-full max-w-[300px] after:absolute after:top-0
        after:left-0 after:-z-10 after:h-full after:w-full after:border-8 after:border-white after:bg-gray-300 after:duration-500 md:rotate-[3deg] md:group-hover:after:rotate-[5deg] lg:max-w-[350px]
        "
            >
              <div className="relative h-full w-full overflow-hidden border-8 border-white">
                <Image
                  src="/assets/images/about-image-2.png"
                  alt=""
                  layout="fill"
                  className="h-full w-full object-cover duration-500 group-hover:scale-110"
                  quality={100}
                />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBlogger;
