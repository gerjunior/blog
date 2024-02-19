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
  generates: {
    'graphql/generated/contentful.ts': {
      plugins: ['typescript'],
    },
  },
};

export default config;
