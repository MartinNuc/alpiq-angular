export interface Article {
  id: number;
  title: string;
  text: string;
  timestamp: Date;
  author: {
    name: string;
    email: string;
  };
}
