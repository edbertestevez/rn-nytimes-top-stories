export interface IMultimedia {
  url: string;
  format?: string;
  subType?: string;
  caption: string;
}

export type News = {
  title: string;
  abstract: string;
  url: string;
  uri: string;
  byline: string;
  published_date: Date;
  multimedia: Array<IMultimedia>;
};

export type ArticleSearch = {
  abstract: string;
  web_url: string;
  headline: {main: string};
  multimedia: Array<any>;
  pub_date: Date;
  byline: {original: string};
  uri: string;
};
