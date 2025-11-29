import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import usePost from "./hooks/usePost";
import PostDetail from "@compounds/postDetail";

const Post = () => {
  const { id } = useParams();
  const { data: post, error, isLoading } = usePost(id);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      navigate("/error", {
        replace: true,
      });
    }
  }, [error, navigate]);

  if (isLoading) return <Loader2 />;
  if (!post) return <div>No posts!</div>;

  return <PostDetail post={post} />;
};

export default Post;
