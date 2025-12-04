import { use, useState } from "react";
import { Toaster } from 'react-hot-toast';

import "./App.scss";

import ShoppingListItem from "./Components/ShoppingListItem";
import IngredientListItem from "./Components/IngredientListItem";
import ShoppingListForm from "./Components/ShoppingListForm";
import ShoppingListCategory from "./Components/ShoppingListCategories";
import Motion from "./Components/Motion";

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
  const [activeCategoryClass, setActiveCategoryClass] = useState("")

  function handleSelectedIngredient(ingredient){
    setSelectedIngredient((prev) => prev === ingredient ? "" : ingredient)
  }
  function handleSelectedCategory(category){
    setIngredientCategory((prev) => prev === category ? "" : category)
    setActiveCategoryClass((prev) => prev === category ? "" : category)
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
      <Motion />
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="font-bold text-center mt-4 mb-4 header-text">
        Toussaint's Personal Shopping List!
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
      <ShoppingListCategory onHandleSelectedCategory={handleSelectedCategory} shoppingList={shoppingList} activeCategory={activeCategoryClass} setIngredientCategory={setIngredientCategory} ingredientCategory={ingredientCategory} />

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


