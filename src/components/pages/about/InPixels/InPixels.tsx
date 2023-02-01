import Image from 'next/image';

import Heading from '@/components/lib/Heading';
import Text from '@/components/lib/Text';

import inPixelsData from './data';

const InPixels = () => {
  return (
    <section className="w-full bg-aima-white">
      <div className="container grid justify-items-center gap-5 md:gap-10">
        <Heading variant="h3" className="text-center">
          AIMA’S CORNER - <span className="font-ephesis">In Pixels</span>
        </Heading>

        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-3 md:gap-5 lg:gap-10">
          {inPixelsData.map((item, index) => (
            <div
              key={index}
              className="group relative grid aspect-square w-full place-items-center p-10 md:p-5 lg:p-10"
            >
              <figure className="absolute top-0 left-0 z-0 h-full w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  layout="fill"
                  className="h-full w-full object-cover duration-500 group-hover:rotate-[3deg] group-hover:scale-110"
                  quality={100}
                />
              </figure>
              <div
                className="
                relative z-10 grid w-full bg-white py-5 text-center duration-500 after:absolute after:top-[50%]
                after:left-[50%] after:-z-10 after:h-full after:w-full after:translate-x-[-50%] after:translate-y-[-50%] after:border after:border-white after:duration-500 group-hover:w-[80%] group-hover:py-3 group-hover:after:h-[150%] group-hover:after:w-[120%]
              "
              >
                <Text
                  variant="subheading"
                  className="font-semibold md:text-base lg:text-xl"
                >
                  {item.title}
                </Text>

                <Text variant="subheading" className="font-ephesis">
                  {item.value}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InPixels;
