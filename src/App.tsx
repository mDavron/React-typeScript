import React, { FC, useState } from 'react';
import AddPizzaForm from './components/AddPizzaForm';

import Pizza from './models/Pizza'
import './App.css';
import DisplayPizza from './components/DisplayPizzas';

const App: FC = () => {
  const [pizzaList, setPizzaList] = useState<Pizza[]>([])

  const addPizza = (newPizza: Pizza) => {
    setPizzaList([...pizzaList, newPizza])
  }
  const updatePizza = (newPizza: Pizza) => {
    setPizzaList(pizzaList.map((pizza) =>
      (pizza.id === newPizza.id ? newPizza : pizza)
    ))
  }
  const deletePizza = (id: number) => {
    const newPizzaList = pizzaList.filter((pizza) => pizza.id !== id);
    setPizzaList(newPizzaList)
  }

  console.log("pizzaList >>>>", pizzaList);

  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Наша пиццерия</span>
        <AddPizzaForm addPizza={addPizza} />
        <DisplayPizza pizzaList={pizzaList} updatePizza={updatePizza} deletePizza={deletePizza} />
      </div>
    </div>
  );
}

export default App;
