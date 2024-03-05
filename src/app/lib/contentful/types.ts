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
  description: string;
  category: string;
  publishedDate: string;
  content: Document;
  featuredImage: Asset;
  relatedPosts?: BlogPage[];
};

export type ParsedBlogPage = Omit<BlogPage, 'content'> & {
  content: string;
};

export type BlogPageContentful = ContentfulEntry<BlogPage>;

export type BlogPageCardOnlyFields = Pick<
  BlogPage,
  'title' | 'titleSlug' | 'category' | 'featuredImage' | 'publishedDate'
>;

export type FAQ = {
  title: string;
  content: string;
  order: number;
};

export type FAQWithId = FAQ & { id: string };
