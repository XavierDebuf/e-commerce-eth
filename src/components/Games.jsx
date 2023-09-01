import React, { useState, useEffect } from "react";

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
      <h1>Liste des Jeux</h1>
      <ul>
      <li>{Games.map(Jeux => (
        <ul>
        <li>url: {Jeux.url}</li>
        <li>nom: {Jeux.name}</li>
        <li>prix: {Jeux.price}</li>
        <li>description {Jeux.description}</li> 
        </ul>
      ))}
      </li>
      </ul>
    </div>
  );
};

export default Games;