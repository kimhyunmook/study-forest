import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./shared/component/header";
import DetailPage from "./pages/detailPage/DetailPage";
import FocusPage from "./pages/focusPage/FocusPage";
import TodayHabits from "./pages/habits/todayHabits";


function App() {
  return (
    <BrowserRouter>
      <div id="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailPage" element={<DetailPage />} />
          <Route path="/focusPage" element={<FocusPage />} />
          <Route path="/todayhabits" element={<TodayHabits />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
