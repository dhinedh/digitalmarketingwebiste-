import { useState } from 'react';
import { Play, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const categories = ['All', 'Restaurant', 'Product', 'Real Estate', 'Fashion', 'AI Animation'];

    const projects = [
        { title: "Gourmet Garden", category: "Restaurant", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1470&auto=format&fit=crop" },
        { title: "Luxe Timepieces", category: "Product", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop" },
        { title: "Modern Estates", category: "Real Estate", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1373&auto=format&fit=crop" },
        { title: "Urban Vibe", category: "Fashion", img: "https://images.unsplash.com/photo-1445205170230-053b830c6050?q=80&w=1471&auto=format&fit=crop" },
        { title: "Digital Future", category: "AI Animation", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470&auto=format&fit=crop" },
        { title: "The Spice Hub", category: "Restaurant", img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1470&auto=format&fit=crop" },
    ];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <section id="portfolio" className="relative overflow-hidden">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-20"
                >
                    <div className="max-w-2xl text-center md:text-left">
                        <div className="section-label">Case Studies</div>
                        <h2 className="heading-lg mb-8">
                            Our <span className="text-gradient font-serif italic">Cinematic</span> Archive
                        </h2>
                        <p className="text-lg text-muted">
                            A curated selection of our favorite projects across various industries. Each one a testament to storytelling.
                        </p>
                    </div>
                </motion.div>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-16">
                    {categories.map((cat) => (
                        <motion.button
                            key={cat}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-8 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase border transition-all duration-500 ${activeFilter === cat
                                ? 'bg-primary text-bg-deep border-primary shadow-glow'
                                : 'bg-glass border-glass-border text-white/60 hover:border-primary hover:text-primary'
                                }`}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                key={project.title}
                                className="group relative rounded-[32px] overflow-hidden aspect-square cursor-pointer glass-card p-2"
                            >
                                <div className="relative w-full h-full rounded-[24px] overflow-hidden">
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.8 }}
                                        src={project.img}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>

                                    <div className="absolute inset-x-8 bottom-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-2">{project.category}</p>
                                        <h3 className="text-2xl font-heading font-bold mb-6 text-white leading-none">{project.title}</h3>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3 text-white/60 group-hover:text-white transition-colors">
                                                <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-md border border-primary/20 flex items-center justify-center text-primary">
                                                    <Play size={16} className="fill-current ml-0.5" />
                                                </div>
                                                <span className="text-xs font-bold uppercase tracking-widest">Watch Story</span>
                                            </div>
                                            <ArrowUpRight className="text-white/20 group-hover:text-primary transition-colors" size={24} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/2 blur-[200px] -z-10 pointer-events-none"></div>
        </section>
    );
};

export default Portfolio;
