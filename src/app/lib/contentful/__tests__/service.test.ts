import { describe, it, expect } from '@jest/globals';
import ContentfulService from '../service';

// jest.mock('contentful');

// const mockedCreateClient = createClient as jest.MockedFunction<
//   typeof createClient
// >;

// TODO: make those mocks work
// mockedCreateClient.mockReturnValue({
//   // @ts-expect-error
//   getEntry: jest.fn().mockResolvedValue(getEntryOutput),
//   // @ts-expect-error
//   getEntries: jest.fn().mockResolvedValue(getEntriesOutput),
// });

describe('ContentfulService', () => {
  describe('getBlogPage', () => {
    const slug = 'my-blog-page';

    it.skip('should get a blog page', async () => {
      const result = await ContentfulService.getBlogPage(slug);

      expect(result).toEqual({});
    });
  });
});
