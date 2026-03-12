import { Mic, Lightbulb, Video, Thermometer, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const StudioRental = () => {
    return (
        <section id="studio" className="relative py-24 overflow-hidden">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="section-label">Our Space</div>
                        <h2 className="heading-lg mb-8">
                            Premium <span className="text-gradient font-serif italic">Studio</span> Rental
                        </h2>
                        <p className="text-lg text-muted mb-10">
                            Need a professional space for your own project? Our studio is equipped with everything you need to create high-end content.
                        </p>

                        <div className="glass-card mb-10 p-1 relative overflow-hidden group">
                            <div className="bg-primary-soft p-8 rounded-[24px]">
                                <p className="text-primary text-[10px] uppercase font-black tracking-widest mb-2">Starting Price</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-black text-white tracking-tighter shadow-glow">₹2,000</span>
                                    <span className="text-lg text-muted font-medium">/ hour</span>
                                </div>
                            </div>
                        </div>

                        <ul className="space-y-5 mb-12 list-none">
                            {[
                                { icon: <Thermometer size={18} />, text: "Fully Air-Conditioned Studio" },
                                { icon: <Lightbulb size={18} />, text: "Professional Lighting Setup" },
                                { icon: <Mic size={18} />, text: "High-End Microphones" },
                                { icon: <Video size={18} />, text: "Video Production Equipment" }
                            ].map((item, i) => (
                                <motion.li
                                    whileHover={{ x: 10 }}
                                    key={i}
                                    className="flex items-center gap-4 text-white/80 font-medium"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-primary-soft flex items-center justify-center text-primary border border-primary/10">
                                        {item.icon}
                                    </div>
                                    {item.text}
                                </motion.li>
                            ))}
                        </ul>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="btn-premium px-10 py-4 text-sm"
                        >
                            Reserve Studio
                            <ArrowRight className="ml-3" size={18} />
                        </motion.a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-[40px] overflow-hidden border border-primary/20 shadow-glow aspect-[4/5] md:aspect-square">
                            <img
                                src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1470&auto=format&fit=crop"
                                alt="Professional Studio"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/80 via-transparent to-transparent"></div>
                        </div>
                        <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default StudioRental;
