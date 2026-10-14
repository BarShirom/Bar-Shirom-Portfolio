import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import { profile } from '../../data/profileData';
export default function Layout() {
    return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Navbar />
    <main id="main" tabIndex={-1}><Outlet /></main>
    <footer className="site-footer"><div className="footer shell">
      <div className="footer-brand"><a className="wordmark" href="/">{profile.name}</a><p>Full Stack Developer · AI & Automation</p></div>
      <nav className="footer-links" aria-label="Footer navigation">
        <a href={'mailto:' + profile.email}>Email</a>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
      </nav>
      <div className="footer-meta"><p>© {new Date().getFullYear()} {profile.name}</p><a href="#main">Back to top <span aria-hidden="true">↑</span></a></div>
    </div></footer>
  </>;
}
