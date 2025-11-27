const BASE_URL = "https://tech-test-backend.dwsbrazil.io";

const ENDPOINTS = {
  POSTS: {
    BASE: `${BASE_URL}/posts`,
    BY_ID: (id) => `${BASE_URL}/posts/${id}`,
  },
};

export default ENDPOINTS;
