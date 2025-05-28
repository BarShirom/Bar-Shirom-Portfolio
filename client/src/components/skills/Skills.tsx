import "./Skills.css";
import { skills } from "../../data/skillsData";

const Skills = () => {
  return (
    <section className="skills-container">
      <h2 className="skills-title">Languages & Tools</h2>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <a
            key={i}
            href={skill.link}
            target="_blank"
            rel="noreferrer"
            className="skill-icon"
            title={skill.name}
          >
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Skills;
