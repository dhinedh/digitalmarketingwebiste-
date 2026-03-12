
import { Instagram, Facebook, Youtube, Linkedin, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative pt-24 pb-12 overflow-hidden border-t border-glass-border">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
                    <div className="lg:col-span-5">
                        <div className="flex items-center gap-3 mb-8">
                            <motion.div
                                whileHover={{ rotate: 12, scale: 1.1 }}
                                className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-bg-deep font-black text-2xl shadow-glow"
                            >
                                S
                            </motion.div>
                            <span className="text-2xl font-heading font-black tracking-tighter text-white uppercase italic">
                                Spider <span className="text-primary">Media</span>
                            </span>
                        </div>
                        <p className="text-muted text-lg mb-10 max-w-md">
                            We bridge the gap between creative storytelling and technical innovation, crafting cinematic experiences that command attention.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Youtube, Facebook, Linkedin].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -5, borderColor: '#d4af37', color: '#d4af37' }}
                                    className="w-12 h-12 rounded-full glass-card border-glass-border flex items-center justify-center text-muted transition-all"
                                >
                                    <Icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8">Navigation</h4>
                        <ul className="space-y-4 list-none">
                            {['Home', 'Services', 'Commercial', 'Portfolio', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-muted hover:text-primary transition-colors font-medium text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8">Solutions</h4>
                        <ul className="space-y-4 list-none">
                            {['Academy', 'IT Solutions', 'BPO Services', 'VFX Studio'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-muted hover:text-primary transition-colors font-medium text-sm">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8">Newsletter</h4>
                        <p className="text-muted text-sm mb-6">Stay updated with our latest cinematic releases and tech insights.</p>
                        <div className="relative group">
                            <input type="email" placeholder="Enter email" className="w-full bg-white/5 border border-glass-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all text-sm" />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="absolute right-2 top-2 bottom-2 px-4 rounded-lg bg-primary text-bg-deep font-black text-[10px] uppercase tracking-widest"
                            >
                                Join
                            </motion.button>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-glass-border flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-muted text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
                        © {new Date().getFullYear()} Spider Media Studio. All rights reserved.
                    </p>
                    <motion.button
                        whileHover={{ y: -5 }}
                        onClick={scrollToTop}
                        className="flex items-center gap-3 text-primary text-[10px] font-black uppercase tracking-widest group"
                    >
                        Back to Top
                        <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/2 blur-[100px] rounded-full -z-10"></div>
        </footer>
    );
};

export default Footer;
