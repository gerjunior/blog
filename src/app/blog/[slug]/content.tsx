'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { ParsedBlogPage } from '@/app/lib/contentful/types';
import { CategoryTag } from '@/app/common/category-tag';
import { usePageEffect } from '@/app/common/usePageEffect';

type PostContentProps = {
  blogPost: Pick<
    ParsedBlogPage,
    | 'category'
    | 'title'
    | 'publishedDate'
    | 'featuredImage'
    | 'content'
    | 'description'
  >;
};

export function PostContent({ blogPost }: PostContentProps) {
  const titleRef = useRef<HTMLDivElement>(null);
  const { effectClassSet } = usePageEffect(titleRef, {
    effect: 'slide',
    duration: 500,
  });

  const imageRef = useRef<HTMLImageElement>(null);
  const { effectClassSet: imageEffectClassSet } = usePageEffect(imageRef, {
    duration: 800,
    effect: 'slide',
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const { effectClassSet: contentEffectClassSet } = usePageEffect(contentRef, {
    effect: 'slide',
    duration: 1000,
  });

  return (
    <div className='flex flex-col gap-10 items-start w-fit max-w-[50rem]'>
      <div
        ref={titleRef}
        className={`w-full flex flex-col gap-5 ${effectClassSet}`}
      >
        <CategoryTag category={blogPost.category} />
        <h1 className='w-full text-3xl sm:text-5xl font-black text-slate-700'>
          {blogPost.title}
        </h1>
        <h2 className='w-full text-xl text-slate-500 mt-5'>
          {blogPost.description}
        </h2>
        <span className='text-slate-500'>{blogPost.publishedDate}</span>
      </div>
      <Image
        src={blogPost.featuredImage.file.url}
        width={700}
        height={700}
        alt='Eat, Sleep, Code, Repeat'
        className={`rounded-2xl object-cover w-full max-h-[36rem] max-w-[50rem] ${imageEffectClassSet}`}
        priority
        ref={imageRef}
      />
      <div
        ref={contentRef}
        className={`text-lg text-slate-800 flex flex-col gap-5 blog-post-dangerous-html-content ${contentEffectClassSet}`}
        dangerouslySetInnerHTML={{
          __html: blogPost.content,
        }}
      />
    </div>
  );
}
