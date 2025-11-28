import spaces from "@/styles/theme/spaces";
import { PostDataAndAuthor } from "./styles";
import { formatPostDate } from "@utils/date";
import { Flex, DotSeparator } from "@atomics/";

const PostInfos = ({ post }) => {
  return (
    <Flex $gap={spaces["4px"]}>
      <PostDataAndAuthor>{formatPostDate(post.createdAt)}</PostDataAndAuthor>
      <DotSeparator />
      <PostDataAndAuthor>{post.author.name}</PostDataAndAuthor>
    </Flex>
  );
};

export default PostInfos;
