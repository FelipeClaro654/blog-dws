import { getPost } from "@/services/postService";
import { useQuery } from "@tanstack/react-query";

const usePost = (id) => {
  return useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
    staleTime: 5 * 60 * 1000,
    retry: 2,
    enabled: !!id,
  });
};

export default usePost;
