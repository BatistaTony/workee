import { useCallback, useState } from 'react';

const useToggle = (defaultActive = false) => {
  const [isActive, setActive] = useState(defaultActive);

  const toggle = useCallback(() => {
    setActive(!isActive);
  }, [isActive]);

  return { isActive, toggle };
};

export default useToggle;
