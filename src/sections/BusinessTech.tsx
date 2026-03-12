import ServiceCard from '../components/ServiceCard';
import { GraduationCap, Code, Briefcase, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

const BusinessTech = () => {
    const techServices = [
        {
            title: "Academy",
            description: "Transform education into an experience. We create engaging, high-retention learning materials for digital educators.",
            icon: <GraduationCap size={28} />,
            highlights: ["Animated Lessons", "Interactive Quizzes", "LMS Integration"],
            ctaText: "Build Course"
        },
        {
            title: "IT Solutions",
            description: "Explain complex products simply. We produce software demos and promotional videos that clarify value in seconds.",
            icon: <Code size={28} />,
            highlights: ["UI/UX Walkthroughs", "Feature Spotlights", "Integration Demos"],
            ctaText: "Scale SaaS"
        },
        {
            title: "Manpower",
            description: "Sell the vision before it's built. 3D walkthroughs and AI-enhanced property tours that wow potential buyers.",
            icon: <Briefcase size={28} />,
            highlights: ["3D Virtual Tours", "Drone Integration", "Architectural VFX"],
            ctaText: "View Demo"
        },
        {
            title: "BPO Services",
            description: "Seamless integration and support for all your digital marketing and media assets. We're always here to help.",
            icon: <Headphones size={28} />,
            highlights: ["Asset Management", "Technical Support", "Priority Updates"],
            ctaText: "Get Support"
        }
    ];

    return (
        <section id="business" className="relative py-24 overflow-hidden">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <div className="section-label mx-auto">Solutions Division</div>
                    <h2 className="heading-lg mb-8">
                        Empowering <span className="text-gradient font-serif italic">Digital Ecosystems</span>
                    </h2>
                    <p className="text-lg text-muted max-w-2xl mx-auto">
                        We bridge the gap between creative storytelling and technical innovation, providing scalable solutions for modern businesses.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {techServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={index % 2 !== 0 ? 'lg:translate-y-8' : ''}
                        >
                            <ServiceCard {...service} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Mesh Detail */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent -z-10"></div>
        </section>
    );
};

export default BusinessTech;
