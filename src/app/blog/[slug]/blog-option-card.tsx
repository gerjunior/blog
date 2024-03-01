import Image from 'next/image';
import Link from 'next/link';
import { BlogPage } from '@/app/lib/contentful/types';
import { LightCategoryTag } from '@/app/common/category-tag';

type BlogOptionCardProps = {
  post: BlogPage;
};
export function BlogOptionCard({ post }: BlogOptionCardProps) {
  return (
    <Link href={`/blog/${post.titleSlug}`}>
      <div className='flex flex-col sm:flex-row gap-10 w-full cursor-pointer'>
        <Image
          src={post.featuredImage.file.url}
          width={700}
          height={700}
          alt='Eat, Sleep, Code, Repeat'
          className='rounded-2xl object-cover sm:min-w-72 sm:max-w-72 max-h-48 min-h-48'
          priority
        />
        <div className='flex flex-col justify-center gap-1'>
          <LightCategoryTag category={post.category} />
          <h2 className='text-2xl font-bold text-slate-800 mt-0'>
            {post.title}
          </h2>
          <span className='text-slate-500 font-semibold'>
            {post.publishedDate}
          </span>
        </div>
      </div>
    </Link>
  );
}
