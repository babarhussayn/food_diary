import React from 'react'
import foodData from '../../dataApi.json'





interface Recipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
  }
  
  const product: React.FC = () => {
    return (
      <>
      <div >
        <h1>Recipe List</h1>
        {foodData.recipes.map((recipe: Recipe, index: number) => (
          <div key={recipe.id}>
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} />
            <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
            <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
            <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes</p>
            <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes</p>
            <p><strong>Servings:</strong> {recipe.servings}</p>
            <p><strong>Rating:</strong> {recipe.rating} ({recipe.reviewCount} reviews)</p>
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients.map((ingredient, i: number) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
            <h3>Instructions</h3>
            <ol>
              {recipe.instructions.map((instruction, i: number) => (
                <li key={i}>{instruction}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
      </>);
  };

export default product
