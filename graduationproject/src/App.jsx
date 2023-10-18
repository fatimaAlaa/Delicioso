import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Nabbar/navbar";
import { AboutUs, ContactUs } from "./Components/Nabbar/navbar_elements";
import MainPage from './Components/body/MainPage';
import Kitchen from "./Components/body/Kitchen";
import PopularRecipes from "./Components/body/Recipes";
import Food from "./Components/body/Food";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/Kitchen' element={<Kitchen />} />
        <Route path='/PopularRecipes' element={<PopularRecipes />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/ContactUs' element={<Footer />} />
        <Route path='/Food' element={<Food />} />
      </Routes>
    </div>
  );
}

export default App;
