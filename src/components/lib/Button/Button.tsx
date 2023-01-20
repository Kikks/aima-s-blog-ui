import type { FC } from 'react';

import match from '../../../utils/match';
import Loader from '../Loader';
import styles from './Button.module.scss';
import type ButtonProps from './Button.props';

const Button: FC<ButtonProps> = ({
  variant = 'solid',
  size = 'small',
  children,
  disabled,
  className,
  loading,
  ...rest
}) => {
  const buttonSize = match(size, {
    small: styles.size__small,
    medium: styles.size__medium,
    large: styles.size__large,
    default: '',
  });

  const buttonVariant = match(variant, {
    solid: styles.variant__solid,
    outline: styles.variant__outline,
    border: styles.variant__border,
    white: styles.variant__white,
    default: '',
  });

  return (
    <button
      disabled={loading || disabled}
      className={`${styles.base} ${buttonSize} ${buttonVariant} ${
        loading ? 'cursor-wait' : ''
      } ${className || ''}`}
      {...rest}
    >
      {loading ? <Loader /> : children}
    </button>
  );
};

export default Button;
