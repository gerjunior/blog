import { describe, it, expect, jest } from '@jest/globals';
import ContentfulService from '../service';
import { beforeEach } from 'node:test';
import { type ContentfulClientApi } from 'contentful';

type ContentfulClient = ContentfulClientApi<undefined>;
type GetEntry = ContentfulClient['getEntry'];
type GetEntries = ContentfulClient['getEntries'];

describe('ContentfulService', () => {
  let getEntryMock = jest.fn<GetEntry>();
  let getEntriesMock = jest.fn<GetEntries>();

  // @ts-expect-error private method
  jest.spyOn(ContentfulService, 'getClient').mockReturnValue({
    getEntry: getEntryMock,
    getEntries: getEntriesMock,
  });

  const slug = 'my-blog-page';

  const sys = {
    id: '1',
    contentType: {
      sys: { id: '1', linkType: 'ContentType', type: 'Link' },
    },
    type: 'Entry',
    environment: {
      sys: {
        id: '1',
        type: 'Link',
        linkType: 'Environment',
      },
    },
    revision: 1,
    createdAt: '2024-02-29T00:00:00.000Z',
    updatedAt: '2024-02-29T00:00:00.000Z',
    space: {
      sys: {
        id: '1',
        type: 'Link',
        linkType: 'Space',
      },
    },
    locale: 'en-US',
  } as const;

  const entry = {
    sys,
    fields: {
      title: 'My Blog Page',
      content: 'My blog content',
      featuredImage: {
        sys: {
          id: '1',
          type: 'Link',
          linkType: 'Asset',
        },
        file: {
          url: '//example.com/image.jpg',
          details: {
            size: 123,
            image: {
              width: 100,
              height: 100,
            },
          },
          fileName: 'image.jpg',
          contentType: 'image/jpeg',
        },
      },
      publishedDate: '2021-01-01',
      category: 'category',
      relatedPosts: [
        {
          sys: {
            id: '2',
            type: 'Link',
            linkType: 'Entry',
          },
          fields: {
            title: 'Related post',
            content: 'Related post content',
            featuredImage: {
              sys: {
                id: '2',
                type: 'Link',
                linkType: 'Asset',
              },
              file: {
                url: '//example.com/related-image.jpg',
                details: {
                  size: 123,
                  image: {
                    width: 100,
                    height: 100,
                  },
                },
                fileName: 'related-image.jpg',
                contentType: 'image/jpeg',
              },
            },
            publishedDate: '2021-01-01',
            category: 'category',
          },
        },
      ],
    },
    metadata: {
      tags: [],
    },
  };

  const entries: Awaited<ReturnType<GetEntries>> = {
    items: [entry],
    total: 1,
    skip: 0,
    limit: 100,
  };

  describe('getBlogPage', () => {
    it('should get a blog page', async () => {
      getEntriesMock.mockResolvedValue(entries);
      getEntryMock.mockResolvedValue(entry);

      const result = await ContentfulService.getBlogPage(slug);

      expect(result).toMatchObject({
        category: 'CATEGORY',
        id: '1',
        publishedDate: 'January 1, 2021',
        title: 'My Blog Page',
      });
      expect(getEntriesMock).toHaveBeenCalledWith({
        content_type: 'blogPage',
        select: ['sys.id'],
        'fields.titleSlug': slug,
      });
      expect(getEntryMock).toHaveBeenCalledWith('1', {
        include: 2,
      });
    });

    it('should get a blog page correctly mapping the feature image url', async () => {
      getEntriesMock.mockResolvedValue(entries);
      getEntryMock.mockResolvedValue(entry);

      const result = await ContentfulService.getBlogPage(slug);

      expect(result.featuredImage).toMatchObject({
        file: {
          contentType: 'image/jpeg',
          details: {
            image: {
              height: 100,
              width: 100,
            },
            size: 123,
          },
          fileName: 'image.jpg',
          url: 'https://example.com/image.jpg',
        },
      });
    });

    it('should get a blog page correctly mapping the related posts', async () => {
      const result = await ContentfulService.getBlogPage(slug);

      expect(result.relatedPosts).toMatchObject([
        {
          category: 'CATEGORY',
          id: '2',
          publishedDate: 'January 1, 2021',
          title: 'Related post',
          featuredImage: {
            file: {
              contentType: 'image/jpeg',
              details: {
                image: {
                  height: 100,
                  width: 100,
                },
                size: 123,
              },
              fileName: 'related-image.jpg',
              url: 'https://example.com/related-image.jpg',
            },
          },
        },
      ]);
    });
  });

  describe('getBlogPages', () => {
    it('should get blog pages', async () => {
      jest.clearAllMocks();
      getEntriesMock.mockResolvedValue(entries);
      const result = await ContentfulService.getBlogPages();

      expect(result).toMatchObject([
        {
          category: 'CATEGORY',
          id: '1',
          publishedDate: 'January 1, 2021',
          title: 'My Blog Page',
        },
      ]);
      expect(getEntriesMock).toHaveBeenCalledTimes(1);
      expect(getEntriesMock).toHaveBeenCalledWith({
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
      expect(getEntryMock).not.toHaveBeenCalled();
    });

    it('should get blog pages correctly mapping the feature image url', async () => {
      const result = await ContentfulService.getBlogPages();

      expect(result[0].featuredImage).toMatchObject({
        file: {
          contentType: 'image/jpeg',
          details: {
            image: {
              height: 100,
              width: 100,
            },
            size: 123,
          },
          fileName: 'image.jpg',
          url: 'https://example.com/image.jpg',
        },
      });
    });

    it('should get blog pages correctly mapping the related posts', async () => {
      const result = await ContentfulService.getBlogPages();

      // @ts-expect-error relatedPosts is optional
      expect(result[0].relatedPosts).toMatchObject([
        {
          category: 'CATEGORY',
          id: '2',
          publishedDate: 'January 1, 2021',
          title: 'Related post',
          featuredImage: {
            file: {
              contentType: 'image/jpeg',
              details: {
                image: {
                  height: 100,
                  width: 100,
                },
                size: 123,
              },
              fileName: 'related-image.jpg',
              url: 'https://example.com/related-image.jpg',
            },
          },
        },
      ]);
    });
  });

  describe('getFaqs', () => {
    it('should get faqs', async () => {
      jest.clearAllMocks();
      getEntriesMock.mockResolvedValue(entries);
      const result = await ContentfulService.getFaqs();

      expect(result).toMatchObject([
        {
          id: '1',
          title: 'My Blog Page',
          content: '<p>My blog content</p>',
        },
      ]);
      expect(getEntriesMock).toHaveBeenCalledTimes(1);
      expect(getEntriesMock).toHaveBeenCalledWith({
        content_type: 'faqs',
      });
      expect(getEntryMock).not.toHaveBeenCalled();
    });

    it('should correctly parse the content markdown', async () => {
      jest.clearAllMocks();

      const md = '## Description\n\n Hello!!\n\n ## My blog content';
      const entries = {
        items: [
          {
            sys,
            fields: {
              title: 'My Blog Page',
              content: md,
            },
          },
        ],
        total: 1,
        skip: 0,
        limit: 100,
      };

      // @ts-expect-error
      getEntriesMock.mockResolvedValue(entries);
      const result = await ContentfulService.getFaqs();

      expect(result[0].content).toEqual(
        `<h2 id="description">Description</h2>\n<p>Hello!!</p>\n<p>## My blog content</p>`,
      );
    });
  });
});
