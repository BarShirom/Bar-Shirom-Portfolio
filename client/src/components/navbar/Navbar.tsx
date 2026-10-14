import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
export default function Navbar() {
    const { pathname } = useLocation();
    const [scrolled, setScrolled] = useState(() => window.scrollY > 24);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    const solid = pathname !== '/' || scrolled;
    return <header className={'site-header' + (solid ? ' is-solid' : '')}>
    <div className="shell nav-inner">
      <nav aria-label="Main navigation">
        <Link to="/#projects">Projects</Link>
        <Link to="/#about">About</Link>
        <Link to="/#contact" className="nav-contact">Contact <span aria-hidden="true">↗</span></Link>
      </nav>
    </div>
  </header>;
}
