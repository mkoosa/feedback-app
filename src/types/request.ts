export interface Subject {
  id: number | string;
  title: string;
  category: string;
  upvotes: number | string;
  status: string;
  description: string;
  comments?: {
    id: number | string;
    content: string;
    user: {
      image: string;
      name: string;
      username: string;
    };
    replies?: {
      content: string;
      replyingTo: string;
      user: {
        image: string;
        name: string;
        username: string;
      };
    }[];
  }[];
}

export interface Subjects {
  requests: Subject[];
}
