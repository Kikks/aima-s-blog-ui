import React from 'react';

import PageLayout from '@/layouts/PageLayout';
import Meta from '@/templates/Meta';

const Index = () => {
  return (
    <PageLayout
      meta={<Meta title="Aima's Corner | My Lifestyle Blog" description="" />}
    >
      <div>Wagwan</div>

      <div className="h-[2000px] w-full"></div>
    </PageLayout>
  );
};

export default Index;
