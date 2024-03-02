import { Entry } from 'contentful';
import { Asset } from './types';

export class ContentfulHelpers {
  public static simplifyEntry<T>(entry: Entry): T & { id: string } {
    const fields: any = entry.fields;

    for (const key in fields) {
      if (fields[key] && Array.isArray(fields[key])) {
        fields[key] = (fields[key] as any[]).map((item) => {
          if (item && item.fields) {
            return ContentfulHelpers.simplifyEntry(item);
          }
          return item;
        });
      } else if (fields[key] && fields[key].fields) {
        fields[key] = ContentfulHelpers.simplifyEntry(fields[key] as any);
      }
    }

    fields.id = entry.sys.id;

    return fields;
  }

  public static mapAsset(asset: Asset) {
    return {
      ...asset,
      file: {
        ...asset.file,
        url: `https:${asset.file.url}`,
      },
    };
  }

  public static formatDate(date: string) {
    return date
      ? new Date(date).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })
      : '';
  }
}
