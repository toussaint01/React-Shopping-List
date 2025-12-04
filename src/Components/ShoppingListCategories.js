export default function ShoppingListCategory({onHandleSelectedCategory, shoppingList, activeCategory, setIngredientCategory, ingredientCategory }) {
//Makes categories a unique list so it wont show 'Dairy' 2x when user enters it into the form. Seen as just 'Dairy'
//Set() is like an array but it removes duplicates - set gives back an object {}, change it to array to access
  const categories = [...new Set(shoppingList.map(i => i.category))];

  function handleShowAllButton(){
    setIngredientCategory("")

  }
  return (
    <div className="shoppingList-categories">
      <ul className="category-list">
             <li>
            <button onClick={() => handleShowAllButton()}
              className={`category-btn category-btn__showAll`}
            >
              Show All
            </button>
          </li>
        {categories.map((category) => (
          <li key={category}>
            <button
              className={`category-btn ${activeCategory === category ? 'category-btn__active': ''}` }
              onClick={() => onHandleSelectedCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
