import spaces from "../../../styles/theme/spaces";
import { formatPostDate } from "../../../utils/date";
import { Column, Flex } from "../../atomics";
import Styles from "./styles";

const PostHeader = ({ post }) => {
  return (
    <Column $flex $column $gap={spaces["12px"]} $desktop={10}>
      <Styles.Title>{post.title}</Styles.Title>
      <Flex $gap={spaces["10px"]} $alignItems="center">
        <Styles.AuthorImg
          src={post.author.profilePicture}
          alt={post.author.name}
        />
        <Styles.AuthorData $gap="0" $justifyContent="center" $column>
          <Styles.AuthorInfo $gap={spaces["6px"]} $alignItems="center">
            Written by:
            <b>{post.author.name}</b>
          </Styles.AuthorInfo>
          <Styles.PostDate>{formatPostDate(post.createdAt)}</Styles.PostDate>
        </Styles.AuthorData>
      </Flex>
    </Column>
  );
};

export default PostHeader;
