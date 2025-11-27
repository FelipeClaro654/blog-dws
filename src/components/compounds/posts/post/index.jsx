import {
  ImageContainer,
  PostContent,
  PostDataAndAuthor,
  PostTitle,
} from "./styles";
import { Card } from "@atomics/layout";
import { DotSeparator, Flex } from "@/components/atomics/layout";
import spaces from "@/styles/theme/spaces";
import { formatPostDate } from "@/utils/date";
import { memo } from "react";

export const Post = memo(({ post }) => {
  return (
    <Card $column>
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
      </Flex>
    </Card>
  );
});
