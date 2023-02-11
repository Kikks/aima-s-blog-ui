import Blocks from 'editorjs-blocks-react-renderer';
import type { FC } from 'react';
import { useMemo } from 'react';

import styles from './PostBody.module.scss';
import type PostBodyProps from './PostBody.props';

const PostBody: FC<PostBodyProps> = ({ body }) => {
  const editorObject = useMemo(() => {
    return JSON.parse(body);
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
