export type MarvelApiResponse = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: DataMarvelApiResponse;
};

export type DataMarvelApiResponse = {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Character[];
};

export type Character = {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Series;
  stories: Stories;
  events: Events;
  urls: Url[];
  isFavorite: boolean;
};

export type Thumbnail = {
  path: string;
  extension: string;
};

export type Comics = {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
};

export type Item = {
  resourceURI: string;
  name: string;
};

export type Series = {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
};

export type Stories = {
  available: number;
  collectionURI: string;
  items: Item & { type: string }[];
  returned: number;
};

export type Events = {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
};

export type Url = {
  type: string;
  url: string;
};
