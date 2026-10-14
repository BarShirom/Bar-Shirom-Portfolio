import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { profile, education } from '../../data/profileData';
import type { TimelineEntry } from '../../data/profileData';
import Portfolio from '../portfolio/Portfolio';
import AboutMe from '../aboutMe/AboutMe';
import Skills from '../skills/Skills';
import Contact from '../contact/Contact';
function Timeline({ entries }: {
    entries: TimelineEntry[];
}) {
    return <ol className="timeline">{entries.map(entry => <li key={entry.organization}>
    <p className="timeline-period">{entry.period}</p>
    <h3>{entry.title}</h3><p className="organization">{entry.organization}</p>
    {entry.detail && <p className="timeline-detail">{entry.detail}</p>}
  </li>)}</ol>;
}
export default function Home() {
    return <>
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="availability"><span aria-hidden="true"/>Open to development opportunities</p>
        <p className="hero-intro">Hi, I'm Bar Shirom</p>
        <h1 id="hero-title">Full Stack Developer <br />building <span>AI powered products.</span></h1>
        <div className="hero-actions">
          <a className="button" href="#projects">View Projects <span aria-hidden="true">↘</span></a>
          <a className="social-link" href={profile.github} target="_blank" rel="noreferrer"><FaGithub aria-hidden="true"/>GitHub <span className="sr-only">(opens in a new tab)</span></a>
          <a className="social-link" href={profile.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn aria-hidden="true"/>LinkedIn <span className="sr-only">(opens in a new tab)</span></a>
        </div>
      </div>
      <div className="hero-foot"><a href="#projects">Explore selected work <span aria-hidden="true">↓</span></a></div>
    </section>
    <Portfolio />
    <AboutMe />
    <section className="section shell" id="education" aria-labelledby="education-title">
      <div className="section-heading"><p className="eyebrow">03 / Learning</p><h2 id="education-title">Education & learning</h2></div>
      <Timeline entries={education}/>
    </section>
    <Skills />
    <Contact />
  </>;
}
