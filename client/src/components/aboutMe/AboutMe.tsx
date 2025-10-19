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
            Proactive Full-Stack Developer with hands-on experience in React,
            TypeScript, Node.js, MongoDB, and a growing passion for
            Artificial Intelligence. Skilled in building scalable web
            applications from concept to deployment. Currently expanding
            expertise in Python, Large Language Models (LLMs), Natural Language
            Processing (NLP), and modern AI ecosystems-including Transformers,
            LangChain, and vector databases.
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
