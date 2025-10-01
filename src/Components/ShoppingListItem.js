import { use, useState } from "react";
export default function ShoppingListItem({ selectedIngredient, shoppingList }) {
 const item = shoppingList.find((item) => item.ingredient === selectedIngredient);
  return (
    <>
      {item ? 
      <>
      <img className="ingredient-image" src={item.image} />
      <div className="ingredient-text">
      <h3>{item.ingredient}</h3> 
      <p>{item.description}</p>
      </div>
      </>
      : null}
    </>
  );
}