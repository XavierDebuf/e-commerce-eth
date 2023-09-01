
import React from "react";

function Card(props){
  return (
    <div>
      <img src={props.url} alt={props.name} />
      <h3>{props.name}</h3>
      <p>
        <strong>Prix</strong>: {props.price}
      </p>
      <p>
        <strong>Description</strong>: {props.description}
      </p>
    </div>
  );
};

export default Card;
