import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { type ContentfulClientApi, createClient } from 'contentful';
import showdown from 'showdown';
import type {
  BlogPage,
  BlogPageCardOnlyFields,
  BlogPageContentful,
  FAQ,
} from './types';
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
      content: blogPage.content ? documentToHtmlString(blogPage.content) : '',
      featuredImage: ContentfulHelpers.mapAsset(blogPage.featuredImage),
      publishedDate: ContentfulHelpers.formatDate(blogPage.publishedDate),
      category: blogPage.category.toUpperCase(),
      relatedPosts: blogPage.relatedPosts?.map((post) => ({
        ...post,
        featuredImage: ContentfulHelpers.mapAsset(post.featuredImage),
        publishedDate: ContentfulHelpers.formatDate(post.publishedDate),
        category: post.category.toUpperCase(),
      })),
    };
  }

  public static async getBlogPages() {
    const contentfulClient = ContentfulService.getClient();

    const result = await contentfulClient.getEntries<BlogPageContentful>({
      content_type: 'blogPage',
      select: [
        'sys.id',
        'fields.category',
        'fields.titleSlug',
        'fields.title',
        'fields.featuredImage',
        'fields.publishedDate',
      ],
    });

    const blogPages = result.items.map(
      ContentfulHelpers.simplifyEntry<BlogPage>,
    );

    return blogPages.map(
      ContentfulService.mapBlogPage,
    ) as BlogPageCardOnlyFields[];
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

  public static async getFaqs() {
    const contentfulClient = ContentfulService.getClient();

    const result = await contentfulClient.getEntries({
      content_type: 'faqs',
    });

    const showdownConverter = new showdown.Converter();

    const simplifiedEntries = result.items.map(
      ContentfulHelpers.simplifyEntry<FAQ>,
    );

    const mappedFaqs = simplifiedEntries.map((item) => ({
      ...item,
      content: showdownConverter.makeHtml(item.content),
    }));

    return mappedFaqs.sort((a, b) => a.order - b.order);
  }
}
