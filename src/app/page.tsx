import { gql } from '@/graphql/generated/gql';
import createApolloClient from './apolloClient';
import ProfileCard from './profile-card';
import CodeCard from './code-card';

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

export default async function Home() {
  // const client = createApolloClient();
  // const { data } = await client.query({
  //   query: GET_AUTHOR,
  //   variables: {
  //     blogPostAuthorId: process.env.CONTENTFUL_POST_AUTHOR_ID!,
  //   },
  // });

  return (
    <main className='flex min-h-screen flex-col items-center p-10 w-full'>
      <div className='w-full flex flex-col md:flex-row gap-10 justify-center items-center'>
        <ProfileCard />
        <CodeCard />
      </div>
    </main>
  );
}
