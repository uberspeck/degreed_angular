export class OmdbMediaObject {

  public Title: string;
  public Year: string;
  public imdbID: string;
  public Type: string;
  public Poster: string;
  public Rated?: string;
  public Runtime?: string;
  public Released?: string;
  public Plot?: string;

  // Derrived attributes
  public localPosterUrl?: string;

  constructor(object?: OmdbMediaObject) {
    if ( object ) {
      if (object.Poster) {
        object.localPosterUrl = `/assets/${object.Poster.match('[^/]*$')}`;
      }
      Object.assign(this, object);
    }
  }

}

export class OmdbMediaCollection {

  public Search: OmdbMediaObject[];
  public totalResults: string;
  public Response: string;

  constructor(collection?: OmdbMediaCollection) {
    if ( collection ) {
      collection.Search = collection.Search.map( m => new OmdbMediaObject(m) );
      Object.assign(this, collection);
    }
  }
}

