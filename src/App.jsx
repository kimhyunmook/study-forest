import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./shared/component/header";
import DetailPage from "./detailPage/DetailPage";
import FocusPage from "./focusPage/FocusPage";

function App() {
  return (
    <BrowserRouter>
      <div id="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DetailPage" element={<DetailPage />} />
          <Route path="/FocusPage" element={<FocusPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
