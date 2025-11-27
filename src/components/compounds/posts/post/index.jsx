import { memo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ImageContainer,
  PostContent,
  PostDataAndAuthor,
  PostTitle,
} from "./styles";
import { Card } from "@atomics/layout";
import {
  Badge,
  BadgeText,
  DotSeparator,
  Flex,
} from "@/components/atomics/layout";
import spaces from "@/styles/theme/spaces";
import { formatPostDate } from "@/utils/date";

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
        <Flex $gap={spaces["4px"]}>
          <PostDataAndAuthor>
            {formatPostDate(post.createdAt)}
          </PostDataAndAuthor>
          <DotSeparator />
          <PostDataAndAuthor>{post.author.name}</PostDataAndAuthor>
        </Flex>
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
