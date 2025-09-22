import "./Skills.css";
import pc from "../../assets/pc.png";
import react from "../../assets/react.png";
import flutter from "../../assets/flutter.png";

const Skills = () => {
  return (
    <div className="Skills" id="Skills">
      <h1 className="Skill-heading">My Expertise</h1>
      <div className="expertise-cards">
        <div className="expertise-card">
          <div className="expertise-head">
            <img src={pc} alt="" className="icon"/>
            <h2 className="title">
              <span className="highlight pink">Software</span> <br /> Development
            </h2>
          </div>
          <div className="expertise-card-text">
            <div className="hh">&lt;h3&gt;</div>
            <div className="vl-container">
              <div className="vl"></div>
              <p>
                Experienced in both functional and OOP: Python, JAVA, JavaScript, TypeScript, C/C++, GO, Linux, GitHub, Azure, Docker
              </p>
            </div>
            <div className="hh">&lt;h3&gt; </div>
          </div>
        </div>
        <div className="expertise-card">
          <div className="expertise-head">
            <img src={react} alt="" className="icon" />
            <h2 className="title">
              <span className="highlight blue">Full Stack Web</span>
              <br />
              Development
            </h2>
          </div>
          <div className="hh">&lt;h3&gt; </div>
          <div className="vl-container">
            <div className="vl"></div>
            <p>
              Passionate about Full stack development. Experience in React, ExpressJS, NodeJS, and MongoDB, NextJS, Vite.
            </p>
          </div>
          <div className="hh">&lt;h3&gt; </div>
        </div>
        <div className="expertise-card">
          <div className="expertise-head">
            <img src={flutter} alt="" className="icon" />
            <h2 className="title">
              <span className="highlight orange">Flutter Dev</span>
              <br />
              Android
            </h2>
          </div>
          <div className="hh">&lt;h3&gt;</div>
          <div className="vl-container">
            <div className="vl"></div>
            <p>
              Skilled in developing mobile apps using the Dart, Flutter framework and Firebase.
            </p>
          </div>
          <div className="hh">&lt;h3&gt;</div>
        </div>
      </div>
      <img className="skill-back" src="https://tamalsen.dev/wp-content/uploads/2021/12/hello-world-html-code.png" alt="" />
    </div>
  );
};

export default Skills;
