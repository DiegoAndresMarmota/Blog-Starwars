import { useState } from "react";
import { Link } from "react-router-dom";
import image from "../Img/card_demo.jpg";

const Card = () => {
  const [activar, setActivar] = useState(false);

  const handleClick = () => {
    setActivar(!activar);
  };

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            possimus eligendi deserunt architecto, necessitatibus saepe.
          </p>
          <div className="btns-container d-flex">
            <Link to="/category/people" className="btn btn-primary">
              Lorem, ipsum.
            </Link>
            {activar ? (
              <button className="btn btn-secondary" onClick={handleClick}>
                <i className="fa-solid fa-heart"></i>
              </button>
            ) : (
              <button className="btn btn-secondary" onClick={handleClick}>
                <i className="fa-regular fa-heart"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
