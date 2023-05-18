import React, { FC } from 'react'
import Pizza from '../models/Pizza'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import EditPizzaForm from './EditPizzaForm';

interface SinglePizzaProps {
  pizza: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const SinglePizza: FC<SinglePizzaProps> = ({ pizza, updatePizza, deletePizza }) => {
  const [edit, setEdit] = React.useState<boolean>(false)

  const handleToggleEdit = () => {
    setEdit(!edit)
  }
  const handleDeletePizza = (id: number) => {
    deletePizza(id)
  }
  return (
    <div className="pizza">
      <img src={`/images/${pizza.img}`} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <span>{pizza.price} P</span>
      <div className="pizza-controls">
        <AiFillEdit onClick={handleToggleEdit} />
        <AiFillDelete onClick={() => handleDeletePizza(pizza.id)} />
      </div>
      {edit ? <EditPizzaForm data={pizza} updatePizza={updatePizza} handleToggleEdit={handleToggleEdit} /> : null}
    </div>

  )
}

export default SinglePizza