import { memo } from "react";
import { Column, TextBlock } from "@/components/atomics";
import Styles from "./styles";
import spaces from "@/styles/theme/spaces";

export const PostContent = memo(({ post }) => {
  return (
    <Column $flex $column $gap={spaces["24px"]}>
      <Styles.PostImg src={post.thumbnail_url} alt={post.title} />
      <TextBlock>{post.content}</TextBlock>
    </Column>
  );
});
