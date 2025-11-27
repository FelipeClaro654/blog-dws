import usePosts from "../hooks/usePosts";

const Posts = () => {
  const { data: posts, error } = usePosts();

  if (error) {
    <>Error!</>;
  }

  return <>AQ</>;
};

export default Posts;
