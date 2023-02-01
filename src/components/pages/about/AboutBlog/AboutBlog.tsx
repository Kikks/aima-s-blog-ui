import Image from 'next/image';

import Heading from '@/components/lib/Heading';

const AboutBlog = () => {
  return (
    <section className="w-full bg-primary-bg">
      <div className="group container grid justify-items-center gap-5 py-10 md:gap-10 md:py-20">
        <Heading variant="h3" className="text-center">
          ABOUT - <span className="font-ephesis">The Blog</span>
        </Heading>

        <div className="flex w-full flex-col items-center justify-between gap-10 md:flex-row">
          <div className="flex-1">
            <Heading
              variant="h3"
              className="font-light md:max-w-[30ch] lg:text-[1.75rem]"
            >
              <span className="font-semibold">Aima’s Corner</span> is sit cursus
              id massa purus enim, mauris ac arcu quisque. Morbi non cras vitae
              iaculis sed pellentesque mauris. Sodales at consectetur sagittis
              non ut quis id facilisis metus. Elit dictumst imperdiet odio ut
              urna vivamus vesti.
            </Heading>
          </div>

          <div className="flex w-full flex-1 items-center justify-center">
            <figure
              className="duration-110 relative z-10 aspect-square w-full max-w-[300px] after:absolute after:top-0
        after:left-0 after:-z-10 after:h-full after:w-full after:border-8 after:border-white after:bg-gray-300 after:duration-500 md:rotate-[3deg] md:group-hover:after:rotate-[5deg] lg:max-w-[350px]
        "
            >
              <div className="relative h-full w-full overflow-hidden border-8 border-white">
                <Image
                  src="/assets/images/about-image-1.png"
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

export default AboutBlog;
