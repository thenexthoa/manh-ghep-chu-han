import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Lesson from "./pages/Lesson";
import Story from "./pages/Story";
import Puzzle from "./pages/Puzzle";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/set/:setId" element={<Lesson />} />
          <Route path="/story/:setId" element={<Story />} />
          <Route path="/puzzle/:setId" element={<Puzzle />} />
          <Route path="/quiz/:setId" element={<Quiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;