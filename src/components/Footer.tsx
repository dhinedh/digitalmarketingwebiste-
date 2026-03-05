import { Link } from 'react-router-dom';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <div className="footer-top">
                    <div className="footer-brand-col">
                        <Link to="/" className="footer-logo">Spider<span>Media</span></Link>
                        <p>The production-led digital agency creating culture and delivering growth in Chennai and beyond.</p>
                        <div className="social-row">
                            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
                            <a href="#" aria-label="WhatsApp"><MessageCircle size={18} /></a>
                        </div>
                    </div>

                    <div className="footer-links-col">
                        <h4>Services</h4>
                        <Link to="/services">Production House</Link>
                        <Link to="/services">Social Strategy</Link>
                        <Link to="/services">Performance Ads</Link>
                        <Link to="/services">Brand Identity</Link>
                    </div>

                    <div className="footer-links-col">
                        <h4>Company</h4>
                        <Link to="/about">About Us</Link>
                        <Link to="/portfolio">Portfolio</Link>
                        <a href="#">Kanchi360</a>
                        <Link to="/contact">Contact</Link>
                    </div>

                    <div className="footer-cta-col">
                        <h4>Ready to scale?</h4>
                        <p>Let's build something remarkable for your brand.</p>
                        <Link to="/contact" className="btn-primary">Start a Project</Link>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Spider Media. All rights reserved.</p>
                    <p>Chennai, Tamil Nadu · India</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
