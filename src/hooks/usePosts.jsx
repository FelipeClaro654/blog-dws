import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../services/postService";

const usePosts = () => {
  const { error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  debugger;
  return { error, data };
};

export default usePosts;
