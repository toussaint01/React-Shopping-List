export default function ShoppingListForm(
  {handleFormSubmit, setIngredientName, ingredientName, ingredientImage, setIngredientImage, ingredientDescription, setIngredientDescription, ingredientCategory, setIngredientCategory }
){
return (
   <form
          className="form bg-white shadow-md rounded-2xl p-6 w-full max-w-md space-y-4"
          onSubmit={handleFormSubmit}
        >
          <label
            htmlFor="ingredientInput"
            className="block text-gray-700 font-medium"
          >
            What would you like to add to the shopping list?
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="ingredientInput"
            value={ingredientName}
            onChange={(e) => setIngredientName(e.target.value)}
            required
          />

          <div className="space-y-2">
            <label htmlFor="imageUrl" className="block text-gray-700 font-medium">
              Image Url
            </label>
            <input
              className="AddFriendinput w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              id="imageUrl"
              value={ingredientImage}
              onChange={(e) => setIngredientImage(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="description"
              className="block text-gray-700 font-medium"
            >
              Description
            </label>
            <input
              className="AddFriendinput w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              id="description"
              value={ingredientDescription}
              onChange={(e) => setIngredientDescription(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <label
              htmlFor="category"
              className="block text-gray-700 font-medium"
            >
              Category
            </label>
            <input
              className="AddFriendinput w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              id="category"
              onChange={(e) => setIngredientCategory(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition duration-200"
          >
            Add Item
          </button>
        </form>
)
}