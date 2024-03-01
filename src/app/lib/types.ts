import type { Document } from '@contentful/rich-text-types';

export type ContentfulEntry<T> = {
  fields: T;
  contentTypeId: string;
};

export type Asset = {
  title: string;
  description?: string;
  file: {
    url: string;
    details: {
      size: number;
      image: {
        width: number;
        height: number;
      };
    };
    fileName: string;
    contentType: string;
  };
};

export type BlogPage = {
  title: string;
  titleSlug: string;
  category: string;
  publishedDate: string;
  author: unknown;
  content: Document;
  featuredImage: Asset;
  relatedPosts: BlogPage[];
};

export type BlogPageContentful = ContentfulEntry<BlogPage>;
