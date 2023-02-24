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
          <div className="order-2 grid flex-1 gap-5 md:order-1">
            <Text className="max-w-[48ch] font-light leading-loose">
              Oyekpen Testimony Aimalohi is the founder and owner of Aima&apos;s
              Corner. She is a Christian with a vision for a revolutionary
              change in the entertainment industry. She is a budding lawyer who
              is passionate about humanitarian work. This passion led to her
              current position at Safe Haven for Counselling Initiative, a
              non-governmental organization that counsels and empowers.
            </Text>
            <Text className="max-w-[48ch] font-light leading-loose">
              Asides from the wig, her interests can be found in singing,
              dancing, and acting. She is a young lady dedicated to sharing the
              knowledge she unravels as she finds her feet in life and ministry.
              She runs this lifestyle blog to birth those desires.
            </Text>
            <Text className="max-w-[48ch] font-light leading-loose">
              Aima clamours for excellence and resourcefulness. She shows this
              in every sphere of her life from her academic zeal to belonging to
              faculty organizations, to actively serving in church, to her jobs,
              past and present. The track record of her previous websites
              solidifies this truth and reveals the importance she places on
              translating that excellence to her company.
            </Text>
            <Text className="max-w-[48ch] font-light leading-loose">
              Strap in and be prepared to watch Aima bring out the YOU in you
              through Aima’s Writing.{' '}
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
                  src="/assets/images/about-blogger.JPG"
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
