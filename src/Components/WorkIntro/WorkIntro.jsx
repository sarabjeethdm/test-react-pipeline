import "./WorkIntro.css";
import mobile from "../../assets/mobile-ani.jpg";
import web from "../../assets/web-ani.png";

const WorkIntro = () => {
  return (
    <div className="WorkIntro">
      <div className="WorkIntro-left">
        <h1 className="work-heading">
          My
          <br />
          <span className="work"> Work</span>
        </h1>
        <p className="work-description">
          Developing innovative solutions with MERN stack and Python, leveraging
          AWS for robust, scalable applications.
        </p>
      </div>
      <div className="WorkIntro-right">
        <img src={mobile} alt="work" className="work-img-mobile" />
        <img src={web} alt="work" className="work-img-web" />
      </div>
    </div>
  );
};

export default WorkIntro;
