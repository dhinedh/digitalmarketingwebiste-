import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
    title: string;
    description: string;
    price?: string;
    icon?: React.ReactNode;
    highlights?: string[];
    ctaText?: string;
    onCtaClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    description,
    price,
    icon,
    highlights,
    ctaText,
    onCtaClick
}) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="glass-card flex flex-col h-full group"
        >
            <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-primary-soft text-primary border border-primary/20 transition-all duration-500 group-hover:bg-primary group-hover:text-bg-deep group-hover:rotate-6">
                    {icon}
                </div>
            </div>

            <h3 className="text-2xl font-heading font-bold mb-4 text-white group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-muted text-sm mb-8 flex-grow">{description}</p>

            {highlights && (
                <ul className="mb-8 space-y-3 list-none">
                    {highlights.map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-xs font-medium text-white/70">
                            <CheckCircle2 size={14} className="text-primary/60" />
                            {item}
                        </li>
                    ))}
                </ul>
            )}

            <div className="mt-auto pt-8 border-t border-glass-border flex items-center justify-between">
                {price && (
                    <div>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-muted mb-1">Starting From</p>
                        <p className="text-2xl font-black text-white">{price}</p>
                    </div>
                )}

                {ctaText && (
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onCtaClick}
                        className="btn-premium py-2 px-5 text-[10px] uppercase tracking-widest"
                    >
                        {ctaText}
                        <ArrowUpRight size={14} />
                    </motion.button>
                )}
            </div>
        </motion.div>
    );
};

export default ServiceCard;
