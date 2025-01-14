import { useState } from "react";
import Nav from "./components/Nav.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import MoviePage from "./pages/movies/MoviePage.jsx";
import GlobalContext from "./contexts/golbalContext.js";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/movies/:id" element={<MoviePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
