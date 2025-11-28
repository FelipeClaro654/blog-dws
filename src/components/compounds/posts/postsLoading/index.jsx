import colors from "@theme/colors";
import { Card, Skeleton, Column, Grid } from "@atomics";
import { PostsLoadingWrapper } from "./styles";

export const PostsLoading = () => {
  return (
    <PostsLoadingWrapper>
      <Grid>
        <Column $flex $column>
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index}>
              <Card $background={colors.neutrals.lightest} />
            </Skeleton>
          ))}
        </Column>
      </Grid>
    </PostsLoadingWrapper>
  );
};
