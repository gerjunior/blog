import { ApolloClient, InMemoryCache } from '@apollo/client';

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ENVIRONMENT, CONTENTFUL_ACCESS_TOKEN } =
  process.env;

const CONTENTFUL_GRAPHQL_URL = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}?access_token=${CONTENTFUL_ACCESS_TOKEN}`;

const createApolloClient = () => {
  return new ApolloClient({
    uri: CONTENTFUL_GRAPHQL_URL,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
