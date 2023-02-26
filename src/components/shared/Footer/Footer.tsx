import Link from 'next/link';
import React from 'react';

import Text from '@/components/lib/Text';

const Footer = () => {
  return (
    <footer className="w-full bg-aima-white font-light">
      <div className="container flex flex-col items-center justify-center gap-2 py-5 uppercase md:flex-row md:gap-5">
        <Text>&copy; 2022</Text>
        <Text>All Rights Reserved</Text>
        <Link href="/privacy-policy">
          <a>
            <Text>Privacy Policy</Text>
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
