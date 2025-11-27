import { Column, Grid } from "@/components/atomics/layout";
import { H3 } from "@/components/atomics/typography";

export const PostsEmpty = () => {
  return (
    <Grid>
      <Column $centerH>
        <H3>No posts found!</H3>
      </Column>
    </Grid>
  );
};
