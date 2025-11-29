import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PostsLoading, PostsEmpty } from "@compounds";
import usePosts from "./hooks/usePosts";
import { PostsProvider } from "@context/PostsProvider";
import { Posts } from "@compounds/posts";

const PostsPage = () => {
  const { data: posts, error, isLoading } = usePosts();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      navigate("/error", {
        replace: true,
      });
    }
  }, [error, navigate]);

  if (isLoading) {
    return <PostsLoading />;
  }

  if (!posts || !posts.length) {
    return <PostsEmpty />;
  }

  return (
    <PostsProvider posts={posts}>
      <Posts />
    </PostsProvider>
  );
};

export default PostsPage;
