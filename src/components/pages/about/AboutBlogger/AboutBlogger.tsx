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

        <div className="flex w-full flex-col items-center justify-between gap-10 md:flex-row md:items-start">
          <div className="order-2 grid flex-1 gap-5 md:order-1">
            <Text className="max-w-[48ch] font-light leading-loose">
              TESTIMONY AIMALOHI OYEKPEN is the founder and Chief Executive
              Officer of Aima&apos;s Corner.
            </Text>
            <Text className="max-w-[48ch] font-light leading-loose">
              She is a 500-level Law Student at Obafemi Awolowo University where
              she serves as the Director of Litigations for Victus Chambers.
            </Text>
            <Text className="max-w-[48ch] font-light leading-loose">
              Aside from the wig, Aimalohi’s interests are expressed in singing,
              dancing, acting and humanitarian services. This passion led her to
              join Safe Haven for Counselling Initiative, a non-governmental
              organization where she currently wears the dual hat of an
              Ambassador and Social media manager.
            </Text>
            <Text className="max-w-[48ch] font-light leading-loose">
              Aimalohi is a Christian with an audacious vision for a
              revolutionary change in the entertainment industry. She is
              dedicated to this pursuit and her passion is revealed through her
              inspiring and knowledgeable creativity. She is committed to
              sharing the knowledge unravelled on her part as she finds her feet
              in life and ministry. Through her lifestyle blog, she births these
              desires.
            </Text>
            <Text className="max-w-[48ch] font-light leading-loose">
              Aimalohi epitomizes excellence and resourcefulness. She showcases
              this value in every sphere of her life–from her academic zeal to
              her commitment to faculty organizations, actively serving in
              church, her jobs, past and present. The track record of her
              previous websites solidifies this truth and reveals the importance
              she places on translating that excellence to her company.
            </Text>
            <Text className="max-w-[48ch] font-light leading-loose">
              Strap in and be prepared to watch Aima bring out the YOU in you
              through Aima’s Writing.
            </Text>
          </div>

          <div className="relative order-1 flex w-full flex-1 items-center justify-center md:order-2 md:items-start md:self-stretch">
            <figure
              className="duration-110 relative z-10 aspect-square w-full max-w-[300px] after:absolute after:top-0
        after:left-0 after:-z-10 after:h-full after:w-full after:border-8 after:border-white after:bg-gray-300 after:duration-500 md:sticky md:top-20 md:rotate-[3deg]
        md:group-hover:after:rotate-[5deg] lg:max-w-[350px]"
            >
              <div className="relative h-full w-full overflow-hidden border-8 border-white">
                <Image
                  src="/assets/images/about-blogger.jpeg"
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
