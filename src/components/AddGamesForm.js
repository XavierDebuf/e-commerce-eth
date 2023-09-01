import React, { useState, useForm } from "react";
import fs from "fs";

const SaveToJson = () => {
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    price: "",
    description: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    // Envoi des données du formulaire
    const data = JSON.stringify(formData);
    fs.writeFile("data.json", data, (err) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log("Données enregistrées dans le fichier data.json");
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nom de l'image"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        name="url"
        placeholder="URL de l'image"
        onChange={(e) => setFormData({ ...formData, url: e.target.value })}
      />
      <input
        type="text"
        name="price"
        placeholder="Prix"
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      <input type="submit" value="Ajouter" />
    </form>
  );
};

export default SaveToJson;