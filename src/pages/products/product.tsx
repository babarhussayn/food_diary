import React from "react";
import foodData from "../../dataApi.json";
import { useNavigate, useLocation } from "react-router-dom";

import { WiTime9 } from "react-icons/wi";

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
  const navigate = useNavigate();
  const location = useLocation();


  const searchParams = new URLSearchParams(location.search);
  const searchKeyword = searchParams.get("search") || "";

  const filteredRecipes = foodData.recipes.filter(
    (recipe: Recipe) =>
      recipe.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      recipe.cuisine.toLowerCase().includes(searchKeyword.toLowerCase())
  );


  const handleCardClick = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <div className="product-container">
        <div className="product-main">
          <h1>Recipe List</h1>
          <div className="product-grid">
            {filteredRecipes.map((recipe: Recipe, index: number) => (
              <div
                key={recipe.id}
                className="product-card"
                onClick={() => handleCardClick(recipe.id)}
              >
                <div className="product-card-relate">
                  <img src={recipe.image} alt={recipe.name} />

                  <div className="product-card-absol">
                    <h3>{recipe.cuisine}</h3>
                  </div>
                </div>
                <div className="product-card-sec">
                  <div className="product-card-rm">
                    <h4>{recipe.name}</h4>
                  </div>
                  <div className="product-card-rate">
                    <span> Reviews: {recipe.reviewCount} </span>
                  </div>
                </div>

                <div className="product-card-tim">
                  <strong>
                    <WiTime9 />
                  </strong>{" "}
                  {recipe.cookTimeMinutes} minutes
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
