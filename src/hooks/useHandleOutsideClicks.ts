import type React from 'react';
import { useEffect } from 'react';

function useHandleOutsideClicks(
  ref: React.MutableRefObject<HTMLElement | HTMLDivElement | null>,
  close: () => void
) {
  useEffect(() => {
    const listener = (event: Event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (ref.current) {
        if (ref.current.contains(event.target as Node)) {
          return;
        }

        close();
      }
    };
    document.addEventListener('click', listener);

    return () => {
      document.removeEventListener('click', listener);
    };
  }, [ref, close]);
}
export default useHandleOutsideClicks;
