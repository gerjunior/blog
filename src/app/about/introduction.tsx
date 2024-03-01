import { useRef } from 'react';
import { usePageEffect } from '../common/usePageEffect';

export function Introduction() {
  const introductionTextRef = useRef<HTMLDivElement | null>(null);
  const { effectClassSet: wrapperClassSet } = usePageEffect(
    introductionTextRef,
    {
      duration: 300,
      effect: 'slide',
    },
  );

  return (
    <div
      className={`text-white pt-24 pb-24 pr-12 pl-12 bg-cover w-full bg-gradient-to-r from-purple-800 via-slate-950 to-blue-800`}
    >
      <div
        ref={introductionTextRef}
        className={`w-full flex flex-col gap-5 items-center justify-center ${wrapperClassSet}`}
      >
        <div className={`flex flex-col items-center text-center gap-1`}>
          <p className='font-black text-3xl sm:text-5xl'>Hey 👋</p>
          <p className='font-black text-3xl sm:text-5xl text-nowrap'>
            I&apos;m Geraldo
          </p>
        </div>
        <p className='flex flex-col items-center text-center font-normal text-wrap w-80 sm:w-96'>
          I have 5 years of software engineering experience, excelling in
          challenging projects focused on backend or full-stack development.
        </p>
      </div>
    </div>
  );
}
