import Link from 'next/link';
import { Social } from './social';

export function Footer() {
  return (
    <div className='bg-black flex flex-col items-center gap-10 p-16 text-white'>
      <div className='w-full flex flex-col sm:flex-row gap-15 sm:gap-28 justify-center items-center font-semibold'>
        <Link href='/blog' className='hover:text-slate-400'>
          Blog
        </Link>
        <Link href='/about' className='hover:text-slate-400'>
          About
        </Link>
        <Link href='/contact' className='hover:text-slate-400'>
          Contact
        </Link>
      </div>
      <Social color='white' />
      <div className='font-bold'>© 2024 by Geraldo Silva</div>
    </div>
  );
}
