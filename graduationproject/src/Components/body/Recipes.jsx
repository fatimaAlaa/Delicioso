import React, { useState } from 'react';
import '../../ComponentsStyle/Recipes.css'
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import food from '../../Assests/dolma.jpg'

const PopularRecipes = ({ recipes }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      <center>
        <div
          className="popularRecipes"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {
            /* <Slider {...sliderSettings}>
            {recipes.map((recipe, index) => (
              <div key={index} className="recipe-card">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
              </div>
            ))}
              </Slider> */
          }
          <h1>Popular Recipes</h1>
        </div>
      </center>
      <div className='cardss'>
        <div className='cardd'>
          <div className='image'><img src={food} alt="" /></div>
          <p>Dolam</p>
          <button className='button'>View Recipe</button>
        </div>
        <div className='cardd'>
          <div className='image'><img src={food} alt="" /></div>
          <p>Dolam</p>
          <button className='button'>View Recipe</button>
        </div>
        <div className='cardd'>
          <div className='image'><img src={food} alt="" /></div>
          <p>Dolam</p>
          <button className='button'>View Recipe</button>
        </div>
        <div className='cardd'>
          <div className='image'><img src={food} alt="" /></div>
          <p>Dolam</p>
          <button className='button'>View Recipe</button>
        </div>
        <div className='cardd'>
          <div className='image'><img src={food} alt="" /></div>
          <p>Dolam</p>
          <button className='button'>View Recipe</button>
        </div>
      </div>
    </div>
  );
};

export default PopularRecipes;
