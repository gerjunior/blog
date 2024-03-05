import './styles.css';

import { Metadata } from 'next';
import { BlogOptionCard } from './blog-option-card';
import ContentfulService from '@/app/lib/contentful/service';
import { BackButton } from './back-button';
import { PostContent } from './content';

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const blogPost = await ContentfulService.getBlogPage(params.slug);

  return {
    title: blogPost.title,
    description: blogPost.description,
    metadataBase: new URL(
      `https://geraldosilva.dev/blog/${blogPost.titleSlug}`,
    ),
    twitter: {
      description: blogPost.description,
      images: [
        {
          url: blogPost.featuredImage.file.url,
          width: 700,
          height: 700,
          alt: blogPost.title,
        },
      ],
    },
    openGraph: {
      title: blogPost.title,
      description: blogPost.description,
      type: 'article',
      images: [
        {
          url: blogPost.featuredImage.file.url,
          width: 700,
          height: 700,
          alt: blogPost.title,
        },
      ],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const blogPost = await ContentfulService.getBlogPage(params.slug);

  return (
    <div className='w-screen p-8 sm:p-10 flex flex-col items-center bg-white border-t-2'>
      <div className='flex flex-col gap-10 items-start w-fit max-w-[50rem]'>
        <BackButton />
        <PostContent blogPost={blogPost} />
        <span className='w-full text-center text-2xl scale-100 font-bold text-slate-800'>
          Continue Reading
        </span>
        <div className='flex flex-col gap-20'>
          {!blogPost.relatedPosts?.length && (
            <h2 className='text-2xl font-bold text-slate-800'>
              No related posts found
            </h2>
          )}

          {blogPost.relatedPosts?.map((post) => (
            <BlogOptionCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
