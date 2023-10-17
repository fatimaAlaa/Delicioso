// import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../../ComponentsStyle/Kitchen.css'
export default function Kitchen() {
    return (
        // <Link className='link' to={'/Kitchen'}>
        <center>
            <div className='kitchen'>
                <h1>Choose Kitchen</h1>
            </div>
            <div className='cards'>
                <Link to='/Food' className='Foodlink'>
                    <p className='card' id='Eastern'><span>Eastern Recipes</span></p>
                </Link>
                <p className='card' id='Western'><span>Western Recipes</span></p>
            </div>
        </center>
        // </Link>
    )
}