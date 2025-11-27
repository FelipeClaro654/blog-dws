// Posts
// ● GET https://tech-test-backend.dwsbrazil.io/posts/: Get information about all posts.
// ● GET https://tech-test-backend.dwsbrazil.io/posts/{ID}: Get information about a
// specific post.

import ENDPOINTS from "./constants";

export const getPosts = () =>
  fetch(ENDPOINTS.POSTS.BASE).then((res) => res.json());
