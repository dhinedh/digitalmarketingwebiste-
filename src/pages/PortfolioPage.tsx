import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Play, Maximize2, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    {
        id: 1,
        title: "Nike: The Future of Run",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop",
        description: "A high-octane commercial film showcasing the next generation of athletic gear."
    },
    {
        id: 2,
        title: "Zenith AI Branding",
        category: "Marketing",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1374&auto=format&fit=crop",
        description: "Full brand identity and AI-powered marketing suite for a tech startup."
    },
    {
        id: 3,
        title: "Etherial Web Platform",
        category: "Creative IT",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1426&auto=format&fit=crop",
        description: "A futuristic web experience with immersive animations and seamless UX."
    },
    {
        id: 4,
        title: "Nebula Music Video",
        category: "Visual Effects",
        image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1470&auto=format&fit=crop",
        description: "Cutting-edge VFX and CGI for a world-renowned electronic artist."
    },
    {
        id: 5,
        title: "Luxe Estate Virtual Tour",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop",
        description: "Cinematic real estate tour utilizing drone footage and 3D overlays."
    },
    {
        id: 6,
        title: "Pulse Social Campaign",
        category: "Marketing",
        image: "https://images.unsplash.com/photo-1557838923-29852e44cb23?q=80&w=1631&auto=format&fit=crop",
        description: "Viral social content strategy that tripled engagement within 3 months."
    }
];

const categories = ["All", "Commercial", "Marketing", "Visual Effects", "Creative IT"];

const PortfolioPage = () => {
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All" 
        ? projects 
        : projects.filter(p => p.category === filter);

    return (
        <div className="bg-bg-deep pt-32 pb-24 min-h-screen">
            <div className="container relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="section-label mx-auto justify-center mb-6"
                    >
                        Our Masterpieces
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-heading-lg sm:heading-xl mb-8"
                    >
                        Crafting <span className="text-gradient italic">Visual Legacies</span>.
                    </motion.h1>
                    
                    {/* Filters */}
                    <div className="flex overflow-x-auto pb-4 sm:pb-0 sm:flex-wrap justify-start sm:justify-center gap-4 mt-12 no-scrollbar px-4 sm:px-0">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 border whitespace-nowrap ${
                                    filter === cat 
                                    ? "bg-primary text-bg-deep border-primary shadow-glow" 
                                    : "bg-white/5 text-white/60 border-white/10 hover:border-primary/50"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Portfolio Grid */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                onMouseMove={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                                    e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                                    e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
                                }}
                                className="glass-card p-4 h-full group flex flex-col"
                            >
                                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-bg-deep/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 p-4">
                                        <button className="w-12 h-12 rounded-full bg-primary text-bg-deep flex items-center justify-center hover:scale-110 transition-transform">
                                            <Play size={20} fill="currentColor" />
                                        </button>
                                        <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl text-white flex items-center justify-center hover:scale-110 transition-transform border border-white/30">
                                            <Maximize2 size={20} />
                                        </button>
                                    </div>
                                    <div className="absolute top-4 left-4">
                                        <span className="px-4 py-1.5 rounded-full bg-primary/90 text-bg-deep text-[10px] font-black uppercase tracking-widest">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="px-2 pb-2 flex-grow">
                                    <h3 className="text-xl font-heading font-black mb-2 text-white group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted text-sm line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="mt-6 px-2">
                                    <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:gap-4 transition-all">
                                        View Project <ExternalLink size={12} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Final CTA */}
                <div className="web-divider"></div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 text-center"
                >
                    <p className="text-muted mb-8 italic">Don't just take our word for it. Let's build your next masterpiece.</p>
                    <Link to="/contact" className="btn-premium">
                        Start Your Story <ArrowRight size={20} />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default PortfolioPage;
