import "./Card.css";

const Card = (props) => {
  return (
    <div className="Card">
      <div className="Card-image">
        <img src={props.image} alt="" className="project-img" />
      </div>
      <div className="Card-title">
        <h2 className="project-title">{props.title}</h2>
        <h3 className="project-description">{props.description}</h3>
      </div>
    </div>
  );
};

export default Card;
