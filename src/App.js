import { use, useState } from "react";
import { Toaster } from 'react-hot-toast';

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
    category: "Dairy"
  },

  {
    id: 2,
    ingredient: "Sugar",
    image: "images/sugar.jpg",
    description: "Brown Sugar",
    category:"Baking"
  },

  {
    id: 3,
    ingredient: "Bread",
    image: "images/bread.jpg",
    description: "Sliced Kingsmill Bread",
    category:"Carbohydrates"
  }, 
];

function App() {
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientImage, setIngredientImage] = useState("");
  const [ingredientDescription, setIngredientDescription] = useState("");
  const [shoppingList, setShoppingList] = useState(initialItems);
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [ingredientCategory, setIngredientCategory] = useState("")

  //Makes categories a unique list so it wont show 'Dairy' 2x when user enters it into the form. Seen as just 'Dairy'
  //Set() is like an array but it removes duplicates - set gives back an object {}, change it to array to access
  const categories = [...new Set(shoppingList.map(i => i.category))];

  function handleSelectedIngredient(ingredient){
    setSelectedIngredient((prev) => prev === ingredient ? "" : ingredient)
  }
  function handleSelectedCategory(category){
    setIngredientCategory((prev) => prev === category ? "" : category)

  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!ingredientName || !ingredientImage || !ingredientDescription || !ingredientCategory) return;

    const id = crypto.randomUUID();
    const newIngredient = {
      id: id,
      ingredient: ingredientName,
      image: `${ingredientImage}?=${id}`,
      description: ingredientDescription,
      category: ingredientCategory
    };
    setShoppingList((shoppingList) => [...shoppingList, newIngredient]);
    setIngredientName("");
    setIngredientImage("");
    setIngredientDescription("");
  }


  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false} />
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
          ingredientCategory={ingredientCategory}
          setIngredientCategory={setIngredientCategory}
        />
      </div>
      <div className="shoppingList-categories">
        <ul className="category-list">
          {categories.map((category) => (
            <li key={category}>
              <button className="category-btn" onClick={() => handleSelectedCategory(category)}>
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="shoppingList__wrapper">
        <div className="sidebar">
          <ul>
            {(ingredientCategory
              ? shoppingList.filter((i) => i.category === ingredientCategory)
              : shoppingList
            ).map((item) => (
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


