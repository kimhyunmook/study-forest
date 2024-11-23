import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./shared/components/header";
import DetailPage from "./pages/detailPage/DetailPage";
import FocusPage from "./pages/focusPage/FocusPage";
import TodayHabits from "./pages/habits/todayHabits";
import StudyDetail from "./pages/studydetail/study/study";

function App() {
  return (
    <BrowserRouter>
      <div id="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/study/:id/todayhabits" element={<TodayHabits />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/study/:id/focus" element={<FocusPage />} />
          <Route path="/study/:id" element={<StudyDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
