export default function IngredientListItem({ ingredient, onSelectedIngredient }) {
  return (
    <>
      <li className="btn rounded-full mt-4" onClick={() => onSelectedIngredient(ingredient)}>{ingredient}</li>
    </>
  );
}