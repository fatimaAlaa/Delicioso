import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom'; // Import useLocation
import '../../ComponentsStyle/food.css';

export default function Food({ ingredients, Recipes }) {
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const location = useLocation();
    const type = new URLSearchParams(location.search).get('type');

    const handleIngredientClick = (index) => {
        if (selectedIngredients.includes(index)) {
            setSelectedIngredients(selectedIngredients.filter((i) => i !== index));
        } else {
            setSelectedIngredients([...selectedIngredients, index]);
        }
    };

    const isIngredientSelected = (index) => selectedIngredients.includes(index);

    const matchingRecipes = Recipes.filter((recipe) =>
        (!type || recipe.Type === type) &&
        (
            selectedIngredients.length === 0 ||
            recipe.ingredients.some((ingredient) =>
                selectedIngredients.includes(
                    ingredients.findIndex((i) => i.ingredientName === ingredient.trim())
                )
            )
        )
    );

    return (
        <div className='food'>
            <center>
                <div className='ingredientstitle'>
                    <h1>Choose Your Ingredients</h1>
                </div>
            </center>

            <div className='ingredients'>
                {
                    ingredients.map((ingredient, index) => (
                        <div
                            key={index}
                            className={isIngredientSelected(index) ? 'selected' : ''}
                            onClick={() => handleIngredientClick(index)}
                        >
                            <img src={ingredient.ingredientImage} alt={ingredient.ingredientName} />
                        </div>
                    ))
                }
            </div>
            <div className='recipes'>
                {
                    matchingRecipes.map((recipe, index) => (
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
                    ))
                }
            </div>
        </div>
    );
}
