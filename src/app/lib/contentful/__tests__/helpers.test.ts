import { describe, it, expect } from '@jest/globals';
import { ContentfulHelpers } from '../helpers';
import { Entry } from 'contentful';
import { Asset } from '../types';

describe('ContentfulHelpers', () => {
  describe('simplifyEntry', () => {
    it('should simplify an entry', () => {
      const entry: Entry<any> = {
        // @ts-expect-error
        sys: {
          id: '1',
          type: 'Entry',
          locale: 'en-US',
          contentType: {
            sys: { id: 'contentType', linkType: 'ContentType', type: 'Link' },
          },
        },
        fields: {
          title: 'My Entry',
        },
      };

      const simplified = ContentfulHelpers.simplifyEntry(entry);

      expect(simplified).toEqual({
        id: '1',
        title: 'My Entry',
      });
    });

    it('should simplify a nested entry', () => {
      const entry: Entry<any> = {
        // @ts-expect-error
        sys: {
          id: '1',
          type: 'Entry',
          locale: 'en-US',
          contentType: {
            sys: { id: 'contentType', linkType: 'ContentType', type: 'Link' },
          },
        },
        fields: {
          title: 'My Entry',
          nested: {
            sys: {
              id: '2',
              type: 'Entry',
              locale: 'en-US',
              contentType: {
                sys: {
                  id: 'contentType',
                  linkType: 'ContentType',
                  type: 'Link',
                },
              },
            },
            fields: {
              name: 'Nested Entry',
            },
          },
        },
      };

      const simplified = ContentfulHelpers.simplifyEntry(entry);

      expect(simplified).toEqual({
        id: '1',
        title: 'My Entry',
        nested: {
          id: '2',
          name: 'Nested Entry',
        },
      });
    });

    it('should simplify an array of nested entries', () => {
      const entry: Entry<any> = {
        // @ts-expect-error
        sys: {
          id: '1',
          type: 'Entry',
          locale: 'en-US',
          contentType: {
            sys: { id: 'contentType', linkType: 'ContentType', type: 'Link' },
          },
        },
        fields: {
          title: 'My Entry',
          nested: [
            {
              sys: {
                id: '2',
                type: 'Entry',
                locale: 'en-US',
                contentType: {
                  sys: {
                    id: 'contentType',
                    linkType: 'ContentType',
                    type: 'Link',
                  },
                },
              },
              fields: {
                name: 'Nested Entry 1',
              },
            },
            {
              sys: {
                id: '3',
                type: 'Entry',
                locale: 'en-US',
                contentType: {
                  sys: {
                    id: 'contentType',
                    linkType: 'ContentType',
                    type: 'Link',
                  },
                },
              },
              fields: {
                name: 'Nested Entry 2',
              },
            },
          ],
        },
      };

      const simplified = ContentfulHelpers.simplifyEntry(entry);

      expect(simplified).toEqual({
        id: '1',
        title: 'My Entry',
        nested: [
          {
            id: '2',
            name: 'Nested Entry 1',
          },
          {
            id: '3',
            name: 'Nested Entry 2',
          },
        ],
      });
    });
  });

  describe('mapAsset', () => {
    it('should map an asset correctly using https', () => {
      const asset: Asset = {
        title: 'My Asset',
        file: {
          url: '//example.com/image.jpg',
          details: { size: 500, image: { width: 100, height: 100 } },
          fileName: 'image.jpg',
          contentType: 'image/jpeg',
        },
      };

      const mapped = ContentfulHelpers.mapAsset(asset);

      expect(mapped).toEqual({
        ...asset,
        file: {
          ...asset.file,
          url: 'https://example.com/image.jpg',
        },
      });
    });
  });

  describe('formatDate', () => {
    it('should format a date', () => {
      const date = '2022-01-01T00:00:00Z';

      const formatted = ContentfulHelpers.formatDate(date);

      expect(formatted).toBe('January 1, 2022');
    });

    it('should return an empty string for an undefined date', () => {
      // @ts-expect-error
      const formatted = ContentfulHelpers.formatDate(undefined);

      expect(formatted).toBe('');
    });
  });
});
