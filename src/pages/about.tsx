import React from 'react';

import AboutBlog from '@/components/pages/about/AboutBlog';
import AboutBlogger from '@/components/pages/about/AboutBlogger';
import InPixels from '@/components/pages/about/InPixels';
import PageLayout from '@/layouts/PageLayout';
import Meta from '@/templates/Meta';

const About = () => {
  return (
    <PageLayout
      meta={
        <Meta
          title="About | Aima's Writing"
          description="Here's everything about me and my blog."
        />
      }
    >
      <AboutBlog />
      <InPixels />
      <AboutBlogger />
    </PageLayout>
  );
};

export default About;
