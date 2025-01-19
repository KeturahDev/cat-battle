import React from "react";

const CatCard = ({ image, name, health, maxHealth, damage }) => {
  const handleClick = () => {
    alert("clicked");
  };
  return (
    <div onClick={handleClick}>
      <img src={image} alt={`${name} image`} />
      <h3>{name}</h3>
      <p>{health}</p>
      <p>{damage}</p>
    </div>
  );
};

export default CatCard;
