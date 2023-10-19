import React from 'react';
import { useParams } from 'react-router-dom';
import '../../ComponentsStyle/RecipeDetails.css';

export default function RecipeDetails({ Recipes }) {
    const { recipeName } = useParams();
    const recipe = Recipes.find((r) => r.Name === recipeName);

    return (
        <div className='details'>
            <div className='info'>
                <h1>{recipe.Name}</h1>
                <p>{recipe.Description}</p>
                <p>Ingredients: {recipe.ingredients.join(', ')}</p>
            </div>
            <div className='Recipeimg'><img src={recipe.img} alt={recipe.Name} /></div>
        </div>
    );
}
