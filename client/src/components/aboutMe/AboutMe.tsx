import { profile } from '../../data/profileData';
export default function AboutMe() {
    return <section className="about-band" id="about" aria-labelledby="about-title">
    <div className="shell about-grid">
      <div><p className="eyebrow">02 / About me</p><h2 id="about-title">Code with a <br />purpose.</h2><p className="about-note">Developer mindset.<br />Customer perspective.</p></div>
      <div className="about-copy">{profile.about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
    </div>
  </section>;
}
