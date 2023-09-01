import React, { Component } from "react";
import Axios from "axios";
import { Card, Button } from "react-bootstrap";

class Games extends Component {
  state = {
    games: [],
  };

  componentDidMount() {
    // Effectue une requête HTTP pour obtenir la liste des jeux
    axios
      .get("https://api.igdb.com/v4/games")
      .then((response) => {
        this.setState({ games: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.games.map((game) => (
          <Card key={game.id}>
            <Card.Img src={game.cover.url} />
            <Card.Body>
              <Card.Title>{game.name}</Card.Title>
              <Card.Subtitle>{game.summary}</Card.Subtitle>
              <Button href={"/games/" + game.id}>Voir plus</Button>
            </Card.Body>
          </Card>))}
        </div>
        )
  }
