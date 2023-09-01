import React, { useState, useEffect } from "react";

const GamesList = ({ getGames, deleteGames }) => {
  const [Games, setGames] = useState([]);

  useEffect(() => {
    // Récupère les Games
    getGames().then((Games) => setGames(Games));
  }, []);

  return (
    <div>
      <h1>Liste des Games</h1>

      {Games.map((Games) => (
        <div key={Games.id}>
          <img src={Games.url} alt={Games.name} />
          <p>
            <strong>Nom</strong>: {Games.name}
          </p>
          <p>
            <strong>Prix</strong>: {Games.price}
          </p>
          <p>
            <strong>Description</strong>: {Games.description}
          </p>

          <button onClick={() => deleteGames(Games.id)}>Supprimer</button>
        </div>
      ))}

      <button onClick={() => {
        // Ouvre un formulaire pour ajouter une nouvelle Games
      }}>Ajouter une Games</button>
    </div>
  );
};

export default GamesList;