import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { ImageContainer, PostContent, PostTitle } from "./styles";
import spaces from "@/styles/theme/spaces";
import { Flex, Card } from "@/components/atomics";
import PostInfos from "./PostInfos";
import PostBadges from "./PostBadges";

export const Post = memo(({ post }) => {
  const navigate = useNavigate();
  return (
    <Card $column onClick={() => navigate(`/posts/${post.id}`)}>
      <ImageContainer $src={post.thumbnail_url} />
      <Flex
        $padding={spaces["16px"]}
        $paddingTop="0"
        $column
        $justifyContent="flex-start"
      >
        <PostInfos post={post} />
        <PostTitle>{post.title}</PostTitle>
        <PostContent>{post.content}</PostContent>
        <PostBadges post={post} />
      </Flex>
    </Card>
  );
});
