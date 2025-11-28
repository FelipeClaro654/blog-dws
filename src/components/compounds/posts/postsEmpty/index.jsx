import { Column, Grid, H3 } from "@atomics";

export const PostsEmpty = () => {
  return (
    <Grid>
      <Column $centerH>
        <H3>No posts found!</H3>
      </Column>
    </Grid>
  );
};
