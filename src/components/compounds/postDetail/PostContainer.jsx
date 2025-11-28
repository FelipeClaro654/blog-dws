import { memo } from "react";
import { Column, TextBlock } from "@atomics";
import Styles from "./styles";
import spaces from "@theme/spaces";

const PostContainer = memo(({ post }) => {
  return (
    <Column $flex $column $gap={spaces["28px"]}>
      <Styles.PostImg src={post.thumbnail_url} alt={post.title} />
      <TextBlock>{post.content}</TextBlock>
    </Column>
  );
});

export default PostContainer;
