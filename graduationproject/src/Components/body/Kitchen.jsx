import { Link } from 'react-router-dom';
import '../../ComponentsStyle/Kitchen.css';

export default function Kitchen() {
    return (
        <center>
            <div className='kitchen'>
                <h1>Choose Kitchen</h1>
            </div>
            <div className='cards'>
                <Link to="/Food?type=Eastern" className='Foodlink'>
                    <div className='card' id='Eastern'><span>Eastern Recipes</span></div>
                </Link>
                <Link to="/Food?type=Western" className='Foodlink'>
                    <div className='card' id='Western'><span>Western Recipes</span></div>
                </Link>
            </div>
        </center>
    );
}
