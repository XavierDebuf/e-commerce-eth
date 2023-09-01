
import React from "react";

const Card = ({ image, name, price, description }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>
        <strong>Prix</strong>: {price}
      </p>
      <p>
        <strong>Description</strong>: {description}
      </p>
    </div>
  );
};

export default Card;
