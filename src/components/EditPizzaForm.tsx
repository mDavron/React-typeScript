import React, { FC, ChangeEvent, FormEvent, useState } from "react";
import "./styles.css";
import Pizza from "../models/Pizza";

interface EditPizzaProps {
  data: Pizza;
  updatePizza: (newPizza: Pizza) => void
  handleToggleEdit: () => void
}

const EditPizzaForm: FC<EditPizzaProps> = ({ data, updatePizza, handleToggleEdit }) => {
  const [editPizza, setEditPizza] =
    useState<Pizza>(data)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEditPizza({
      ...editPizza,
      [name]: value
    })
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = editPizza;

    if (title && price && img) {
      console.log('edit pizza >>>>', editPizza);
      updatePizza(editPizza)
      handleToggleEdit()
    }
  }
  console.log('edit pizza >>>>', editPizza);
  return (
    <form
      className="edit-form"
      onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Название"
        onChange={handleChange}
        value={editPizza.title}
        required
      />
      <input
        name="price"
        type="text"
        placeholder="Стоимость"
        onChange={handleChange}
        value={editPizza.price}
        required
      />
      <input
        name="img"
        type="text"
        placeholder="Изображение"
        onChange={handleChange}
        value={editPizza.img}
        required
      />
      <button type="submit">+ Potverdit</button>
    </form>
  );
};

export default EditPizzaForm;
