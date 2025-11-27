import ENDPOINTS from "./constants";

export const getPosts = () =>
  fetch(ENDPOINTS.POSTS.BASE).then((res) => res.json());

export const getPost = (id) =>
  fetch(ENDPOINTS.POSTS.BY_ID(id)).then((res) => res.json());
