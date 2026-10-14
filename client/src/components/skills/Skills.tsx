import { skills } from '../../data/skillsData';
export default function Skills() {
    return <section className="section shell skills-section" id="skills" aria-labelledby="skills-title">
    <div className="section-heading"><p className="eyebrow">04 / Tools of the trade</p><h2 id="skills-title">What I work with.</h2></div>
    <div className="skills-grid">{skills.map(skill => <div className="skill-group" key={skill.title}>
      <h3>{skill.title}</h3><p>{skill.items}</p>{skill.note && <p className="skill-note">{skill.note}</p>}
    </div>)}</div>
  </section>;
}
