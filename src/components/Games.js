import React, { useState, useEffect } from "react";
import Card from "./Card";

const Games = () => {
  const [Games, setGames] = useState([]);

  useEffect(() => {
    // Récupère les Games
    fetch("data.json")
      .then((response) => response.json())
      .then((Games) => setGames(Games));
  }, []);

  return (
    <div>
      <h1>Liste des Games</h1>

      {Games.map((Jeux) => (
        <Card Jeux={Jeux.url} name={Jeux.name} price={Jeux.price} description={Jeux.description} />
      ))}
    </div>
  );
};

export default Games;