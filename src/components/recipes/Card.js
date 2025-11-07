import "./styles/card.css";
import PropTypes from "prop-types";

function RecipeCard({ recipe = {} }) {
  const { id, title, ingredients, prep } = recipe;
  if (!id) {
    return (
      <div className="recipe-card-loading">Chargement de la recette...</div>
    );
  }

  return (
    <div className="recipe-card">
      <div className="recipe-card-inner">
        <div className="front-recipe-card">
          <h3 className="title">{title}</h3>
        </div>
        <div className="back-recipe-card">
          <h3 className="title">{title}</h3>
          <p className="ingredients-label">Ingrédients principaux :</p>
          <ul className="ingredients-list">
            {Array.isArray(ingredients) &&
              ingredients
                .slice(0, 3)
                .map((item, index) => <li key={`${id}-${index}`}>{item}</li>)}
          </ul>
          {prep && (
            <p className="preparation-summary">{prep.substring(0, 80)}...</p>
          )}
        </div>
      </div>
    </div>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.array,
    prep: PropTypes.string,
  }).isRequired,
};

export default RecipeCard;
