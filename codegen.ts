import type { CodegenConfig } from '@graphql-codegen/cli';

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ENVIRONMENT, CONTENTFUL_ACCESS_TOKEN } =
  process.env;

if (
  !CONTENTFUL_SPACE_ID ||
  !CONTENTFUL_ENVIRONMENT ||
  !CONTENTFUL_ACCESS_TOKEN
) {
  throw new Error(
    'Please provide CONTENTFUL_SPACE_ID, CONTENTFUL_ENVIRONMENT and CONTENTFUL_ACCESS_TOKEN environment variables',
  );
}

const config: CodegenConfig = {
  overwrite: true,
  schema: `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}?access_token=${CONTENTFUL_ACCESS_TOKEN}`,
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/graphql/generated/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
