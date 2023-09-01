import React, { useState, useForm } from "react";

const AddGameForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    price: "",
    description: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    // Envoi des données du formulaire
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nom du jeux"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        name="url"
        placeholder="URL de l'image du jeux"
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

export default AddGameForm;
