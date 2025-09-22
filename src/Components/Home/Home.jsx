import "./Home.css";
import man from "../../assets/man.png";

const Home = () => {
  return (
    <div id="Home" className="Home">
      <div className="Home-center">
        {/* <h2 className="small-text hi">Hi!, I&apos;m</h2> */}
        <h2 className="small-text hi">Hi, my name is</h2>
        <h1 className="big-text">Sarabjeet Singh</h1>
        <hr />
        <h2 className="small-text">Motivated</h2>
        <h1 className="big-text">full stack software engineer</h1>
        {/* <p className="micro-text">
          Motivated and detail-oriented Full Stack Developer, passionate about
          leveraging technology to build scalable solutions and solve complex
          challenges through innovation and creativity.
        </p> */}
        <p>update description for testing</p>
      </div>
      <div className="down-arrow"></div>
    </div>
  );
};

export default Home;
