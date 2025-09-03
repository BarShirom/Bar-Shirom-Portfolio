import "./AboutMe.css";
import aboutImage from "../../assets/bar-linkedin.jpg";
const AboutMe = () => {
  return (
    <section className="about-container">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        {/* Left: Image */}
        <div className="about-image">
          <img src={aboutImage} alt="Bar Shirom" />
        </div>

        {/* Right: Text */}
        <div className="about-text">
          <p>
            Proactive Full-Stack Developer with expertise in React, Node.js, and
            MongoDB. Skilled at designing and delivering end-to-end web
            applications with clean, maintainable code. A fast learner and
            problem-solver, expanding into TypeScript, Redux Toolkit, and
            Python. Strong team player with a passion for building impactful,
            user-focused solutions.
          </p>
          <div className="cv-buttons">
            <a
              href="/Bar_Shirom-Full_Stack-Developer-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cv-button"
            >
              View CV
            </a>
            <a
              href="/Bar_Shirom-Full_Stack-Developer-CV.pdf"
              download
              className="cv-button secondary"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
