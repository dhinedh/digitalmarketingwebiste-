import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className={`nav-wrap ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="nav-inner flex justify-between items-center"
                >
                    <Link to="/" className="flex items-center gap-3 group/logo">
                        <div className="relative">
                            {/* The Web Thread for the logo */}
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: 20 }}
                                className="absolute bottom-full left-1/2 -translate-x-1/2 w-px bg-primary/40 group-hover/logo:h-32 transition-all duration-700"
                            />
                            <motion.div
                                whileHover={{ y: 5, rotate: 5 }}
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-xl bg-primary text-bg-deep shadow-glow relative z-10"
                            >
                                S
                            </motion.div>
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="font-heading font-black text-lg uppercase tracking-tighter text-white group-hover/logo:text-primary transition-colors">Spider</span>
                            <span className="font-bold text-[8px] uppercase tracking-[0.3em] text-primary">Media Studio</span>
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <div className="nav-links">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.href}
                                    className={({ isActive }) => 
                                        `nav-link ${isActive ? 'active' : ''}`
                                    }
                                >
                                    <motion.span whileHover={{ y: -2 }}>
                                        {link.name}
                                    </motion.span>
                                </NavLink>
                            ))}
                        </div>
                        <Link to="/contact">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-premium py-2.5 px-6 text-sm flex items-center gap-2"
                            >
                                Start Project <ArrowRight size={14} />
                            </motion.div>
                        </Link>
                    </div>

                    <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </motion.div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[2000] bg-bg-deep/95 backdrop-blur-2xl flex flex-col items-center justify-center p-8"
                    >
                        <button className="absolute top-8 right-8 text-white" onClick={() => setIsOpen(false)}>
                            <X size={32} />
                        </button>
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link, i) => (
                                <NavLink
                                    key={link.name}
                                    to={link.href}
                                    className={({ isActive }) => 
                                        `text-4xl font-heading font-bold text-white hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
                                    }
                                    onClick={() => setIsOpen(false)}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        {link.name}
                                    </motion.div>
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
