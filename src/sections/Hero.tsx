import { Play, Calendar, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="hero-section overflow-hidden">
            <div className="bg-mesh"></div>
            <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="section-label"
                    >
                        Next-Gen Media Production
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="heading-xl mb-6 max-w-4xl"
                    >
                        We Weave <br />
                        <span className="text-gradient font-serif italic">Digital Magic</span><br />
                        Into Reality.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg text-muted mb-12 max-w-xl mx-auto lg:mx-0"
                    >
                        Spider Media Studio delivers cinematic video production, AI-powered marketing, and high-end commercial content that captures attention and converts.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6"
                    >
                        <motion.a
                            href="/services"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-premium w-full sm:w-auto justify-center"
                        >
                            Explore Services <ArrowRight size={20} />
                        </motion.a>
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-outline w-full sm:w-auto justify-center"
                        >
                            <Calendar size={18} className="text-primary" />
                            Schedule Session
                        </motion.a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-8 mt-16 opacity-60"
                    >
                        {[
                            { icon: <ShieldCheck size={16} />, text: "Premium Quality" },
                            { icon: <Zap size={16} />, text: "Fast Delivery" },
                            { icon: <Globe size={16} />, text: "Global Standards" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white">
                                <span className="text-primary">{item.icon}</span> {item.text}
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="flex-1 hero-visual w-full max-w-2xl"
                >
                    <div className="glass-card p-4 aspect-[4/3] relative overflow-hidden group">
                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.8 }}
                            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1470&auto=format&fit=crop"
                            alt="Creative Production"
                            className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-transparent opacity-60"></div>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-20 h-20 rounded-full flex items-center justify-center bg-primary/20 backdrop-blur-xl border border-primary/40 text-primary shadow-glow group"
                            >
                                <Play className="fill-current ml-1" size={32} />
                            </motion.button>
                        </div>

                        <div className="absolute bottom-8 left-8 right-8">
                            <div className="glass-card p-4 rounded-2xl border-white/10 backdrop-blur-3xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold bg-primary text-bg-deep italic">S</div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-primary font-black">Featured Project</p>
                                        <p className="text-sm font-bold text-white">Spider AI-VFX Demo 2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Badges */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-12 -right-8 glass-card p-6 flex flex-col items-center justify-center border-primary/20 z-20"
                    >
                        <p className="text-4xl font-black text-primary tracking-tighter">5.0</p>
                        <p className="text-[8px] uppercase font-bold tracking-widest text-white/60">Top Rated</p>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-10 -left-10 glass-card p-6 border-white/10 z-20"
                    >
                        <p className="text-3xl font-black text-white italic tracking-tighter">500+</p>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-primary">Projects Delivered</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
