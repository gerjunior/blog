import { MutableRefObject, useEffect } from 'react';

type EffectMap = {
  [key: string]: {
    start: string[];
    end: string[];
  };
};
type UseSlideEffectOptions = {
  duration: number;
  effect: 'slide' | 'scale';
};

export const usePageEffect = <Element extends HTMLElement>(
  ref: MutableRefObject<Element | null>,
  { duration, effect }: UseSlideEffectOptions,
) => {
  // ? remember to add any classes used here to the safelist in tailwind.config.js
  const effectMap: EffectMap = {
    slide: {
      start: ['translate-y-12', 'opacity-0'],
      end: ['translate-y-0', 'opacity-100'],
    },
    scale: {
      start: ['scale-0'],
      end: ['scale-100'],
    },
  };

  const chosenEffect = effectMap[effect];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(...chosenEffect.end);
          entry.target.classList.remove(...chosenEffect.start);
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    const cleanup = () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };

    return () => {
      cleanup();
    };
  }, [ref, duration, chosenEffect]);

  const effectClassSet = [
    'transform',
    'transition-all',
    `duration-[${duration}ms]`,
    ...chosenEffect.start,
  ].join(' ');

  return {
    effectClassSet,
  };
};
