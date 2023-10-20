import '../../ComponentsStyle/Footer.css'
import insta from '../../Assests/instagram.png'
import linkedin from '../../Assests/linkedin.png'
import React, { useState } from 'react';

export default function Footer(){
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Submitted Email:', email);
        console.log('Submitted Message:', message);

        setEmail('');
        setMessage('');
    };

    return (
        <footer className='footer' id='ContactUs'>
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

