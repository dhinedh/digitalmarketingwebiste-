import ServiceCard from '../components/ServiceCard';
import { Tv, MonitorPlay, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Commercial = () => {
    const commercialServices = [
        {
            title: "Broadcast Ads",
            description: "High-end television commercials with professional voiceovers and cinematic color grading. Broadcast-ready masters.",
            price: "₹15,000",
            icon: <Tv size={28} />,
            highlights: ["Pro Voiceover", "Full Scripting", "Music License", "4K HDR"],
            ctaText: "Inquire Now"
        },
        {
            title: "Cinema Format",
            description: "Ultra-high resolution production designed for big screens. Surround sound mixing and maximum visual impact.",
            price: "₹30,000",
            icon: <MonitorPlay size={28} />,
            highlights: ["DCI-P3 Color", "Atmos Audio", "Screen Optimized", "Theatre Ready"],
            ctaText: "Inquire Now"
        },
        {
            title: "Brand Talent",
            description: "Access our curated pool of actors and models. We manage casting, styling, and direction for a perfect shoot.",
            price: "Custom",
            icon: <Users size={28} />,
            highlights: ["Casting MGMT", "Vogue Styling", "MUA Services", "Talent Scout"],
            ctaText: "View Talent"
        }
    ];

    return (
        <section id="commercial" className="relative py-24 overflow-hidden">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center lg:text-left"
                >
                    <div className="section-label">Production</div>
                    <h2 className="heading-lg mb-8">
                        Corporate & <span className="text-gradient font-serif italic">Cinema</span>
                    </h2>
                    <p className="text-lg text-muted max-w-2xl lg:mr-auto">
                        We scale your brand presence with broadcast-quality advertisements designed for the world's biggest screens.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {commercialServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <ServiceCard {...service} />
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -z-10"></div>
        </section>
    );
};

export default Commercial;
