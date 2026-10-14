import { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import AboutMe from './components/aboutMe/AboutMe';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';
import Layout from './components/layout/Layout';
import './App.css';
function ScrollToLocation() {
    const { pathname, hash, key } = useLocation();
    const initialRender = useRef(true);
    useEffect(() => {
        const frame = requestAnimationFrame(() => {
            const section = hash ? document.getElementById(hash.slice(1)) : null;
            if (section)
                section.scrollIntoView();
            else
                window.scrollTo(0, 0);
            if (!initialRender.current || hash) {
                const destination = section ?? document.getElementById('main');
                destination?.setAttribute('tabindex', '-1');
                destination?.focus({ preventScroll: true });
            }
            initialRender.current = false;
        });
        return () => cancelAnimationFrame(frame);
    }, [pathname, hash, key]);
    return null;
}
export default function App() {
    return <BrowserRouter>
    <ScrollToLocation />
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/aboutMe" element={<div className="standalone"><h1 className="sr-only">About Bar Shirom</h1><AboutMe /></div>}/>
        <Route path="/portfolio" element={<div className="standalone"><h1 className="sr-only">Selected projects</h1><Portfolio /></div>}/>
        <Route path="/skills" element={<div className="standalone"><h1 className="sr-only">Technical skills</h1><Skills /></div>}/>
        <Route path="/contact" element={<div className="standalone"><h1 className="sr-only">Contact Bar Shirom</h1><Contact /></div>}/>
        <Route path="*" element={<section className="section not-found"><p className="eyebrow">404</p><h1>This page isn’t here.</h1><a className="button" href="/">Back to home <span aria-hidden="true">↗</span></a></section>}/>
      </Route>
    </Routes>
  </BrowserRouter>;
}
