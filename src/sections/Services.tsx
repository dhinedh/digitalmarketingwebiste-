import ServiceCard from '../components/ServiceCard';
import { Camera, Video, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
    const mediaServices = [
        {
            title: "Studio Pro",
            description: "Cinematic production in our controlled studio environment. Perfect for professional interviews, commercials, and high-end brand content.",
            price: "₹14,999",
            icon: <Camera size={28} />,
            highlights: ["10 4K Studio Videos", "Professional Lighting", "Multi-Angle Setup", "Expert Post-Production"],
            ctaText: "Learn More"
        },
        {
            title: "Creative On-Site",
            description: "We bring the studio to you. Capturing essence of your business at your location with high-end mobile equipment and storytelling expertise.",
            price: "₹19,999",
            icon: <Video size={28} />,
            highlights: ["10 On-Location Reels", "Drone Coverage", "Story-driven Scripting", "Same-day Delivery"],
            ctaText: "Learn More"
        },
        {
            title: "AI & VFX Special",
            description: "The future of marketing. We blend real-world footage with advanced AI characters and visual effects to create mind-bending viral content.",
            price: "₹24,999",
            icon: <Sparkles size={28} />,
            highlights: ["10 AI-Enhanced Videos", "VFX & Compositing", "Hyper-realistic Avatars", "3D Environment Design"],
            ctaText: "Learn More"
        }
    ];

    return (
        <section id="services" className="relative overflow-hidden">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mb-20"
                >
                    <div className="section-label">Our Craft</div>
                    <h2 className="heading-lg mb-8">
                        Elevate Your <span className="text-gradient font-serif italic">Visual Narrative</span>
                    </h2>
                    <p className="text-lg text-muted max-w-2xl">
                        From classic cinematography to cutting-edge AI integration, we craft visual experiences that don't just tell a story—they command attention.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mediaServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            <ServiceCard {...service} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
        </section>
    );
};

export default Services;
