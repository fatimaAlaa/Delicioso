import '../../ComponentsStyle/Footer.css'
import insta from '../../Assests/instagram.png'
import linkedin from '../../Assests/linkedin.png'
import React, { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // You can implement the email submission logic here, for example, using an API.
        // For simplicity, we'll just display the submitted email and message in this example.

        console.log('Submitted Email:', email);
        console.log('Submitted Message:', message);

        // You can add code to send the email to your specified address (fatimaalgburi@gmail.com).

        // Clear the form fields after submission.
        setEmail('');
        setMessage('');
    };

    return (
        <footer className='footer'>
            <center>
                <div className="footer-content">
                    <div className='title'>
                        <h2 >Contact Us</h2>
                        <p>Didn't find your recipe? Let us know</p>
                        <center>
                            <div className='icons'>
                                <div>
                                    <img src={insta} alt="" />
                                    <img src={linkedin} alt="" />
                                </div>
                            </div>
                        </center>

                    </div>
                    <form onSubmit={handleSubmit} >
                        <div className="form-group">
                            <label htmlFor="email">Your Email:</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                placeholder="Your Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className='submit'>Submit</button>
                    </form>
                </div>
            </center>

        </footer>
    );
};

export default Footer;
