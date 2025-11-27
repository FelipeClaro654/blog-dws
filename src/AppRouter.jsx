import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./pages/posts";
import Post from "./pages/Post";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";

const AppRouter = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default AppRouter;
