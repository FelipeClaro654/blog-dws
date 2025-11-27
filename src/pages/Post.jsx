import React from "react";
import { useParams } from "react-router-dom";
import usePost from "./hooks/usePost";

const Post = () => {
  const { id } = useParams();
  const { data: post, error, isLoading } = usePost(id);
  console.log(post);
  return <div>Post</div>;
};

export default Post;
