import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import Text from '@/components/lib/Text';
import { useMediaQuery, useScrollPosition } from '@/hooks';
import { navLinks } from '@/utils/constants';

import type NavigationProps from './Navigation.props';

const Navigation: FC<NavigationProps> = ({ onMenuClicked }) => {
  const { pathname } = useRouter();
  const scrollPosition = useScrollPosition();
  const mediumScreenUp = useMediaQuery('(min-width: 768px)');

  return (
    <nav className="sticky top-0 left-0 flex w-full flex-col items-center gap-5 bg-white p-5 shadow-lg shadow-gray-100 md:static md:gap-7 md:p-10">
      <Link href="/">
        <figure
          className="relative h-10 w-24 duration-200 lg:h-16 lg:w-36"
          style={{
            marginTop: mediumScreenUp
              ? 0
              : `${`${
                  scrollPosition > 200 ? -60 : (scrollPosition / 200) * -60
                }px`}`,
          }}
        >
          <Image src="/assets/icons/logo.svg" layout="fill" alt="Logo" />
        </figure>
      </Link>

      <button
        className="flex items-center gap-2 text-aima-black md:hidden"
        onClick={onMenuClicked}
      >
        <Icon icon="ic:outline-menu" className="text-2xl " />
        <Text className="font-semibold" variant="body2">
          MENU
        </Text>
      </button>

      <div className="hidden items-center gap-10 md:flex">
        {navLinks.map((link, index) => (
          <Link key={index} href={link.url} passHref>
            <a
              className={`text-sm uppercase hover:text-primary-main ${
                pathname.startsWith(link.url)
                  ? 'font-medium text-primary-main'
                  : 'font-light'
              }`}
            >
              {link.title}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
