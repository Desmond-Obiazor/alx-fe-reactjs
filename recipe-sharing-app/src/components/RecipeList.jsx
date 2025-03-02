import React from 'react';
import { Link } from 'react-router-dom'; // Ensure react-router-dom is imported
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h2>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link> {/* Link to RecipeDetails */}
            </h2>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipeList;
