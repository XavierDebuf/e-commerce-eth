import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Bienvenue sur notre site web e-commerce !</h1>
        <p>
          Nous vendons des jeux vidéo de tous genres, pour tous les âges.
        </p>
        <a href="/games">Voir tous les jeux</a>
      </div>
    );
  }
}

export default Home;