import { useEffect, useState } from 'react';

const useWindowScroll = (till: number) => {
  const [scrollHeight, setScroll] = useState<number>(0);

  const handleScrollChange = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollChange);
  }, [scrollHeight]);

  return scrollHeight >= till;
};

export default useWindowScroll;
