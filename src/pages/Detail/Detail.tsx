import React from 'react';
import { useParams } from 'react-router-dom';


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

interface ProductDetailProps {
  foodData: {
    recipes: Recipe[];
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ foodData }) => {
  const { id } = useParams<{ id: string }>(); 


  const productId = id ? parseInt(id, 10) : -1;
  
  const product = foodData.recipes.find((recipe) => recipe.id === productId);

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p><strong>Cuisine:</strong> {product.cuisine}</p>
      <p><strong>Difficulty:</strong> {product.difficulty}</p>
      <p><strong>Prep Time:</strong> {product.prepTimeMinutes} minutes</p>
      <p><strong>Cook Time:</strong> {product.cookTimeMinutes} minutes</p>
      <p><strong>Servings:</strong> {product.servings}</p>
      <p><strong>Rating:</strong> {product.rating} ({product.reviewCount} reviews)</p>
      
      <h3>Ingredients</h3>
      <ul>
        {product.ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient}</li>
        ))}
      </ul>

      <h3>Instructions</h3>
      <ol>
        {product.instructions.map((instruction, i) => (
          <li key={i}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default ProductDetail;
