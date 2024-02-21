import Image from 'next/image';
import { usePageEffect } from './usePageEffect';
import { Social } from './common/social';

export default function ProfileCard() {
  const { scale, slide } = usePageEffect();
  return (
    <div
      className={`flex flex-col gap-2.5 items-center justify-center p-6 rounded-3xl bg-white w-80 sm:w-[32rem] shadow-md ${slide} duration-300`}
    >
      <div
        className={`rounded-full w-20 h-20 border-green-400 bg-green-400 border-4 `}
      >
        <Image
          src='/author.png'
          width={400}
          height={400}
          alt='Picture of the author'
          priority
          className={`${scale} duration-50`}
        />
      </div>
      <p className='font-bold text-4xl text-gray-700'>Geraldo Silva</p>
      <p className='font-semibold text-md text-gray-600'>
        Senior Software Engineer
      </p>
      <Social color='gray-700' />
    </div>
  );
}
