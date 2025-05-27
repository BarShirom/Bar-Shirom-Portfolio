import { useNavigate } from "react-router-dom";
import barImage from "../../assets/bar-linkedin.jpg";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="home-container">
      <div className="home-content">
        <div className="home-header">
          <h1>BAR SHIROM</h1>
          <h3>Full-Stack Developer | React, Node.js, TypeScript</h3>
        </div>
        <div className="home-image">
          <img src={barImage} alt="Bar-Shirom" />
        </div>
        <div className="home-text-button">
          <div className="home-text">
            <p>Welcome to my personal website! </p>
          </div>
          <div className="home-button">
            <button onClick={() => navigate("/aboutMe")}>Enter</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
