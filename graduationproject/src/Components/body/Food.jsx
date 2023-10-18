import React, { useState } from 'react';
import '../../ComponentsStyle/food.css';
import food from '../../Assests/dolma.jpg'
import Tomato from '../../Assests/tomato.png';
import Onion from '../../Assests/onion.png';
import Potato from '../../Assests/potato.png';
import Meat from '../../Assests/meat.png';
import Eggs from '../../Assests/eggs.png';
import Milk from '../../Assests/milk.png';
import Fish from '../../Assests/fish.png';
import Macaroni from '../../Assests/macaroni.png';
import Oil from '../../Assests/cooking-oil.png';
import OliveOil from '../../Assests/olive-oil.png';

export default function Food() {
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    const ingredients = [
        {
            ingredientName: 'Tomato',
            ingredientImage: Tomato,
        },
        {
            ingredientName: 'Onion',
            ingredientImage: Onion,
        },
        {
            ingredientName: 'Potato',
            ingredientImage: Potato,
        },
        {
            ingredientName: 'Oil',
            ingredientImage: Oil,
        },
        {
            ingredientName: 'Meat',
            ingredientImage: Meat,
        },
        {
            ingredientName: 'Eggs',
            ingredientImage: Eggs,
        },
        {
            ingredientName: 'Milk',
            ingredientImage: Milk,
        },
        {
            ingredientName: 'Fish',
            ingredientImage: Fish,
        },
        {
            ingredientName: 'Macaroni',
            ingredientImage: Macaroni,
        },
        {
            ingredientName: 'Olive Oil',
            ingredientImage: OliveOil,
        },
    ];

    const handleIngredientClick = (index) => {
        if (selectedIngredients.includes(index)) {
            setSelectedIngredients(selectedIngredients.filter((i) => i !== index));
        } else {
            setSelectedIngredients([...selectedIngredients, index]);
        }
    };

    const isIngredientSelected = (index) => selectedIngredients.includes(index);

    const Recipes = [
        {
            Type: 'Eastern',
            Name: 'Dolma',
            Description: 'This is one of the most grand, entertaining and delicious dishes cooked in Iraq.',
            img: food,
            ingredients: ['Tomato ', 'Onion ', 'Meat ', 'Oil'],
        },
        {
            Type: 'Western',
            Name: 'Fish',
            Description: '',
            ingredients: ['Fish ', 'Oil'],
        },
        {
            Type: 'Western',
            Name: 'Macaroni',
            Description: '',
            ingredients: ['Macaroni ', 'Onion ', 'Meat '],
        },
        {
            Type: 'Western',
            Name: 'Eggs',
            Description: '',
            ingredients: ['Eggs ', 'Tomato ', 'Olive Oil'],
        },
    ];

    const matchingRecipes = Recipes.filter((recipe) =>
        selectedIngredients.length === 0 || recipe.ingredients.some((ingredient) =>
            selectedIngredients.includes(ingredients.findIndex((i) => i.ingredientName === ingredient.trim()))
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
                            <div className='image'><img src={recipe.img} alt="" /></div>
                            <div className='recipeInfo'>
                                <h1>{recipe.Name}</h1>
                                <p>{recipe.Description}</p>
                                <p>Ingredients: {recipe.ingredients.join(', ')}</p>
                                <button className='btn'>View Recipe</button>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
}
