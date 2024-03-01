import Image from 'next/image';
import { BlogPage } from '@/app/lib/contentful/types';
import { LightCategoryTag } from '@/app/common/category-tag';

type BlogOptionCardProps = {
  post: BlogPage;
};
export function BlogOptionCard({ post }: BlogOptionCardProps) {
  return (
    <div className='flex flex-col gap-10'>
      <Image
        src={post.featuredImage.file.url}
        width={700}
        height={700}
        alt='Eat, Sleep, Code, Repeat'
        className='rounded-2xl object-cover w-full max-h-56 max-w-80'
        priority
      />
      <div className='flex flex-col'>
        <LightCategoryTag category={post.category} />
        <h2 className='text-2xl sm:text-3xl font-bold sm:w-[32rem] text-slate-800 mt-0'>
          {post.title}
        </h2>
        <span className='text-slate-500 font-semibold'>
          {post.publishedDate}
        </span>
      </div>
    </div>
  );
}
