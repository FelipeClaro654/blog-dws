import { getPosts } from "@/services/postService";
import { useQuery } from "@tanstack/react-query";

const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
};

export default usePosts;
