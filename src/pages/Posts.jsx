import { Post } from "@/components/compounds";
import usePosts from "../hooks/usePosts";
import { Column } from "@/components/atomics/layout";
import { PostsContainer } from "./styles";

const Posts = () => {
  const { data: posts, error } = usePosts();

  if (error) {
    return <>Error!</>;
  }

  if (!posts || !posts.length) {
    return <>Empty Posts</>;
  }

  return (
    <PostsContainer>
      <Column>
        {posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </Column>
    </PostsContainer>
  );
};

export default Posts;
