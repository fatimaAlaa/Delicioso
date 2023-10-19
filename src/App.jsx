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
import Potato from './Assests/potato.png';
import Meat from './Assests/meat.png';
import Eggs from './Assests/eggs.png';
import Milk from './Assests/milk.png';
import Fish from './Assests/fish.png';
import Macaroni from './Assests/macaroni.png';
import Oil from './Assests/cooking-oil.png';
import OliveOil from './Assests/olive-oil.png';
import FishDish from './Assests/fishDish.png';
import macaroniDish from './Assests/macaroniDish.jpg'
import maklama from './Assests/maklama.jpg'

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
  ];

  const Recipes = [
    {
      Type: 'Eastern',
      Name: 'Dolma',
      img: food,
      Description: 'This is one of the most grand, entertaining and delicious dishes cooked in Iraq.',
      ingredients: ['Tomato ', 'Onion ', 'Meat ', 'Oil'],
    },
    {
      Type: 'Western',
      Name: 'Fish',
      img: FishDish,
      Description: 'This is one of the most grand, entertaining and delicious dishes cooked in Iraq.',
      ingredients: ['Fish ', 'Oil'],
    },
    {
      Type: 'Western',
      Name: 'Macaroni',
      img: macaroniDish,
      Description: 'This is one of the most grand, entertaining and delicious dishes cooked in Iraq.',
      ingredients: ['Macaroni ', 'Onion ', 'Meat '],
    },
    {
      Type: 'Western',
      Name: 'Maklama',
      img: maklama,
      Description: 'This is one of the most grand, entertaining and delicious dishes cooked in Iraq.',
      ingredients: ['Eggs ', 'Tomato ', 'Olive Oil'],
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
