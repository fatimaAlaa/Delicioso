import '../../ComponentsStyle/MainPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Kitchen from './Kitchen';
// import { Route } from 'react-router-dom';
import bg from '../../Assests/Dish.jpg'
import PopularRecipes from './Recipes';
import Contact from './Contact';
import { Route, Router } from 'react-router-dom';
export default function MainPage() {
    return (
        <div>
            <div className='body'>
                <center>
                    <div className='title'>
                        <p>Let's Cook as CHEF!</p>
                        <div className='search-container'>
                            <FontAwesomeIcon icon={faSearch} className='search-icon' />
                            <input type="text" placeholder='Search for Recipe' />
                        </div>
                    </div>
                </center>

                <div className='bg'>
                    <img src={bg} alt="bg" />
                </div>
            </div>
            <Kitchen />
            <PopularRecipes />
            <Contact />
        </div>
    )
}