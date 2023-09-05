import React, { useState } from "react";
import { Button, Form, FormGroup, Card, Row, Col, Container } from "react-bootstrap";
function SaveToJson () {
  const [formData, setFormData] = useState([{
    name: "",
    url: "",
    price: "",
    description: "",
  }]);

  const onSubmit = (e) => {
    e.preventDefault();

    // Envoi des données du formulaire
    const data = JSON.stringify(formData);
    fetch("../../public/data2.json", {
      method: "POST",
      body: data,
    });
  };

  return (
    <div>
      <Container>
    <h1>Proposer un NFT aux enchères</h1>
    <Row>
      <Col>
     <Card className="position-center" style={{ width: '35rem' }} svg width="20em" height="1em" viewBox="0 0 16 16" class="position-absolute top-50 start-50 translate-middle mt-1 bi bi-caret-down-fill" fill="#212529" xmlns="http://www.w3.org/2000/svg"><path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
       <FormGroup> 
      <FormGroup>
      <Form.Label>Nom du NFT</Form.Label>
      <Form.Control size="lg" type="text" placeholder="Nom de l'image"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        aria-label="nom"
        aria-describedby="basic-addon1" />
        </FormGroup>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Chemin URL vers le NFT</Form.Label>
        <Form.Control type="file"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          aria-label="url"
          aria-describedby="basic-addon1" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Prix du NFT (en ETH)</Form.Label>
        <Form.Control size="lg" type="text" placeholder="Prix (en cryptomonnaie ETH)"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          aria-label=""
          aria-describedby="basic-addon1" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={5} 
        placeholder="Description"
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}/>
      </Form.Group>
    <Button type="submit" value="Ajouter"> Mettre en exposition </Button>
    </FormGroup>
    </Card>
    </Col>
    </Row>
    </Container>
    </div>
  );
};


export default SaveToJson;