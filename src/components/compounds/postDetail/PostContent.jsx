import { Column } from "@/components/atomics";
import Styles from "./styles";

export const PostContent = ({ post }) => {
  return (
    <Column $desktop={10}>
      <Styles.PostContent.Title>{post.title}</Styles.PostContent.Title>
    </Column>
  );
};
