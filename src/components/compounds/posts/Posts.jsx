import { memo } from "react";
import { Column, Grid } from "@atomics";
import { Post } from "./post";
import usePostsContext from "@context/usePostContext";
import { PostsOrder } from "./postsOrder";

export const Posts = memo(() => {
  const { posts, setSortOrder, sortOrder } = usePostsContext();

  return (
    <Grid $as="section">
      <PostsOrder setSortOrder={setSortOrder} sortOrder={sortOrder} />
      <Column $flex $column>
        {posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </Column>
    </Grid>
  );
});
