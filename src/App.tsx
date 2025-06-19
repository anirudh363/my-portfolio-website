import { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import MainPage from "./components/MainPage";


const App = () => {

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />


        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    
  )
}

export default App