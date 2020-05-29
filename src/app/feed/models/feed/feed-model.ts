export class FeedModel {
  num_comments: number = 0; // number of comments
  points: number = 0; //upvotes
  title: string;
  url: string; // link domain
  author: string; //user name
  created_at: string //passed when


  constructor(data) {
    if (data) {
      this.num_comments = data.num_comments || 0;
      this.points = data.points || 0;
      this.title = data.title;
      this.url = data.url;
      this.author = data.author;
      this.created_at = data.created_at;
    }
  }
}