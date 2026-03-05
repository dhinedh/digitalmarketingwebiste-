import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => { setMobileMenuOpen(false); }, [location]);

    const links = [
        { to: '/', label: 'Home' },
        { to: '/services', label: 'Services' },
        { to: '/portfolio', label: 'Portfolio' },
        { to: '/about', label: 'About Us' },
    ];

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container nav-container">
                    <Link to="/" className="brand-logo">
                        Spider<span className="logo-accent">Media</span>
                    </Link>

                    <div className="nav-links">
                        {links.map(l => (
                            <Link key={l.to} to={l.to} className={`nav-link ${location.pathname === l.to ? 'active' : ''}`}>
                                {l.label}
                            </Link>
                        ))}
                    </div>

                    <Link to="/contact" className="btn-primary nav-cta">Let's Talk</Link>

                    <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
                <div className="drawer-links">
                    {links.map(l => (
                        <Link key={l.to} to={l.to} className="drawer-link">{l.label}</Link>
                    ))}
                    <Link to="/contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>Let's Talk</Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
