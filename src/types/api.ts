// BlogType
export type BlogType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  category: null;
};

export type BlogListType = BlogType[];

// UserType
// export type UsersType = {
//   users: [
//     {
//       name: string;
//       age: number;
//       hobby: string;
//     }
//   ];
// };
