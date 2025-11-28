import { BodyLargeSemibold, Column, Flex } from "@/components/atomics";
import Styles from "./styles";
import spaces from "@/styles/theme/spaces";
import { formatPostDate } from "../../../utils/date";

export const PostContent = ({ post }) => {
  console.log({ post });
  return (
    <Column
      $flex
      $column
      $gap="16px"
      $desktop={10}
      $margin={`${spaces["14px"]} auto`}
    >
      <Styles.Title>{post.title}</Styles.Title>
      <Flex $gap="10px" $alignItems="center">
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
