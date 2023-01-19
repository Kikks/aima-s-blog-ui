import { useState } from 'react';

const useToggle: (initialState: boolean) => [boolean, () => void] = (
  initialState
) => {
  const [state, setState] = useState(initialState);

  const toggleState = () => {
    setState((prevState) => !prevState);
  };

  return [state, toggleState];
};

export default useToggle;
