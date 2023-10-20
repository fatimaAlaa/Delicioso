import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Nabbar/navbar";
import AboutUs from "./Components/body/AboutUs";
import MainPage from './Components/body/MainPage';
import Kitchen from "./Components/body/Kitchen";
import PopularRecipes from "./Components/body/Recipes";
import RecipeDetails from './Components/body/RecipeDetails'
import Food from "./Components/body/Food";
import Footer from "./Components/Footer/Footer";
import food from './Assests/dolma.jpg'
import Tomato from './Assests/tomato.png';
import Onion from './Assests/onion.png';
import Chicken from './Assests/Chicken.png'
import Potato from './Assests/potato.png';
import Meat from './Assests/meat.png';
import Eggs from './Assests/eggs.png';
import Milk from './Assests/milk.png';
import Fish from './Assests/fish.png';
import Macaroni from './Assests/macaroni.png';
import Oil from './Assests/cooking-oil.png';
import OliveOil from './Assests/olive-oil.png';
import Rice from './Assests/rice.png'
import FishDish from './Assests/fishDish.png';
import macaroniDish from './Assests/macaroniDish.jpg'
import maklama from './Assests/maklama.jpg'
import Kubba from './Assests/Kubba.jpg'
import Quozi from './Assests/Quozi.jpg'
import Burger from './Assests/burger.jpg'
import Stake from './Assests/stake.jpg'
import Pizza from './Assests/Pizza.jpg'

