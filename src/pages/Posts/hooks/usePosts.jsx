import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../../services/postService";

const usePosts = () => {
  const { error, data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
  return { error, data, isLoading };
};

export default usePosts;
