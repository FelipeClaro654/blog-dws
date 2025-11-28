import { memo } from "react";
import { Grid } from "@/components/atomics/layout";
import spaces from "@/styles/theme/spaces";
import PostHeader from "./PostHeader";
import PostContainer from "./PostContainer";
import PostBackButton from "./PostBackButton";

const PostDetail = memo(({ post }) => {
  return (
    <Grid $as="section" $gapMobile={spaces["24px"]}>
      <PostBackButton />
      <PostHeader post={post} />
      <PostContainer post={post} />
    </Grid>
  );
});

export default PostDetail;
