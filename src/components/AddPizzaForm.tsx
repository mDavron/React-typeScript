import React, { FC, ChangeEvent, FormEvent, useState } from "react";
import "./styles.css";
import Pizza from "../models/Pizza";

interface AddPizzaProps {
  addPizza: (newPizza: Pizza) => void;
}

const initState = {
  title: "",
  price: "",
  img: "",
}

const AddPizzaForm: FC<AddPizzaProps> = ({ addPizza }) => {
  const [newPizza, setNewPizza] =
    useState<{ title: string, price: string, img: string }>(initState)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // const { name, value } = e.target;
    // let elementName = e.target.name;
    // let elementValue = e.target.value;

    setNewPizza({ ...newPizza, [e.target.name]: e.target.value })

  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = newPizza;


    if (title && price && img) {
      addPizza({
        title,
        img,
        price: Number(price),
        id: Date.now()
      })

      setNewPizza(initState)
    }
  }
  // console.log('newPizza >>>', newPizza);


  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Название"
        onChange={handleChange}
        value={newPizza.title}
        required
      />
      <input
        name="price"
        type="text"
        placeholder="Стоимость"
        onChange={handleChange}
        value={newPizza.price}
        required
      />
      <input
        name="img"
        type="text"
        placeholder="Изображение"
        onChange={handleChange}
        value={newPizza.img}
        required
      />

      <button type="submit">+ Добавить в меню</button>
    </form>
  );
};

export default AddPizzaForm;
