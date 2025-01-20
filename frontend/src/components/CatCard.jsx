import React, { useEffect } from "react";
import "../styles/CatCard.css";

const CatCard = ({
  key2,
  image,
  name,
  health,
  maxHealth,
  damage,
  attackFunc,
}) => {
  const handleClick = () => {
    attackFunc(key2);
  };
  return (
    <div className="card" onClick={handleClick}>
      <div className="imageBox">
        <img className="image" src={image} alt={`${name} image`} />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <div className="stats">
          <p>health: {health}</p>
          <p>attack: {damage}</p>
        </div>
      </div>
    </div>
  );
};

export default CatCard;
