import type { PluginUploadFile } from '@cms-template/types';

interface Props {
  endpoint: string;
  query?: Record<string, string>;
  wrappedByKey?: string;
  wrappedByList?: boolean;
  locale?: string;
}

interface Data<Attributes> {
  id: number;
  attributes: Attributes;
}

interface Api<Attributes> {
  data: Data<Attributes>;
}

interface UploadFileData {
  url?: string;
  alt?: string;
  mime?: string;
}

export function getStringData(
  data: Record<string, unknown>,
): Record<string, string | undefined> {
  if (Boolean(data)) {
    return Object.entries(data).reduce(
      (acc: Record<string, string | undefined>, [key, data]) => {
        if (typeof data === 'string') {
          acc[key] = data;
        } else {
          acc[key] = undefined;
        }
        return acc;
      },
      {},
    );
  }
  return {};
}

export function getUploadFileUrl(fileData: unknown): UploadFileData {
  const fileAttributes = (
    fileData as unknown as Api<PluginUploadFile['attributes']>
  ).data?.attributes;

  return {
    url: `${
      import.meta.env.PUBLIC_STRAPI_URL
    }${fileAttributes?.url?.toString()}`,
    alt: fileAttributes?.alternativeText?.toString(),
    mime: fileAttributes?.mime?.toString(),
  };
}

export async function fetchApi<T>({
  endpoint,
  query,
  wrappedByKey,
  wrappedByList,
  locale,
}: Props): Promise<T> {
  if (endpoint.startsWith('/')) {
    endpoint = endpoint.slice(1);
  }

  const url = new URL(
    `${import.meta.env.STRAPI_URL}/api/${endpoint}?populate=deep`,
  );

  url.searchParams.append('locale', locale ?? import.meta.env.DEFAULT_LOCALE);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }
  const res = await fetch(url.toString());
  let data = await res.json();

  if (wrappedByKey) {
    data = data[wrappedByKey];
  }

  if (wrappedByList) {
    data = data[0];
  }

  return data as T;
}
