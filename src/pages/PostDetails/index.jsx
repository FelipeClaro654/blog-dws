import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import usePost from "./hooks/usePost";
import PostDetail from "@/components/compounds/postDetail";

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

  if (isLoading) return <div>Loading...</div>;
  if (!post) return <div>No posts!</div>;

  return <PostDetail post={post} />;
};

export default Post;
