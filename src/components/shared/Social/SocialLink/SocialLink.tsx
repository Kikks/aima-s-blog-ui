import { Icon } from '@iconify/react';
import type { FC } from 'react';
import React from 'react';

import type SocialLinkProps from './SocialLink.props';

const SocialLink: FC<SocialLinkProps> = ({ icon, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group grid h-10 w-10 place-items-center rounded-full border border-secondary-main bg-transparent duration-200 hover:bg-secondary-main lg:h-14 lg:w-14"
    >
      <Icon
        icon={icon}
        className="text-3xl text-secondary-main duration-200 group-hover:text-white"
      />
    </a>
  );
};

export default SocialLink;
