import { BrowserRouter, Route, Routes } from "react-router-dom";
import Posts from "./pages/posts";

const AppRouter = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default AppRouter;
