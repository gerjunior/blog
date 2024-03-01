import './styles.css';
import Link from 'next/link';
import Image from 'next/image';
import { GoArrowLeft } from 'react-icons/go';
import { CategoryTag } from '@/app/common/category-tag';
import { BlogOptionCard } from './blog-option-card';
import ContentfulService from '@/app/lib/contentful';

export default async function Page({ params }: { params: { slug: string } }) {
  const blogPost = await ContentfulService.getBlogPage(params.slug);

  return (
    <div className='w-screen p-8 sm:p-10 flex flex-col items-center bg-white border-t-2'>
      <div className='flex flex-col gap-10 items-start w-fit max-w-[50rem]'>
        <Link
          href='/'
          className='hidden sm:flex gap-2 items-center font-medium'
        >
          <GoArrowLeft size={18} />
          Back
        </Link>
        <div className='flex flex-col gap-5'>
          <CategoryTag category={blogPost.category} />
          <h1 className='text-3xl sm:text-5xl font-black sm:w-[32rem] text-slate-800'>
            {blogPost.title}
          </h1>
          <span className='text-slate-500'>{blogPost.publishedDate}</span>
        </div>
        <Image
          src={blogPost.featuredImage.file.url}
          width={700}
          height={700}
          alt='Eat, Sleep, Code, Repeat'
          className='rounded-2xl object-cover w-full max-h-[36rem] max-w-[50rem]'
          priority
        />
        <div
          className='text-lg text-slate-800 flex flex-col gap-5'
          dangerouslySetInnerHTML={{
            __html: blogPost.content,
          }}
        ></div>
        <span className='w-full text-center text-2xl scale-100 font-bold text-slate-800'>
          Continue Reading
        </span>
        <div className='flex flex-col gap-20'>
          {blogPost.relatedPosts.map((post) => (
            <BlogOptionCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
