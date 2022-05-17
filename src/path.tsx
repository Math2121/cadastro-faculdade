import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import Line from "./pages/Line";

function Paths() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/users" element={<Home />} />
          <Route path="/telephone_line" element={<Line />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Paths;
