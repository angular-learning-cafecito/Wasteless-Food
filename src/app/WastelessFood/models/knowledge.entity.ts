export class Knowledge {
  id: number;
  title: string;
  urlToImage: string;
  summary:string;
  content:string;

  constructor(id?: number, title?: string, urlToImage?: string, summary?:string,content?:string) {

    this.id = id || 0;
    this.title = title || '';
    this.urlToImage = urlToImage || '';
    this.summary = summary || '';
    this.content = content || '';
  }

}

