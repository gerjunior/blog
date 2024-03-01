import Image from 'next/image';
import { useRef } from 'react';
import { usePageEffect } from './common/usePageEffect';
import Link from 'next/link';
import { CategoryTag } from './common/category-tag';
import { BlogPageCardOnlyFields } from './lib/contentful/types';

type BlogCardProps = {
  blogPage: BlogPageCardOnlyFields;
};
export function BlogCard({ blogPage }: BlogCardProps) {
  const wrapperDivRef = useRef<HTMLDivElement | null>(null);
  const { effectClassSet: wrapperDivEffectClassSet } = usePageEffect(
    wrapperDivRef,
    {
      duration: 500,
      effect: 'slide',
    },
  );

  return (
    <Link href={`/blog/${blogPage.titleSlug}`}>
      <div
        ref={wrapperDivRef}
        className={`cursor-pointer w-80 xl:w-[56rem] sm:w-[36rem] md:w-[44rem] bg-white p-5 py-5 rounded-3xl flex flex-row justify-between shadow-md ${wrapperDivEffectClassSet}`}
      >
        <div className='ml-4 sm:ml-8 sm:w-1/2 md:mr-5 flex flex-col justify-center gap-4 items-start w-full'>
          <CategoryTag category={blogPage.category} />
          <h3 className='text-xl xl:text-2xl font-[800] text-slate-800'>
            {blogPage.title}
          </h3>
          <div className='text-slate-500'>{blogPage.publishedDate}</div>
        </div>
        <div className='w-1/2 hidden sm:inline-block xl:flex justify-end'>
          <Image
            src={blogPage.featuredImage.file.url}
            width={450}
            height={450}
            alt='Eat, Sleep, Code, Repeat'
            className='rounded-3xl object-cover md:min-w-80 md:max-w-80 md:min-h-52 md:max-h-52 lg:min-h-52 lg:max-h-52 xl:min-w-[26rem] xl:max-w-[26rem] xl:min-h-64 xl:max-h-64'
            priority
          />
        </div>
      </div>
    </Link>
  );
}
