import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function ProfileCard() {
  return (
    <div className='flex flex-col gap-2.5 items-center justify-center p-6 rounded-3xl bg-white w-80 sm:w-[32rem] shadow-md'>
      <Image
        src='/author.png'
        width={400}
        height={400}
        alt='Picture of the author'
        className='rounded-full w-20 h-20 border-green-400 border-4'
      />
      <p className='font-bold text-4xl text-gray-700'>Geraldo Silva</p>
      <p className='font-semibold text-md text-gray-600'>
        Senior Software Engineer
      </p>
      <div className='flex gap-10 p-2 text-gray-700'>
        <Link href='https://github.com/gerjunior' target='_blank'>
          <FaGithub size={40} />
        </Link>
        <Link href='https://linkedin.com/in/gerjunior' target='_blank'>
          <FaLinkedin size={40} />
        </Link>
        <Link href='https://youtube.com/@geraldo_silva' target='_blank'>
          <FaYoutube size={40} />
        </Link>
      </div>
    </div>
  );
}
