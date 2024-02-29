import { ContentfulClientApi, Entry, createClient } from 'contentful';

type ContentfulEntry<T> = {
  fields: T;
  contentTypeId: string;
};

type BlogPage = {
  title: string;
  titleSlug: string;
  category: string;
  publishedDate: string;
  author: unknown;
  content: unknown;
  featuredImage: unknown;
  relatedPosts: unknown;
};

type BlogPageContentful = ContentfulEntry<BlogPage>;

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

  private static simplifyEntry<T>(entry: Entry): T {
    const fields: any = entry.fields;

    for (const key in fields) {
      if (fields[key] && Array.isArray(fields[key])) {
        fields[key] = (fields[key] as any[]).map((item) => {
          if (item && item.fields) {
            return ContentfulService.simplifyEntry(item);
          }
          return item;
        });
      } else if (fields[key] && fields[key].fields) {
        fields[key] = ContentfulService.simplifyEntry(fields[key] as any);
      }
    }

    return fields;
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

    return ContentfulService.simplifyEntry<BlogPage>(entry);
  }
}
