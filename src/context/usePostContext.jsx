import { useContext } from "react";
import PostsContext from "../context/PostsContext";

const usePostsContext = () => {
  return useContext(PostsContext);
};

export default usePostsContext;
