import Blocks from 'editorjs-blocks-react-renderer';
import type { FC } from 'react';
import { useMemo } from 'react';

import { optimiseCloudinaryImage } from '@/utils/cloudinary';

import styles from './PostBody.module.scss';
import type PostBodyProps from './PostBody.props';

const BODY_IMAGE_WIDTH = 1280;

const PostBody: FC<PostBodyProps> = ({ body }) => {
  const editorObject = useMemo(() => {
    const data = JSON.parse(body);

    // Body images render in a 640px column; 1280px covers 2x screens.
    (data?.blocks || []).forEach((block: any) => {
      if (block?.type !== 'image') return;

      if (block?.data?.file?.url) {
        block.data.file.url = optimiseCloudinaryImage(
          block.data.file.url,
          BODY_IMAGE_WIDTH
        );
      }
      if (block?.data?.url) {
        block.data.url = optimiseCloudinaryImage(
          block.data.url,
          BODY_IMAGE_WIDTH
        );
      }
    });

    return data;
  }, [body]);

  return (
    <section className="mx-auto w-full max-w-[900px] px-5">
      <div className={styles.body}>
        <Blocks
          data={editorObject}
          config={{
            embed: {
              className: 'border-0',
            },
            image: {
              className: 'w-full mx-auto max-w-screen-sm',
              actionsClassNames: {
                stretched: 'w-full h-80 object-cover',
                withBorder: 'border border-2',
                withBackground: 'p-2',
              },
            },
            paragraph: {
              actionsClassNames: {
                alignment: 'text-{alignment}',
              },
            },
            quote: {
              className: 'py-3 px-5 italic font-serif',
            },
            table: {
              className: 'table-auto',
            },
          }}
        />
      </div>
    </section>
  );
};

export default PostBody;
