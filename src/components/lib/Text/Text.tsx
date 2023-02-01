import type { FC, PropsWithChildren } from 'react';

import match from '../../../utils/match';
import styles from './Text.module.scss';
import type TextProps from './Text.props';

const Text: FC<PropsWithChildren<TextProps>> = ({
  children,
  variant = 'body1',
  className,
}) => {
  const textClassName = match(variant, {
    body1: styles.body1,
    body2: styles.body2,
    subheading: styles.subheading,
    caption: styles.caption,
    default: '',
  });

  return <p className={`${textClassName} ${className || ''}`}>{children}</p>;
};

export default Text;
