import LandingPage from "./pages/LandingPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebsiteLayout from "./layout/WebsiteLayout";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="font-primary bg-[#E8EEF1]">
      <BrowserRouter>
        <Routes>
          <Route element={<WebsiteLayout />}>
          <Route path="/" element={<LandingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
