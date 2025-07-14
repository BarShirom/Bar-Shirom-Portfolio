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
            Hi, I'm Bar Shirom — a full-stack developer with a strong passion
            for web development and hands-on experience building scalable
            applications.
            <br />
            <br />
            My journey into development began while working as a Customer
            Success Manager at a startup called Kumba, shortly after completing
            my degree in Political Science and International Relations. I worked
            closely with users and the product team — and quickly discovered a
            deep interest in the technical side of things. When the company
            closed its operations in Israel, I saw it as a turning point. I
            committed fully to learning software development through structured
            courses and self-study. Over the past two years, I’ve built several
            full-stack projects — including PetsAreTheBest, Factory Management,
            and TaskMaster-UI — using technologies like React, Redux Toolkit,
            Node.js, and MongoDB.
            <br />
            <br />I am now looking to join a team where I can continue to grow
            as a developer, contribute to meaningful projects, and collaborate
            with professionals who value creativity and initiative. I bring not
            only technical knowledge but also a strong sense of ownership and
            interpersonal skills from my previous customer-facing experience.
          </p>
          <div className="cv-buttons">
            <a
              href="/BAR_SHIROM_-_Full_Stack_Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cv-button"
            >
              View CV
            </a>
            <a
              href="/BAR_SHIROM_-_Full_Stack_Developer.pdf"
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
