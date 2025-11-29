import { useMemo, useState } from "react";
import PostsContext from "./PostsContext";

export const PostsProvider = ({ children, posts = [] }) => {
  const [sortOrder, setSortOrder] = useState("Newest");
  const sortedPosts = useMemo(() => {
    if (!posts.length) {
      return [];
    }

    const postsCopy = [...posts];

    return postsCopy.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      if (sortOrder === "Newest") {
        return dateB - dateA;
      }
      return dateA - dateB;
    });
  }, [posts, sortOrder]);

  const value = {
    posts: sortedPosts,
    sortOrder,
    setSortOrder,
  };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
