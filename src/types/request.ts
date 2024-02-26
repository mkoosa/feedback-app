export default interface Request {
  currentUser: {
    image: string;
    name: string;
    username: string;
  };

  requests: {
    id: number | string;
    title: string;
    category: string;
    upvotes: number | string;
    status: string;
    description: string;
    comments: {
      id: number | string;
      content: string;
      user: {
        image: string;
        name: string;
        username: string;
      };
    }[];
  }[];
}
