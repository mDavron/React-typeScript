import React, { FC, ChangeEvent, FormEvent, useState } from 'react'
import Pizza from '../models/Pizza'
import './styles.css'

interface AddPizzaProps {
  addPizza: (newPizza: Pizza) => void
}
const initial = {
  title: "",
  price: "",
  img: ""
}
const MashqForm: FC<AddPizzaProps> = ({ addPizza }) => {
  const [newPizza, setNewPizza] = useState(initial);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPizza({ ...newPizza, [name]: value })
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = newPizza;
    if (title && price && img) {
      addPizza({ title, price: Number(price), img, id: Date.now() })
    }
    setNewPizza(initial)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name='title'
        placeholder='title'
        value={newPizza.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name='price'
        placeholder='price'
        value={newPizza.price}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name='img'
        placeholder='image'
        value={newPizza.img}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default MashqForm