import { Card, Column, Grid, Skeleton } from "@/components/atomics/layout";
import { PostsLoadingWrapper } from "./styles";

export const PostLoading = () => {
  return (
    <PostsLoadingWrapper>
      <Grid>
        <Column $flex $column>
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} style={{ marginBottom: "16px" }}>
              <Card />
            </Skeleton>
          ))}
        </Column>
      </Grid>
    </PostsLoadingWrapper>
  );
};
