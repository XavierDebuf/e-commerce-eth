
import React from "react";
import { ListGroup,Card } from "react-bootstrap";
function Card(props){
  return (
    <div>
       <Card className="position-center" style={{ width: '18rem' }} svg width="1em" height="1em" class="position-absolute top-50 start-50 translate-middle mt-1 bi bi-caret-down-fill" fill="#212529" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
    
      <ListGroup>
      <ListGroup.Item>url de l'image: <img src={props.url} alt={props.name} /></ListGroup.Item>
      <ListGroup.Item>Nom de l'image: {props.name}</ListGroup.Item>
       <ListGroup.Item>Description: {props.description}</ListGroup.Item>
       <ListGroup.Item>Prix de départ: {props.price} </ListGroup.Item>
     <ListGroup.Item>Êtes vous prêt à surenchérir?</ListGroup.Item>
    </ListGroup>
      </Card>
      <h3></h3>
      <p>
        <strong>Prix</strong>: 
      </p>
      <p>
        <strong>Description</strong>: 
      </p>
   
    
       </div>
  );
};

export default Card;
