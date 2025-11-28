import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { ImageContainer, PostContent, PostTitle } from "./styles";
import spaces from "@/styles/theme/spaces";
import { Badge, BadgeText, Flex, Card } from "@/components/atomics";
import PostInfos from "./PostInfos";

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
        <Flex>
          {post.categories.map(({ id, name }) => (
            <Badge key={id}>
              <BadgeText>{name}</BadgeText>
            </Badge>
          ))}
        </Flex>
      </Flex>
    </Card>
  );
});
