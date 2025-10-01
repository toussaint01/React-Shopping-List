import { use, useState } from "react";
export default function ShoppingListItem({selectedIngredient, shoppingList, onHandleSelectedIngredient, setShoppingList}) {
  const [editText, setEditText] = useState(false);
  const [newDescription, setNewDescription] = useState("");
  const item = shoppingList.find(
    (item) => item.ingredient === selectedIngredient
  );

  function handleDescriptionEdit() {
    setEditText(!editText);
  }
  function handleRemoveItem(id) {
    alert(`${selectedIngredient} has now been removed from the shopping list`)
    setShoppingList((list) =>
      //return an array which meets this condition
      list.filter((item) => item.id !== id)
    );
    onHandleSelectedIngredient("");
  }

  function handleSave(e) {
    e.preventDefault();
    setShoppingList((list) =>
      list.map((i) =>
        i.ingredient === selectedIngredient
          ? { ...i, description: newDescription }
          : i
      )
    );
    setEditText(false);
  }
  return (
    <>
      {item ? (
        <>
          <img className="ingredient-image" src={item.image} />
          <div className="ingredient-text">
            <h3>{item.ingredient}</h3>
            <p>{item.description}</p>
          </div>
          <hr />
          <div className="ingredient-buttons">
            <button
              className="w-full bg-red-500 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition duration-200"
              onClick={(e) => handleRemoveItem(item.id)}
            >
              Remove
            </button>
            <button
              className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition duration-200"
              onClick={(e) => handleDescriptionEdit()}
            >
              Edit
            </button>
          </div>
          {editText ? (
            <form onSubmit={handleSave}>
              <hr className="mb-4" />
              <input
                className="AddFriendinput w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
              <button
                className="bg-green-500 w-full mt-4 p-1 rounded-xl font-semibold hover:bg-green-600 transition duration-200 text-white"
                type="submit"
              >
                Save
              </button>
            </form>
          ) : null}
        </>
      ) : null}
    </>
  );
}
