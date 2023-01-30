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

export type ZennUser = {
  id: number;
  username: string;
  name: string;
  avatar_small_url: string;
};

export type ZennItem = {
  id: number;
  post_type: string;
  title: string;
  slug: string;
  published: boolean;
  comments_count: number;
  liked_count: number;
  body_letters_count: number;
  article_type: string;
  emoji: string;
  is_suspending_private: boolean;
  published_at: string;
  body_updated_at: string | null;
  source_repo_updated_at: string | null;
  path: string;
  user: ZennUser;
  publication: string | null;
};
