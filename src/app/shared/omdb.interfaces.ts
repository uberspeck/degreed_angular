export interface OmdbQuery {
  type?: 'movie'|'series'|'episode';
  y?: string;
  r?: 'json'|'xml';
  callback?: string;
  v?: string;
}

export interface OmdbSearchQuery extends OmdbQuery {
  s: string;
  page?: string;
}

export interface OmdbTitleQuery extends OmdbQuery {
  t: string;
  plot?: 'short'|'full';
}

export interface OmdbIdQuery extends OmdbQuery {
  i: string;
  plot?: 'short'|'full';
}
