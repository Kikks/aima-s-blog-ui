import type { FC } from 'react';

import type RadioProps from './Radio.props';

const Radio: FC<RadioProps> = ({ id, label, ...rest }) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="radio"
        className="h-4 w-4 border-gray-300 text-primary-main accent-primary-main focus:ring-2 focus:ring-primary-main"
        {...rest}
      />
      {label && (
        <label className=" ml-4 text-sm" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
};

export default Radio;
