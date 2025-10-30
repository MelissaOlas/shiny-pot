import "./styles/card.css";

function RecipeCard() {
  const title = "Delicious Recipe";
  return (
    <div className="recipe-card">
      <p className="title">{title}</p>
    </div>
  );
}

export default RecipeCard;
