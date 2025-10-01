import { use, useState } from "react";
import "./App.scss";

import ShoppingListItem from "./Components/ShoppingListItem";
import IngredientListItem from "./Components/IngredientListItem";
import ShoppingListForm from "./Components/ShoppingListForm";

const initialItems = [
  {
    id: 1,
    ingredient: "Milk",
    image: "images/milk.jpg",
    description: "Green Cap Semi Skimmed Milk",
  },

  {
    id: 2,
    ingredient: "Sugar",
    image: "images/sugar.jpg",
    description: "Brown Sugar",
  },

  {
    id: 3,
    ingredient: "Bread",
    image: "images/bread.jpg",
    description: "Sliced Kingsmill Bread",
  },
];

function App() {
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientImage, setIngredientImage] = useState("");
  const [ingredientDescription, setIngredientDescription] = useState("");
  const [shoppingList, setShoppingList] = useState(initialItems);
  const [selectedIngredient, setSelectedIngredient] = useState("");

  function handleSelectedIngredient(ingredient){
    setSelectedIngredient((prev) => prev === ingredient ? "" : ingredient)
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!ingredientName || !ingredientImage || !ingredientDescription) return;

    const id = crypto.randomUUID();
    const newIngredient = {
      id: id,
      ingredient: ingredientName,
      image: `${ingredientImage}?=${id}`,
      description: ingredientDescription,
    };
    setShoppingList((shoppingList) => [...shoppingList, newIngredient]);
    setIngredientName("");
    setIngredientImage("");
    setIngredientDescription("");
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold underline text-center mt-4 mb-4 tracking-wide">
        Shopping List!
      </h1>
      <div className="shoppingList__input flex justify-center p-6 bg-neutral-100">
        <ShoppingListForm
          handleFormSubmit={handleFormSubmit}
          setIngredientName={setIngredientName}
          ingredientName={ingredientName}
          ingredientImage={ingredientImage}
          setIngredientImage={setIngredientImage}
          ingredientDescription={ingredientDescription}
          setIngredientDescription={setIngredientDescription}
        />
      </div>

      <div className="shoppingList__wrapper">
        <div className="sidebar">
          <ul>
            {shoppingList.map((item) => (
              <IngredientListItem
                ingredient={item.ingredient}
                key={item.id}
                onSelectedIngredient={handleSelectedIngredient}
              />
            ))}
          </ul>
        </div>

        {selectedIngredient ? (
          <div className="shoppingList__item">
            <ShoppingListItem
              selectedIngredient={selectedIngredient}
              shoppingList={shoppingList}
              setShoppingList={setShoppingList}
              onHandleSelectedIngredient={setSelectedIngredient}

            />
          </div>
        ) : null}
      </div>
    </div>
  );
}


export default App;


