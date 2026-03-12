import { Film, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const SingleReel = () => {
    return (
        <section id="single-reel" className="relative py-32 overflow-hidden">
            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-card p-12 lg:p-24 overflow-hidden relative group"
                >
                    {/* Decorative Background Icon */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] scale-[4] group-hover:rotate-12 transition-transform duration-[3s] pointer-events-none">
                        <Film size={200} />
                    </div>

                    <div className="max-w-3xl mx-auto text-center relative z-10">
                        <motion.div
                            whileHover={{ rotate: 15, scale: 1.1 }}
                            className="w-20 h-20 bg-primary-soft border border-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-10 transition-transform duration-500"
                        >
                            <Film className="text-primary" size={32} />
                        </motion.div>

                        <h2 className="heading-lg mb-8">The <span className="text-gradient font-serif italic">Single Reel</span> Special</h2>

                        <p className="text-xl text-muted mb-12 leading-relaxed">
                            Need just one viral-ready piece of content? Get a professional-grade shoot and edit tailored specifically for your brand identity. Perfect for launches, events, or a profile refresh.
                        </p>

                        <div className="inline-flex flex-col items-center">
                            <div className="flex items-baseline gap-3 mb-10">
                                <span className="text-muted text-xl uppercase tracking-widest font-bold">Limited Offer</span>
                                <span className="text-7xl md:text-8xl font-black text-white tracking-tighter shadow-glow">₹2,500</span>
                            </div>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#contact"
                                className="btn-premium px-12 py-5 text-sm"
                            >
                                Claim Offer Now
                                <ArrowRight className="ml-3" size={20} />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SingleReel;
