import { memo } from "react";
import { Grid } from "@/components/atomics/layout";
import spaces from "@/styles/theme/spaces";
import { PostContent } from "./PostContent";

const PostDetail = memo(({ post }) => {
  return (
    <Grid $as="section" $gapMobile={spaces["24px"]}>
      <PostHeader post={post} />
      <PostContent post={post} />
    </Grid>
  );
});

export default PostDetail;
