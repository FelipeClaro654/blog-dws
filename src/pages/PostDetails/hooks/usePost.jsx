import { getPost } from "@/services/postService";
import { useQuery } from "@tanstack/react-query";

const usePost = (id) => {
  return useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPost(id),
    enabled: !!id,
  });
};

export default usePost;
