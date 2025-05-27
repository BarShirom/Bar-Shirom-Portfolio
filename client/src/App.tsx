import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import AboutMe from "./components/aboutMe/AboutMe";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
