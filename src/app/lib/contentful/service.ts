import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { type ContentfulClientApi, createClient } from 'contentful';
import type { BlogPage, BlogPageContentful } from './types';
import { ContentfulHelpers } from './helpers';

export default class ContentfulService {
  private static _client: ContentfulClientApi<undefined>;

  private static getClient() {
    if (ContentfulService._client) {
      return ContentfulService._client;
    }

    const {
      CONTENTFUL_SPACE_ID,
      CONTENTFUL_ENVIRONMENT,
      CONTENTFUL_ACCESS_TOKEN,
    } = process.env;

    ContentfulService._client = createClient({
      space: CONTENTFUL_SPACE_ID!,
      environment: CONTENTFUL_ENVIRONMENT!,
      accessToken: CONTENTFUL_ACCESS_TOKEN!,
    });

    return ContentfulService._client;
  }

  private static mapBlogPage(blogPage: BlogPage) {
    return {
      ...blogPage,
      content: documentToHtmlString(blogPage.content),
      featuredImage: ContentfulHelpers.mapAsset(blogPage.featuredImage),
      publishedDate: ContentfulHelpers.formatDate(blogPage.publishedDate),
      category: blogPage.category.toUpperCase(),
      relatedPosts: blogPage.relatedPosts.map((post) => ({
        ...post,
        featuredImage: ContentfulHelpers.mapAsset(post.featuredImage),
        publishedDate: ContentfulHelpers.formatDate(post.publishedDate),
        category: post.category.toUpperCase(),
      })),
    };
  }

  public static async getBlogPage(slug: string) {
    const contentfulClient = ContentfulService.getClient();

    const result = await contentfulClient.getEntries({
      content_type: 'blogPage',
      select: ['sys.id'],
      'fields.titleSlug': slug,
    });

    const item = result.items[0];
    const entry = await contentfulClient.getEntry<BlogPageContentful>(
      item.sys.id,
      {
        include: 2,
      },
    );

    const simplifiedEntry = ContentfulHelpers.simplifyEntry<BlogPage>(entry);

    return ContentfulService.mapBlogPage(simplifiedEntry);
  }
}
