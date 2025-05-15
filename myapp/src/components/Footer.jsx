import React from 'react';
import './Footer.css'; // Import the CSS for styling
import logo from '../Assets/logo3.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="Logo" />
                    <h3>MISRAQ TECH</h3> {/* Replace with your logo path */}
                </div>
                <div className="footer-text">
                    <button className="contact-button">Contact us</button>
                </div>
            </div>
            <div className="footer-links">
                <div className="footer-section">
                    <h4>Customers</h4>
                    <p>Buyer</p>
                    <p>Supplier</p>
                </div>
                <div className="footer-section">
                    <h4>Company</h4>
                    <p>About us</p>
                    <p>Careers</p>
                    <p>Contact us</p>
                </div>
                <div className="footer-section">
                    <h4>Further Information</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
                <div className="footer-section">
                    <h4>Follow us</h4>
                    <div className="social-icons">
                        {/* Add your social media icons here */}
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Instagram</a>
                    </div>
                </div>
  
            </div>
            <div>
            <p className='copyRight_TXT'>© 2025 NatanElectronics</p>
            </div>
          

        </footer>
    );
};

export default Footer;