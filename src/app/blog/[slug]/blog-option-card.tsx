import { CategoryTag } from '@/app/common/category-tag';
import Image from 'next/image';

export function BlogOptionCard() {
  return (
    <div className='flex flex-col gap-10'>
      <Image
        src='/test.webp'
        width={700}
        height={700}
        alt='Eat, Sleep, Code, Repeat'
        className='rounded-2xl'
      />
      <div className='flex flex-col gap-2'>
        <CategoryTag category='DESIGN' />
        <h2 className='text-2xl sm:text-3xl font-black sm:w-[32rem] text-slate-800 leading-10'>
          How Can Designers Prepare For The Future?
        </h2>
        <span className='text-slate-500'>March 2, 2022</span>
      </div>
    </div>
  );
}
