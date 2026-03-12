import { motion } from 'framer-motion';
import { Video, Megaphone, Monitor, Palette, Sparkles, Target, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: <Video size={32} />,
        title: "Cinematic Video Production",
        description: "From high-end commercials to viral social media reels, we craft visual stories that command attention.",
        features: ["Commercial Films", "Social Media Reels", "Brand Documentaries", "Music Videos"],
        color: "from-purple-500 to-purple-800"
    },
    {
        icon: <Megaphone size={32} />,
        title: "AI-Powered Marketing",
        description: "Transform your brand's reach with data-driven social media strategies and AI-enhanced growth campaigns.",
        features: ["Content Strategy", "Performance Ads", "AI Automation", "Community Growth"],
        color: "from-gold-500 to-amber-700"
    },
    {
        icon: <Monitor size={32} />,
        title: "Creative IT Solutions",
        description: "Bespoke web development and digital infrastructure designed to scale with your business.",
        features: ["Web Applications", "E-commerce Platforms", "UI/UX Design", "Custom Dev"],
        color: "from-indigo-500 to-indigo-800"
    },
    {
        icon: <Palette size={32} />,
        title: "Design & VFX Studio",
        description: "Pushing the boundaries of reality with high-end visual effects and cinematic motion design.",
        features: ["3D Animation", "CGI & VFX", "Motion Graphics", "Brand Identity"],
        color: "from-pink-500 to-purple-900"
    }
];

const ServicesPage = () => {
    return (
        <div className="bg-bg-deep pt-32 pb-24 min-h-screen">
            <div className="container relative z-10">
                {/* Hero Section */}
                <div className="max-w-4xl mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="section-label"
                    >
                        Our Expertise
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-heading-lg sm:heading-xl mb-8"
                    >
                        Solutions That <span className="text-gradient italic">Spark Magic</span>.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-muted max-w-2xl"
                    >
                        We merge cinematic artistry with technical precision to build digital experiences that resonate, inspire, and deliver results.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = ((e.clientX - rect.left) / rect.width) * 100;
                                const y = ((e.clientY - rect.top) / rect.height) * 100;
                                e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                                e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
                            }}
                            className="glass-card p-6 sm:p-10 group relative overflow-hidden flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-8 text-primary">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                                    {service.icon}
                                </div>
                                <span className="text-xs font-black uppercase tracking-widest opacity-20 group-hover:opacity-40 transition-opacity">
                                    0{i + 1}
                                </span>
                            </div>
                            
                            <h3 className="text-3xl font-heading font-black mb-4 text-white group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-muted text-lg mb-8 flex-grow">
                                {service.description}
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-sm text-white/80 font-medium">
                                        <CheckCircle2 size={16} className="text-primary" />
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <motion.div whileHover={{ x: 5 }}>
                                <Link to="/contact" className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                                    Inquire Now <ArrowRight size={16} />
                                </Link>
                            </motion.div>

                            {/* Background decoration */}
                            <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                        </motion.div>
                    ))}
                </div>

                {/* Process Section */}
                <div className="web-divider"></div>
                <div className="text-center mb-24">
                    <h2 className="heading-lg mb-16">Our Creative Pipeline</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        {[
                            { step: "Strategy", icon: <Target className="text-primary" />, desc: "We align your goals with creative vision." },
                            { step: "Production", icon: <Zap className="text-primary" />, desc: "Executing with precision and technical excellence." },
                            { step: "Impact", icon: <Sparkles className="text-primary" />, desc: "Measuring success and scaling your influence." }
                        ].map((proc, i) => (
                            <div key={i} className="relative">
                                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 text-primary">
                                    {proc.icon}
                                </div>
                                <h4 className="text-xl font-black mb-2">{proc.step}</h4>
                                <p className="text-muted text-sm">{proc.desc}</p>
                                {i < 2 && (
                                    <div className="hidden md:block absolute top-10 -right-6 text-primary/20">
                                        <ArrowRight size={40} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final CTA */}
                <motion.div
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    className="glass-card bg-gradient-to-br from-[#3a1f5d] to-[#2c1b47] p-8 sm:p-16 text-center border-primary/20"
                >
                    <h2 className="heading-lg mb-8 leading-tight">Ready to Elevate <br />Your Digital Brand?</h2>
                    <Link to="/contact" className="btn-premium inline-flex items-center gap-3 scale-110">
                        Work with Spider Media <ArrowRight size={20} />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesPage;
