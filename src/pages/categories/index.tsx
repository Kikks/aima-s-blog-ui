import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import request from 'graphql-request';
import type { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import Heading from '@/components/lib/Heading';
import Category from '@/components/shared/Category';
import type { GetCategoriesQuery } from '@/graphql/__generated__/graphql';
import { GET_CATEGORIES } from '@/graphql/queries/category.queries';
import PageLayout from '@/layouts/PageLayout';
import Meta from '@/templates/Meta';
import { grahpQLApiUri } from '@/utils/constants';

type CategoryPageProps = {
  categoryResponse: GetCategoriesQuery | null;
};

export const getServerSideProps: GetServerSideProps<
  CategoryPageProps
> = async () => {
  try {
    const categoryResponse = await request(grahpQLApiUri, GET_CATEGORIES, {
      limit: 50,
      page: 1,
    });

    return {
      props: {
        categoryResponse,
      },
    };
  } catch (error) {
    return {
      props: {
        categoryResponse: null,
      },
    };
  }
};

const Categories: NextPage<CategoryPageProps> = ({ categoryResponse }) => {
  const categories = categoryResponse?.getCategories.data || [];

  return (
    <PageLayout
      meta={
        <Meta
          title="Categories | Aima's Writing"
          description="A lsit of all catgegories in this blog."
        />
      }
    >
      <section className="-mt-5 w-full bg-primary-bg md:-mt-10">
        <div className="container grid justify-items-center gap-5 py-10 md:gap-7 md:py-20">
          <motion.div
            whileInView={{ opacity: 1, translateX: 0 }}
            initial={{ opacity: 0, translateX: 50 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.5, once: true }}
          >
            <Heading className="uppercase" decorated variant="h3">
              Categories
            </Heading>
          </motion.div>

          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
            {categories.map((category, index) => (
              <motion.div
                className="col-span-1"
                key={index}
                whileInView={{ opacity: 1, translateY: 0 }}
                initial={{ opacity: 0, translateY: 50 }}
                transition={{ duration: 0.5 }}
                viewport={{ amount: 0.5, once: true }}
              >
                <Category {...category} />
              </motion.div>
            ))}
          </div>

          <Link passHref href="/posts">
            <a className="mt-5 flex gap-3 justify-self-end text-primary-main">
              Browse all articles{' '}
              <Icon icon="ic:outline-arrow-right-alt" className="text-2xl" />
            </a>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default Categories;
