import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import PostDetails from "./pages/PostDetails";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";

const AppRouter = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default AppRouter;
