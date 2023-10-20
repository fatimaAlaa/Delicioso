import React from 'react';
import { useParams } from 'react-router-dom';
import '../../ComponentsStyle/RecipeDetails.css';

export default function RecipeDetails({ Recipes }) {
    const { recipeName } = useParams();
    const recipe = Recipes.find((r) => r.Name === recipeName);

    return (
        <div>
            <div className='details' id='max'>
                <div className='info'>

                    <h1 className='name'>{recipe.Name}</h1>
                    <h2>{recipe.Description}</h2>
                    <h3>Ingredients :</h3>
                    <ol>
                        {
                            recipe.ingredients.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))
                        }
                    </ol>
                    <h3>How to make it :</h3>
                    <ol>
                        {
                            recipe.How.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))
                        }
                    </ol>
                </div>
                <div className='Recipeimg'><img src={recipe.img} alt={recipe.Name} /></div>
            </div>
            <div className='details' id='min'>
                <div className='Recipeimg'><img src={recipe.img} alt={recipe.Name} /></div>
                <div className='info'>

                    <h1 className='name'>{recipe.Name}</h1>
                    <h2>{recipe.Description}</h2>
                    <h3>Ingredients :</h3>
                    <ol>
                        {
                            recipe.ingredients.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))
                        }
                    </ol>
                    <h3>How to make it :</h3>
                    <ol>
                        {
                            recipe.How.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        </div>
    );
}
