import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import AccommodationSheet from "./pages/accommodationSheet/AccommodationSheet";
import Error404 from "./pages/error404/Error404";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="accommodationSheet" element={<AccommodationSheet />} />
          <Route path="*" element={< Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
