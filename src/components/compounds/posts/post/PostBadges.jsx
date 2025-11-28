import { Flex, Badge, BadgeText } from "@atomics";

const PostBadges = ({ post }) => {
  return (
    <Flex>
      {post.categories.map(({ id, name }) => (
        <Badge key={id}>
          <BadgeText>{name}</BadgeText>
        </Badge>
      ))}
    </Flex>
  );
};

export default PostBadges;
