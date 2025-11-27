import ENDPOINTS from "./constants";

export const getPosts = () =>
  fetch(ENDPOINTS.POSTS.BASE).then((res) => res.json());
