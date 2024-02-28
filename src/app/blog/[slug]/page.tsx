import Link from 'next/link';
import Image from 'next/image';
import { GoArrowLeft } from 'react-icons/go';
import { CategoryTag } from '@/app/common/category-tag';
import { BlogOptionCard } from './blog-option-card';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className='w-screen p-8 sm:p-10 flex flex-col items-center'>
      <div className='flex flex-col gap-10 items-start w-fit'>
        <Link
          href='/'
          className='hidden sm:flex gap-2 items-center font-medium'
        >
          <GoArrowLeft size={18} />
          Back
        </Link>
        <div className='flex flex-col gap-5'>
          <CategoryTag category='DESIGN' />
          <h1 className='text-3xl sm:text-5xl font-black sm:w-[32rem] text-slate-800'>
            How Can Designers Prepare For The Future?
          </h1>
          <span className='text-slate-500'>May 2, 2022</span>
        </div>
        <Image
          src='/test.webp'
          width={700}
          height={700}
          alt='Eat, Sleep, Code, Repeat'
          className='rounded-2xl'
        />
        <div>content</div>
        <span className='w-full text-center text-2xl font-black text-slate-800'>
          Continue Reading
        </span>
        <div className='flex flex-col gap-20'>
          <BlogOptionCard />
          <BlogOptionCard />
          <BlogOptionCard />
        </div>
      </div>
    </div>
  );
}
