import RecipeCard from "../components/recipes/Card";
import { appetizers } from "../data/appetizers";
import "../pages/styles/row.css";

function AppetizersRow() {
  return (
    <>
      <h2 className="h2">Entrées</h2>
      <div className="recipesRow">
        {appetizers.map((singleRecipe) => (
          <RecipeCard key={singleRecipe.id} recipe={singleRecipe} />
        ))}
      </div>
    </>
  );
}

export default AppetizersRow;
