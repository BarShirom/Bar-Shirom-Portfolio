import { Link } from 'react-router-dom';
import { profile } from '../../data/profileData';
export default function Navbar() {
    return <header className="site-header">
    <div className="shell nav-inner">
      <Link className="wordmark" to="/">{profile.name}</Link>
      <nav aria-label="Main navigation">
        <Link to="/#projects">Projects</Link>
        <Link to="/#about">About</Link>
        <Link to="/#contact" className="nav-contact">Contact <span aria-hidden="true">↗</span></Link>
      </nav>
    </div>
  </header>;
}
