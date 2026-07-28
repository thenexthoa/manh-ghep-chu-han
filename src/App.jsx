import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import CategoryPreviewModal from "./components/CategoryPreviewModal";
import UpdateFloatingButton from "./components/UpdateFloatingButton";
import UpdateModal from "./components/UpdateModal";

import AppLayout from "./layouts/AppLayout";

import Home from "./pages/Home";
import Lesson from "./pages/Lesson";
import Method from "./pages/Method";
import Puzzle from "./pages/Puzzle";
import Quiz from "./pages/Quiz";
import Story from "./pages/Story";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/phuong-phap"
            element={<Method />}
          />

          <Route
            path="/set/:setId"
            element={<Lesson />}
          />

          <Route
            path="/story/:setId"
            element={<Story />}
          />

          <Route
            path="/puzzle/:setId"
            element={<Puzzle />}
          />

          <Route
            path="/quiz/:setId"
            element={<Quiz />}
          />
        </Route>
      </Routes>

      <UpdateFloatingButton />

      <UpdateModal />

      <CategoryPreviewModal />
    </BrowserRouter>
  );
}

export default App;