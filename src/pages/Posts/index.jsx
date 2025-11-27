import { useNavigate } from "react-router-dom";
import { Post } from "@/components/compounds";
import usePosts from "./hooks/usePosts";
import { Column, Grid } from "@/components/atomics/layout";
import { PostsLoading, PostsEmpty } from "@/components/compounds/posts";

const Posts = () => {
  const { data: posts, error, isLoading } = usePosts();
  const navigate = useNavigate();
  if (error) {
    navigate("/error");
    return;
  }

  if (isLoading) {
    return <PostsLoading />;
  }

  if (!posts || !posts.length) {
    return <PostsEmpty />;
  }

  return (
    <Grid $as="section">
      <Column $flex $column>
        {posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </Column>
    </Grid>
  );
};

export default Posts;
