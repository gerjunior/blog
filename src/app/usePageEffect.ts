import { useEffect, useState } from 'react';

export const usePageEffect = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  const slide = `transform transition-all duration-150 ${
    loaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
  }`;

  const scale = `transform transition-all duration-150 ${
    loaded ? 'scale-100' : 'scale-0'
  }`;

  return {
    slide,
    scale,
  };
};
