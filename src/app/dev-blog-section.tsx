'use client';
import { useRef } from 'react';
import { usePageEffect } from './common/usePageEffect';
import { BlogCard } from './blog-card';
import { BlogPageCardOnlyFields } from './lib/contentful/types';

type DevBlogSectionProps = {
  blogPages: BlogPageCardOnlyFields[];
};

export function DevBlogSection({ blogPages }: DevBlogSectionProps) {
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const { effectClassSet: slideEffectClassSet } =
    usePageEffect<HTMLHeadingElement>(titleRef, {
      duration: 1000,
      effect: 'slide',
    });
  return (
    <div
      className='w-full flex flex-col items-center gap-12 sm:mt-10'
      id='blog'
    >
      <h2
        className={`text-6xl font-black text-slate-800 tracking-tighter ${slideEffectClassSet}`}
        ref={titleRef}
      >
        Dev Blog
      </h2>
      <div className='w-full flex flex-col gap-10 items-center'>
        {blogPages.map((blogPage) => {
          return <BlogCard key={blogPage.titleSlug} blogPage={blogPage} />;
        })}
      </div>
    </div>
  );
}
