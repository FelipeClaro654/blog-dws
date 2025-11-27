import { Card, Column, Grid, Skeleton } from "@/components/atomics/layout";
import { PostsLoadingWrapper } from "./styles";
import colors from "@/styles/theme/colors";

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
