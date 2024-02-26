'use client';
import { gql } from '@/graphql/generated/gql';
import createApolloClient from './apolloClient';
import ProfileCard from './profile-card';
import CodeCard from './code-card';
import { BlogCard } from './blog-card';
import { useEffect, useState } from 'react';
import { usePageEffect } from './usePageEffect';

const GET_AUTHOR = gql(`
query BlogPost($blogPostAuthorId: String!) {
  blogPostAuthor(id: $blogPostAuthorId) {
    name
    headline
    nickname
    avatar {
      url
    }
  }
}
`);

export default function Home() {
  // const client = createApolloClient();
  // const { data } = await client.query({
  //   query: GET_AUTHOR,
  //   variables: {
  //     blogPostAuthorId: process.env.CONTENTFUL_POST_AUTHOR_ID!,
  //   },
  // });

  const { slide } = usePageEffect();

  return (
    <main className='flex flex-col items-center p-10 w-screen gap-16'>
      <div className='w-full flex flex-col md:flex-row gap-10 justify-center items-center'>
        <ProfileCard />
        <CodeCard />
      </div>
      <div className='w-full flex flex-col items-center gap-12 mt-10' id='blog'>
        <h2
          className={`text-6xl font-black text-slate-800 tracking-tighter ${slide} duration-1000`}
        >
          Dev Blog
        </h2>
        <div className='w-full flex flex-col gap-10 items-center'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </main>
  );
}