function App() {
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
    {
      ingredientName: 'Rice',
      ingredientImage: Rice,
    },
    {
      ingredientName: 'Chicken',
      ingredientImage: Chicken,
    }
  ];

  const Recipes = [
    {
      Type: 'Eastern',
      Name: 'Dolma',
      img: food,
      Description: 'This is one of the most grand, entertaining and delicious dishes cooked in Iraq.',
      ingredients: ['Tomato ', 'Onion ', 'Meat ', 'Oil'],
      How: [
        "Soak the rice for 30 minutes.Rinse thoroughly and drain.",
        "Place the rice in a saucepan and pour enough water that it comes up to just less than covering it.",
        "Season with salt and turmeric.Stir gently so all the grains are covered.",
        "Bring to a gentle simmer and keep the lid on.Do not touch it for 20 - 25 minutes.The rice should have absorbed all of the water and take on a yellow colour.Don’t be frightened to over- cook the rice – that’s a good thing.",
        "Once the liquid is absorbed, turn the heat off.Keep the rice covered.Leave to cool.",
      ]
    },
    {
      Type: 'Eastern',
      Name: 'Fish',
      img: FishDish,
      Description: 'This is one of the most grand, entertaining and delicious dishes cooked in Iraq.',
      ingredients: ['Fish ', 'Oil'],
      How: [
        "Soak the rice for 30 minutes.Rinse thoroughly and drain.",
        "Place the rice in a saucepan and pour enough water that it comes up to just less than covering it.",
        "Season with salt and turmeric.Stir gently so all the grains are covered.",
        "Bring to a gentle simmer and keep the lid on.Do not touch it for 20 - 25 minutes.The rice should have absorbed all of the water and take on a yellow colour.Don’t be frightened to over- cook the rice – that’s a good thing.",
        "Once the liquid is absorbed, turn the heat off.Keep the rice covered.Leave to cool.",
      ]
    },
    {
      Type: 'Western',
      Name: 'Macaroni',
      img: macaroniDish,
      Description: 'This is one of the most grand, entertaining and delicious dishes cooked in Iraq.',
      ingredients: ['Macaroni ', 'Onion ', 'Meat '],
      How: [
        "Soak the rice for 30 minutes.Rinse thoroughly and drain.",
        "Place the rice in a saucepan and pour enough water that it comes up to just less than covering it.",
        "Season with salt and turmeric.Stir gently so all the grains are covered.",
        "Bring to a gentle simmer and keep the lid on.Do not touch it for 20 - 25 minutes.The rice should have absorbed all of the water and take on a yellow colour.Don’t be frightened to over- cook the rice – that’s a good thing.",
        "Once the liquid is absorbed, turn the heat off.Keep the rice covered.Leave to cool.",
      ]
    },
    {
      Type: 'Eastern',
      Name: 'Maklama',
      img: maklama,
      Description: 'This is one of the most grand, entertaining and delicious dishes cooked in Iraq.',
      ingredients: ['Eggs ', 'Tomato ', 'Olive Oil'],
      How: [
        "Soak the rice for 30 minutes.Rinse thoroughly and drain.",
        "Place the rice in a saucepan and pour enough water that it comes up to just less than covering it.",
        "Season with salt and turmeric.Stir gently so all the grains are covered.",
        "Bring to a gentle simmer and keep the lid on.Do not touch it for 20 - 25 minutes.The rice should have absorbed all of the water and take on a yellow colour.Don’t be frightened to over- cook the rice – that’s a good thing.",
        "Once the liquid is absorbed, turn the heat off.Keep the rice covered.Leave to cool.",
      ]
    },
    {
      Type: 'Eastern',
      Name: 'Kubba Haleb',
      img: Kubba,
      Description: 'This is one of the most grand, entertaining and delicious dishes cooked in Iraq.',
      ingredients: ['Potato ', 'Meat ', 'Oil'],
      How: [
        "Soak the rice for 30 minutes.Rinse thoroughly and drain.",
        "Place the rice in a saucepan and pour enough water that it comes up to just less than covering it.",
        "Season with salt and turmeric.Stir gently so all the grains are covered.",
        "Bring to a gentle simmer and keep the lid on.Do not touch it for 20 - 25 minutes.The rice should have absorbed all of the water and take on a yellow colour.Don’t be frightened to over- cook the rice – that’s a good thing.",
        "Once the liquid is absorbed, turn the heat off.Keep the rice covered.Leave to cool.",
      ]
    },
    {
      Type: 'Eastern',
      Name: 'Quozi',
      img: Quozi,
      Description: 'This is one of the most grand, entertaining and delicious dishes cooked in Iraq.',
      ingredients: ['Rice ', 'Meat ', 'Oil'],
      How: [
        "Soak the rice for 30 minutes.Rinse thoroughly and drain.",
        "Place the rice in a saucepan and pour enough water that it comes up to just less than covering it.",
        "Season with salt and turmeric.Stir gently so all the grains are covered.",
        "Bring to a gentle simmer and keep the lid on.Do not touch it for 20 - 25 minutes.The rice should have absorbed all of the water and take on a yellow colour.Don’t be frightened to over- cook the rice – that’s a good thing.",
        "Once the liquid is absorbed, turn the heat off.Keep the rice covered.Leave to cool.",
      ]
    },
    {
      Type: 'Western',
      Name: 'Burger',
      img: Burger,
      Description: 'This is one of the most grand, entertaining and delicious dishes cooked in Iraq.',
      ingredients: ['Tomato ', 'Meat ', 'Potato'],
      How: [
        "Soak the rice for 30 minutes.Rinse thoroughly and drain.",
        "Place the rice in a saucepan and pour enough water that it comes up to just less than covering it.",
        "Season with salt and turmeric.Stir gently so all the grains are covered.",
        "Bring to a gentle simmer and keep the lid on.Do not touch it for 20 - 25 minutes.The rice should have absorbed all of the water and take on a yellow colour.Don’t be frightened to over- cook the rice – that’s a good thing.",
        "Once the liquid is absorbed, turn the heat off.Keep the rice covered.Leave to cool.",
      ]
    },
    {
      Type: 'Western',
      Name: 'Stake',
      img: Stake,
      Description: 'This is one of the most grand, entertaining and delicious dishes cooked in Iraq.',
      ingredients: ['Meat ', 'Potato'],
      How: [
        "Soak the rice for 30 minutes.Rinse thoroughly and drain.",
        "Place the rice in a saucepan and pour enough water that it comes up to just less than covering it.",
        "Season with salt and turmeric.Stir gently so all the grains are covered.",
        "Bring to a gentle simmer and keep the lid on.Do not touch it for 20 - 25 minutes.The rice should have absorbed all of the water and take on a yellow colour.Don’t be frightened to over- cook the rice – that’s a good thing.",
        "Once the liquid is absorbed, turn the heat off.Keep the rice covered.Leave to cool.",
      ]
    },
    {
      Type: 'Western',
      Name: 'Pizza',
      img: Pizza,
      Description: 'This is one of the most grand, entertaining and delicious dishes cooked in Iraq.',
      ingredients: ['Tomato', 'Potato', 'Onion', 'Olive Oil', 'Eggs', 'Milk'],
      How: [
        "Soak the rice for 30 minutes.Rinse thoroughly and drain.",
        "Place the rice in a saucepan and pour enough water that it comes up to just less than covering it.",
        "Season with salt and turmeric.Stir gently so all the grains are covered.",
        "Bring to a gentle simmer and keep the lid on.Do not touch it for 20 - 25 minutes.The rice should have absorbed all of the water and take on a yellow colour.Don’t be frightened to over- cook the rice – that’s a good thing.",
        "Once the liquid is absorbed, turn the heat off.Keep the rice covered.Leave to cool.",
      ]
    },
  ];

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage Recipes={Recipes} />} />
        <Route path="/Kitchen" element={<Kitchen />} />
        <Route path='/PopularRecipes' element={<PopularRecipes Recipes={Recipes} />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/ContactUs' element={<Footer />} />
        <Route path='/Food' element={<Food ingredients={ingredients} Recipes={Recipes} />} />
        <Route path='/recipe/:recipeName' element={<RecipeDetails Recipes={Recipes} />} />
      </Routes>
    </div>
  );
}

export default App;
