import "./Skills.css";

const skills = [
  {
    name: "HTML5",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    link: "https://www.w3.org/html/",
  },
  {
    name: "CSS3",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    link: "https://www.w3schools.com/css/",
  },
  {
    name: "JavaScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    link: "https://reactjs.org/",
  },
  {
    name: "Redux",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    link: "https://redux.js.org",
  },
  {
    name: "Node.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    link: "https://nodejs.org",
  },
  {
    name: "Express",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
    link: "https://expressjs.com",
  },
  {
    name: "MongoDB",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
    link: "https://www.mongodb.com/",
  },
  {
    name: "MySQL",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    link: "https://www.mysql.com/",
  },
];

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
