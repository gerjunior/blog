import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <nav className='flex w-screen p-5 pb-6 items-center bg-white shadow-sm text-sm sm:text-base'>
      <Link
        href='/'
        className='min-w-max font-black sm:text-xl md:text-2xl hover:text-slate-600'
      >{`Geraldo's Dev Blog`}</Link>
      <div className=' w-full flex gap-3 justify-end items-center font-semibold'>
        <Link href='/blog' className='hover:text-slate-600'>
          Blog
        </Link>
        <Link href='/about' className='hover:text-slate-600'>
          About
        </Link>
        <Link href='/contact'>
          <button className='text-white bg-gradient-to-r from-[#764DFF] to-[#FFC3DF] rounded-lg p-3'>
            Contact
          </button>
        </Link>
      </div>
    </nav>
  );
}
