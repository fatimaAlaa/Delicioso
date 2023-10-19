import React from 'react';
import '../../ComponentsStyle/Recipes.css';
import { Link } from 'react-router-dom';

const Recipes = ({ Recipes }) => {
  return (
    <div>
      <center>
        <div className='popularRecipes'><h1 >Recipes</h1></div>
      </center>
      <div className="cardss">
        {
          Recipes.map((recipe, index) => (
            <center>
              <div className='recipe' key={index}>
                <div className='image'>
                  <img src={recipe.img} alt="" />
                </div>
                <div className='recipeInfo'>
                  <h1>{recipe.Name}</h1>
                  <p>{recipe.Description}</p>
                  <p className='Ingredients'>Ingredients: {recipe.ingredients.join(', ')}</p>
                  <Link className='btnLink' to={`/recipe/${recipe.Name}`}>View Recipe</Link>
                </div>
              </div>
            </center>
          ))
        }
      </div>
    </div>
  );
};

export default Recipes;
