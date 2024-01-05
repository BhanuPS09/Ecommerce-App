import "./directory-component.scss";
import { Link } from "react-router-dom";

const Directory = (props) => {
  const {
    properties: { id, title, imageUrl },
  } = props;
  return (
    <div className="directory-item-container" key={id}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="body">
        <Link to={`shop/${title}`}>
          <h2>{title.toUpperCase()}</h2>
          <p>Shop Now</p>
        </Link>
      </div>
    </div>
  );
};

export default Directory;
