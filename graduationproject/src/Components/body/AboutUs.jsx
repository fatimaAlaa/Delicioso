import chef from '../../Assests/chef.jpg'
import '../../ComponentsStyle/aboutUs.css'
export default function AboutUs() {
    return (
        <div className='aboutUs'>
            <div className='aboutUstitle'>
                <h1>Helping You To Be a Chef at Your Own House</h1>
                <p>
                    Welcome to our culinary world! At Delicioso, we're passionate about bringing you a delightful cooking experience like no other. We understand that sometimes the best meals are created from the ingredients you already have in your kitchen. That's why we've crafted a unique platform where you can select your preferred ingredients, and we'll provide you with a handpicked selection of recipes tailored to your choices.
                    Our goal is to empower both novice and experienced chefs with the tools and inspiration they need to create mouthwatering dishes, all while reducing food waste. Whether you're seeking a quick weeknight dinner, experimenting with a new cuisine, or making the most of leftovers, we're here to guide you on your culinary journey.
                    {/* Our diverse collection of recipes spans the globe, ensuring you'll find something to satisfy your cravings, no matter your dietary preferences. From comforting classics to innovative creations, Delicioso is your go-to resource for cooking up a storm in your own kitchen.
                    Explore our website, select your favorite ingredients, and embark on a flavorful adventure. Get ready to uncover a world of culinary possibilities right at your fingertips! */}
                </p>
            </div>
            <div className='chef'>
                <img src={chef} alt="chef" />
            </div>

        </div>
    )
}
