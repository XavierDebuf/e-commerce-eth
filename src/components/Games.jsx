import React, { useState, useEffect } from "react";
import { Card, ListGroup, Container, Row, Col } from "react-bootstrap";
const Games = () => {
  const [Games, setGames] = useState([{
    name: "",
    url: "",
    price: "",
    description: "",
  }]);

  useEffect(() => {
    // Récupère les Games
    fetch("../public/data2.json")
      .then((response) => response.json())
      .then((Games) => setGames(Games.posts))
      .catch((err)=>console.log(err));
  }, []);

  return (
    <div>
{Games.map(Jeux => (/** prevoir un modulo pour un affichage normalisé en fonction du nombre l'élément */
  <Container>
    <h1>Liste des Jeux</h1>
    <Row>
      <Col>
      <Card className="position-center" style={{ width: '35rem' }} svg width="20em" height="1em" class="position-absolute top-50 start-50 translate-middle mt-1 bi bi-caret-down-fill" fill="#212529" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
       <ListGroup>
       <ListGroup.Item>url de l'image: <img src={Jeux.url} alt={Jeux.name} /></ListGroup.Item>
       <ListGroup.Item>Nom de l'image: {Jeux.name}</ListGroup.Item>
        <ListGroup.Item>Description: {Jeux.description}</ListGroup.Item>
        <ListGroup.Item>Prix de départ: {Jeux.price} </ListGroup.Item>
      <ListGroup.Item>Êtes vous prêt à surenchérir?</ListGroup.Item>
     </ListGroup>
       </Card>
       </Col>
       <Col>
       <Card className="position-center" style={{ width: '35rem' }} svg width="20em" height="1em" class="position-absolute top-50 start-50 translate-middle mt-1 bi bi-caret-down-fill" fill="#212529" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
       <ListGroup>
       <ListGroup.Item>url de l'image: <img src={Jeux.url} alt={Jeux.name} /></ListGroup.Item>
       <ListGroup.Item>Nom de l'image: {Jeux.name}</ListGroup.Item>
        <ListGroup.Item>Description: {Jeux.description}</ListGroup.Item>
        <ListGroup.Item>Prix de départ: {Jeux.price} </ListGroup.Item>
      <ListGroup.Item>Êtes vous prêt à surenchérir?</ListGroup.Item>
     </ListGroup>
       </Card>
       </Col>
       <Col>
       <Card className="position-center" style={{ width: '35rem' }} svg width="20em" height="1em" class="position-absolute top-50 start-50 translate-middle mt-1 bi bi-caret-down-fill" fill="#212529" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
       <ListGroup>
       <ListGroup.Item>url de l'image: <img src={Jeux.url} alt={Jeux.name} /></ListGroup.Item>
       <ListGroup.Item>Nom de l'image: {Jeux.name}</ListGroup.Item>
        <ListGroup.Item>Description: {Jeux.description}</ListGroup.Item>
        <ListGroup.Item>Prix de départ: {Jeux.price} </ListGroup.Item>
      <ListGroup.Item>Êtes vous prêt à surenchérir?</ListGroup.Item>
     </ListGroup>
       </Card>
       </Col>
       <Col>
       <Card className="position-center" style={{ width: '35rem' }} svg width="20em" height="1em" class="position-absolute top-50 start-50 translate-middle mt-1 bi bi-caret-down-fill" fill="#212529" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
       <ListGroup>
       <ListGroup.Item>url de l'image: <img src={Jeux.url} alt={Jeux.name} /></ListGroup.Item>
       <ListGroup.Item>Nom de l'image: {Jeux.name}</ListGroup.Item>
        <ListGroup.Item>Description: {Jeux.description}</ListGroup.Item>
        <ListGroup.Item>Prix de départ: {Jeux.price} </ListGroup.Item>
      <ListGroup.Item>Êtes vous prêt à surenchérir?</ListGroup.Item>
     </ListGroup>
       </Card>
       </Col>
      </Row><Row>
      <Col>
      <Card className="position-center" style={{ width: '35rem' }} svg width="20em" height="1em" class="position-absolute top-50 start-50 translate-middle mt-1 bi bi-caret-down-fill" fill="#212529" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
       <ListGroup>
       <ListGroup.Item>url de l'image: <img src={Jeux.url} alt={Jeux.name} /></ListGroup.Item>
       <ListGroup.Item>Nom de l'image: {Jeux.name}</ListGroup.Item>
        <ListGroup.Item>Description: {Jeux.description}</ListGroup.Item>
        <ListGroup.Item>Prix de départ: {Jeux.price} </ListGroup.Item>
      <ListGroup.Item>Êtes vous prêt à surenchérir?</ListGroup.Item>
     </ListGroup>
       </Card>
       </Col>
       <Col>
       <Card className="position-center" style={{ width: '35rem' }} svg width="20em" height="1em" class="position-absolute top-50 start-50 translate-middle mt-1 bi bi-caret-down-fill" fill="#212529" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
       <ListGroup>
       <ListGroup.Item>url de l'image: <img src={Jeux.url} alt={Jeux.name} /></ListGroup.Item>
       <ListGroup.Item>Nom de l'image: {Jeux.name}</ListGroup.Item>
        <ListGroup.Item>Description: {Jeux.description}</ListGroup.Item>
        <ListGroup.Item>Prix de départ: {Jeux.price} </ListGroup.Item>
      <ListGroup.Item>Êtes vous prêt à surenchérir?</ListGroup.Item>
     </ListGroup>
       </Card>
       </Col>
       <Col>
       <Card className="position-center" style={{ width: '35rem' }} svg width="20em" height="1em" class="position-absolute top-50 start-50 translate-middle mt-1 bi bi-caret-down-fill" fill="#212529" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
       <ListGroup>
       <ListGroup.Item>url de l'image: <img src={Jeux.url} alt={Jeux.name} /></ListGroup.Item>
       <ListGroup.Item>Nom de l'image: {Jeux.name}</ListGroup.Item>
        <ListGroup.Item>Description: {Jeux.description}</ListGroup.Item>
        <ListGroup.Item>Prix de départ: {Jeux.price} </ListGroup.Item>
      <ListGroup.Item>Êtes vous prêt à surenchérir?</ListGroup.Item>
     </ListGroup>
       </Card>
       </Col>
       <Col>
       <Card className="position-center" style={{ width: '35rem' }} svg width="20em" height="1em" class="position-absolute top-50 start-50 translate-middle mt-1 bi bi-caret-down-fill" fill="#212529" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
       <ListGroup>
       <ListGroup.Item>url de l'image: <img src={Jeux.url} alt={Jeux.name} /></ListGroup.Item>
       <ListGroup.Item>Nom de l'image: {Jeux.name}</ListGroup.Item>
        <ListGroup.Item>Description: {Jeux.description}</ListGroup.Item>
        <ListGroup.Item>Prix de départ: {Jeux.price} </ListGroup.Item>
      <ListGroup.Item>Êtes vous prêt à surenchérir?</ListGroup.Item>
     </ListGroup>
       </Card>
       </Col>
      </Row>
      <Row>
      <Col>
      <Card className="position-center" style={{ width: '35rem' }} svg width="20em" height="1em" class="position-absolute top-50 start-50 translate-middle mt-1 bi bi-caret-down-fill" fill="#212529" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
       <ListGroup>
       <ListGroup.Item>url de l'image: <img src={Jeux.url} alt={Jeux.name} /></ListGroup.Item>
       <ListGroup.Item>Nom de l'image: {Jeux.name}</ListGroup.Item>
        <ListGroup.Item>Description: {Jeux.description}</ListGroup.Item>
        <ListGroup.Item>Prix de départ: {Jeux.price} </ListGroup.Item>
      <ListGroup.Item>Êtes vous prêt à surenchérir?</ListGroup.Item>
     </ListGroup>
       </Card>
       </Col>
       <Col>
       <Card className="position-center" style={{ width: '35rem' }} svg width="20em" height="1em" class="position-absolute top-50 start-50 translate-middle mt-1 bi bi-caret-down-fill" fill="#212529" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
       <ListGroup>
       <ListGroup.Item>url de l'image: <img src={Jeux.url} alt={Jeux.name} /></ListGroup.Item>
       <ListGroup.Item>Nom de l'image: {Jeux.name}</ListGroup.Item>
        <ListGroup.Item>Description: {Jeux.description}</ListGroup.Item>
        <ListGroup.Item>Prix de départ: {Jeux.price} </ListGroup.Item>
      <ListGroup.Item>Êtes vous prêt à surenchérir?</ListGroup.Item>
     </ListGroup>
       </Card>
       </Col>
       <Col>
       <Card className="position-center" style={{ width: '35rem' }} svg width="20em" height="1em" class="position-absolute top-50 start-50 translate-middle mt-1 bi bi-caret-down-fill" fill="#212529" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
       <ListGroup>
       <ListGroup.Item>url de l'image: <img src={Jeux.url} alt={Jeux.name} /></ListGroup.Item>
       <ListGroup.Item>Nom de l'image: {Jeux.name}</ListGroup.Item>
        <ListGroup.Item>Description: {Jeux.description}</ListGroup.Item>
        <ListGroup.Item>Prix de départ: {Jeux.price} </ListGroup.Item>
      <ListGroup.Item>Êtes vous prêt à surenchérir?</ListGroup.Item>
     </ListGroup>
       </Card>
       </Col>
       <Col>
       <Card className="position-center" style={{ width: '35rem' }} svg width="20em" height="1em" class="position-absolute top-50 start-50 translate-middle mt-1 bi bi-caret-down-fill" fill="#212529" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
       <ListGroup>
       <ListGroup.Item>url de l'image: <img src={Jeux.url} alt={Jeux.name} /></ListGroup.Item>
       <ListGroup.Item>Nom de l'image: {Jeux.name}</ListGroup.Item>
        <ListGroup.Item>Description: {Jeux.description}</ListGroup.Item>
        <ListGroup.Item>Prix de départ: {Jeux.price} </ListGroup.Item>
      <ListGroup.Item>Êtes vous prêt à surenchérir?</ListGroup.Item>
     </ListGroup>
       </Card>
       </Col>
      </Row>

    </Container>
    ))}
   
       
    </div>
  );
};

export default Games;