import type IPost from '@/types/Post.type';

export const featuredPosts: {
  post: IPost;
  theme: string;
}[] = [
  {
    post: {
      id: '1',
      title: 'True Friends',
      category: {
        id: '1',
        name: 'Family',
      },
      preview:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat at veniam non voluptatibus nisi aliquid deserunt natus accusamus soluta. Asperiores provident libero debitis eveniet nam tenetur deleniti, amet natus dignissimos consequatur, quis, doloremque rem a tempore enim fugit harum deserunt magnam explicabo voluptates dolorum quos itaque saepe veritatis. Incidunt dolor eum laborum. Eaque cum reiciendis animi quisquam atque fugiat quam numquam optio cumque! Iste esse ab ipsam laborum, architecto veritatis incidunt illo fugiat quibusdam unde in tenetur dolorem, et repellat, aliquam vitae illum inventore. Ab nobis voluptate eum autem! Harum aliquid tenetur magni ducimus laboriosam maiores consequuntur eaque dolore deserunt?',
      coverImage: '/assets/images/featured-image.png',
    },
    theme: 'passion',
  },
  {
    post: {
      id: '2',
      title: 'Becoming A Better Parent',
      category: {
        id: '1',
        name: 'Family',
      },
      preview:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat at veniam non voluptatibus nisi aliquid deserunt natus accusamus soluta. Asperiores provident libero debitis eveniet nam tenetur deleniti, amet natus dignissimos consequatur, quis, doloremque rem a tempore enim fugit harum deserunt magnam explicabo voluptates dolorum quos itaque saepe veritatis. Incidunt dolor eum laborum. Eaque cum reiciendis animi quisquam atque fugiat quam numquam optio cumque! Iste esse ab ipsam laborum, architecto veritatis incidunt illo fugiat quibusdam unde in tenetur dolorem, et repellat, aliquam vitae illum inventore. Ab nobis voluptate eum autem! Harum aliquid tenetur magni ducimus laboriosam maiores consequuntur eaque dolore deserunt?',
      coverImage: '/assets/images/featured-image.png',
    },
    theme: 'cool__love',
  },
  {
    post: {
      id: '3',
      title: 'Grief',
      category: {
        id: '1',
        name: 'Family',
      },
      preview:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat at veniam non voluptatibus nisi aliquid deserunt natus accusamus soluta. Asperiores provident libero debitis eveniet nam tenetur deleniti, amet natus dignissimos consequatur, quis, doloremque rem a tempore enim fugit harum deserunt magnam explicabo voluptates dolorum quos itaque saepe veritatis. Incidunt dolor eum laborum. Eaque cum reiciendis animi quisquam atque fugiat quam numquam optio cumque! Iste esse ab ipsam laborum, architecto veritatis incidunt illo fugiat quibusdam unde in tenetur dolorem, et repellat, aliquam vitae illum inventore. Ab nobis voluptate eum autem! Harum aliquid tenetur magni ducimus laboriosam maiores consequuntur eaque dolore deserunt?',
      coverImage: '/assets/images/featured-image.png',
    },
    theme: 'passion',
  },
];

export const posts: IPost[] = [
  {
    id: '1',
    title: 'Love & Light Love & Light Love & Light Love & Light',
    category: {
      id: '2',
      name: 'Social',
    },
    preview:
      'Love and light – two words with such deep meanings. Welcome to Aima’s corner. It is still the season of love, family. Before we go any further, let me start by saying usually, things are not what they seem in this space, and this article is no different',
    coverImage: '/assets/images/article-image.png',
    createdAt: '2023-01-23T00:43:34.375Z',
  },
  {
    id: '2',
    title: 'Love & Light',
    category: {
      id: '2',
      name: 'Social',
    },
    preview:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat at veniam non voluptatibus nisi aliquid deserunt natus accusamus soluta. Asperiores provident libero debitis eveniet nam tenetur deleniti, amet natus dignissimos consequatur, quis, doloremque rem a tempore enim fugit harum deserunt magnam explicabo voluptates dolorum quos itaque saepe veritatis. Incidunt dolor eum laborum. Eaque cum reiciendis animi quisquam atque fugiat quam numquam optio cumque! Iste esse ab ipsam laborum, architecto veritatis incidunt illo fugiat quibusdam unde in tenetur dolorem, et repellat, aliquam vitae illum inventore. Ab nobis voluptate eum autem! Harum aliquid tenetur magni ducimus laboriosam maiores consequuntur eaque dolore deserunt?',
    coverImage: '/assets/images/article-image.png',
    createdAt: '2023-01-23T00:43:34.375Z',
  },
  {
    id: '3',
    title: 'Love & Light',
    category: {
      id: '2',
      name: 'Social',
    },
    preview:
      'Love and light – two words with such deep meanings. Welcome to Aima’s corner. It is still the season of love, family. Before we go any further, let me start by saying usually, things are not what they seem in this space, and this article is no different',
    coverImage: '/assets/images/article-image.png',
    createdAt: '2023-01-23T00:43:34.375Z',
  },
];
