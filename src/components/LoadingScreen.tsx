import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            if (onComplete) onComplete();
        }, 2500);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                    className="fixed inset-0 z-[9999] bg-bg-deep flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Background Glow */}
                    <div className="absolute w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full"></div>

                    {/* Spider Drop Animation */}
                    <div className="relative">
                        {/* The Web Thread */}
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "40vh" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="absolute bottom-full left-1/2 -translate-x-1/2 w-px bg-gradient-to-t from-primary/60 to-transparent"
                        />

                        {/* The Spider */}
                        <motion.div
                            initial={{ y: -400, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ 
                                y: { duration: 1.5, ease: [0.23, 1, 0.32, 1] },
                                opacity: { duration: 0.5 }
                            }}
                            className="relative"
                        >
                            <svg width="80" height="80" viewBox="0 0 100 100" className="text-primary fill-current">
                                <circle cx="50" cy="50" r="15" className="opacity-80" />
                                <circle cx="50" cy="35" r="10" />
                                {/* Legs */}
                                {[0, 1, 2, 3].map((i) => (
                                    <React.Fragment key={i}>
                                        <motion.path
                                            d={`M ${50 + 10} ${50 + (i-1.5)*10} Q ${80} ${50 + (i-1.5)*15} ${90} ${50 + (i-1.5)*5}`}
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            animate={{ d: [
                                                `M ${50 + 10} ${50 + (i-1.5)*10} Q ${80} ${50 + (i-1.5)*15} ${90} ${50 + (i-1.5)*5}`,
                                                `M ${50 + 10} ${50 + (i-1.5)*10} Q ${85} ${50 + (i-1.5)*20} ${95} ${50 + (i-1.5)*10}`
                                            ]}}
                                            transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse", delay: i*0.1 }}
                                        />
                                        <motion.path
                                            d={`M ${50 - 10} ${50 + (i-1.5)*10} Q ${20} ${50 + (i-1.5)*15} ${10} ${50 + (i-1.5)*5}`}
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            animate={{ d: [
                                                `M ${50 - 10} ${50 + (i-1.5)*10} Q ${20} ${50 + (i-1.5)*15} ${10} ${50 + (i-1.5)*5}`,
                                                `M ${50 - 10} ${50 + (i-1.5)*10} Q ${15} ${50 + (i-1.5)*20} ${5} ${50 + (i-1.5)*10}`
                                            ]}}
                                            transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse", delay: i*0.1 }}
                                        />
                                    </React.Fragment>
                                ))}
                            </svg>
                        </motion.div>
                    </div>

                    {/* Text Identity */}
                    <div className="mt-12 text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                            className="text-2xl font-heading font-black tracking-tighter text-white uppercase"
                        >
                            Spider <span className="text-primary italic">Media</span>
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 120 }}
                            transition={{ delay: 1.5, duration: 1 }}
                            className="h-px bg-primary/30 mx-auto mt-2"
                        />
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            transition={{ delay: 1.8 }}
                            className="text-[10px] uppercase tracking-[0.4em] text-white mt-3"
                        >
                            Weaving Digital Magic
                        </motion.p>
                    </div>

                    {/* Progress Bar */}
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent"
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
