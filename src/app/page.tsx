import { gql } from '@/graphql/generated/gql';
import createApolloClient from './apolloClient';

const GET_AUTHOR = gql(`
query Author($blogPostAuthorId: String!) {
  blogPostAuthor(id: $blogPostAuthorId) {
    name
    nickname
    headline
    avatar {
      url
    }
  }
}`);

export default async function Home() {
  const client = createApolloClient();
  const { data } = await client.query({
    query: GET_AUTHOR,
    variables: {
      blogPostAuthorId: process.env.CONTENTFUL_POST_AUTHOR_ID!,
    },
  });

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>{`${data.blogPostAuthor?.nickname}'s Dev Blog`}</h1>
    </main>
  );
}
