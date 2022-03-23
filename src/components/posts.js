import { useQuery } from '@apollo/react-hooks';
import { GET_POSTS } from '../lib/queries';

const Posts = () => {
  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: {
      options: {
        paginate: {
          page: 1,
          limit: 5,
        },
      },
    },
  });
  if (loading) return <>Loading...</>;
  if (error) return <>Error in GetPosts!!!</>;
  return data.posts.data.map((post) => (
    <>
      <div>{post.title}</div>
    </>
  ));
};
export default Posts;
