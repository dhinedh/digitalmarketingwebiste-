import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Arun Kumar",
            role: "Restaurant Owner",
            text: "Spider Media helped our restaurant reels reach over 1 million views. Their team is highly professional and their creative vision is outstanding.",
            rating: 5
        },
        {
            name: "Sarah Jen",
            role: "Marketing Director",
            text: "Excellent production quality and creative ideas. We've seen a 40% increase in brand engagement since working with them. Highly recommended!",
            rating: 5
        },
        {
            name: "Suresh Raina",
            role: "E-commerce Founder",
            text: "The AI & VFX videos they produced for our launch were mind-blowing. They really understand modern marketing trends and digital aesthetics.",
            rating: 5
        }
    ];

    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((current + 1) % testimonials.length);
    const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

    useEffect(() => {
        const timer = setInterval(next, 6000);
        return () => clearInterval(timer);
    }, [current]);

    return (
        <section id="testimonials" className="relative py-24 overflow-hidden">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="section-label mx-auto">Client Love</div>
                    <h2 className="heading-lg">
                        Trusted by <span className="text-gradient font-serif italic">Visionaries</span>
                    </h2>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className="glass-card p-1"
                        >
                            <div className="bg-primary-soft p-8 md:p-16 rounded-[32px] relative overflow-hidden">
                                <Quote className="text-primary/10 absolute top-8 left-8" size={80} />

                                <div className="relative z-10 text-center flex flex-col items-center">
                                    <div className="flex justify-center gap-2 mb-10">
                                        {[...Array(testimonials[current].rating)].map((_, i) => (
                                            <Star key={i} size={20} className="fill-primary text-primary" />
                                        ))}
                                    </div>

                                    <p className="text-2xl md:text-3xl font-heading font-medium text-white italic mb-12 leading-relaxed max-w-3xl">
                                        "{testimonials[current].text}"
                                    </p>

                                    <div className="flex flex-col items-center">
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center font-black text-3xl text-bg-deep mb-6 italic shadow-glow"
                                        >
                                            {testimonials[current].name.charAt(0)}
                                        </motion.div>
                                        <h4 className="text-2xl font-heading font-bold text-white mb-2">{testimonials[current].name}</h4>
                                        <p className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">{testimonials[current].role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Controls */}
                    <div className="flex justify-center items-center mt-12 gap-8">
                        <motion.button
                            whileHover={{ scale: 1.1, x: -5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prev}
                            className="w-14 h-14 rounded-full glass-card border-glass-border flex items-center justify-center text-white/60 hover:text-primary transition-all"
                        >
                            <ChevronLeft size={24} />
                        </motion.button>

                        <div className="flex gap-3">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`h-2 rounded-full transition-all duration-500 ${current === i ? 'w-10 bg-primary shadow-glow' : 'w-2 bg-white/20 hover:bg-white/40'
                                        }`}
                                />
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1, x: 5 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={next}
                            className="w-14 h-14 rounded-full glass-card border-glass-border flex items-center justify-center text-white/60 hover:text-primary transition-all"
                        >
                            <ChevronRight size={24} />
                        </motion.button>
                    </div>
                </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/2 blur-[150px] -z-10"></div>
        </section>
    );
};

export default Testimonials;
