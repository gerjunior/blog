import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <nav className='flex w-screen p-5 pb-6 items-center bg-white shadow-sm text-sm sm:text-base'>
      <Link
        href='/'
        className='font-black sm:text-xl md:text-2xl hover:text-slate-600 w-[70%] sm:min-w-max'
      >{`Geraldo's Dev Blog`}</Link>
      <div className=' w-full flex gap-3 justify-end items-center font-semibold'>
        <Link href='/#blog' className='hover:text-slate-600'>
          Blog
        </Link>
        <Link href='/about' className='hover:text-slate-600'>
          About
        </Link>
        <Link href='/about#contact'>
          <button className='bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg text-xl'>
            Contact
          </button>
        </Link>
      </div>
    </nav>
  );
}
