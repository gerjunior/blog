import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <nav className='flex w-full p-5 items-center bg-white shadow-sm text-sm sm:text-base'>
      <Link
        href='/'
        className='min-w-max font-black sm:text-lg'
      >{`Geraldo's Dev Blog`}</Link>
      <div className=' w-full flex gap-3 justify-end items-center font-semibold'>
        <Link href='/blog'>Blog</Link>
        <Link href='/about'>About</Link>
        <button className='text-white bg-gradient-to-r from-[#764DFF] to-[#FFC3DF] rounded-lg p-3'>
          Contact
        </button>
      </div>
    </nav>
  );
}
