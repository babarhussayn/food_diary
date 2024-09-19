import React from 'react'
import foodData from '../../dataApi.json'
import { useNavigate } from 'react-router-dom';




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
  
  const Product: React.FC = () => {
    const navigate = useNavigate()

    const handleCardClick = (id:number) => {
      navigate(`/product/${id}`); 
    };

    return (
      <>
      <div className='product-container'>
      <div className='product-main' >
        <h1>Recipe List</h1>
        <div className='product-grid'>
        {foodData.recipes.map((recipe: Recipe, index: number) => (
          <div key={recipe.id} className='product-card' onClick={() => handleCardClick(recipe.id)}>
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
      </div>
      </div>
      </>);
  };

export default Product
