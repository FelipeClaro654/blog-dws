import { Post } from "@/components/compounds";
import usePosts from "../hooks/usePosts";
import { Column, Grid } from "@/components/atomics/layout";
import { PostLoading } from "@/components/compounds/posts";

const Posts = () => {
  const { data: posts, error, isLoading } = usePosts();

  if (error) {
    return <>Error!</>;
  }

  if (isLoading) {
    return <PostLoading />;
  }

  if (!posts || !posts.length) {
    return <>Empty Posts</>;
  }

  return (
    <Grid>
      <Column $flex $column>
        {posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </Column>
    </Grid>
  );
};

export default Posts;
