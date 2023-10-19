import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../ComponentsStyle/MainPage.css';
import Kitchen from './Kitchen';
import bg from '../../Assests/Dish.jpg';
import Footer from '../Footer/Footer';

export default function MainPage({ Recipes }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (query) => {
        setSearchQuery(query);
        const queryLowerCase = query.toLowerCase();

        const results = query === '' ? [] : Recipes.filter((recipe) => {
            const name = recipe.Name;
            return name && name.toLowerCase().startsWith(queryLowerCase);
        });

        setSearchResults(results);
    };

    return (
        <div>
            <div className="body">
                <center>
                    <div className="title">
                        <p>Let's Cook as CHEF!</p>
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder="Search for Recipe"
                                value={searchQuery}
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='recipe'>
                        {
                            searchResults.length > 0 && (
                                <div className="search-results">
                                    {
                                        searchResults.map((result, index) => (
                                            <Link to={`/recipe/${result.Name}`} key={index} style={{ textDecoration: 'none' }}> {/* Add Link here */}
                                                <div className="search-result-card">
                                                    <h4 style={{ paddingBottom: '0px', margin: '0px', marginTop: '15px' }}>{result.Name}</h4>
                                                </div>
                                            </Link>
                                        ))
                                    }
                                </div>
                            )
                        }
                    </div>
                </center>
                <div className="bg">
                    <img src={bg} alt="bg" />
                </div>
            </div>
            <Kitchen />
            <Footer />
        </div>
    );
}
