import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Linkedin, Send, MessageSquare, Clock } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="bg-bg-deep pt-32 pb-24 min-h-screen">
            <div className="container relative z-10">
                {/* Header */}
                <div className="max-w-4xl mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="section-label"
                    >
                        Get In Touch
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-heading-lg sm:heading-xl mb-8"
                    >
                        Let's Build Your <br />
                        <span className="text-gradient italic">Next Narrative</span> together.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-muted max-w-2xl"
                    >
                        Whether you're looking for cinematic production, AI-powered strategy, or technical innovation, we're here to turn your vision into reality.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Contact Info */}
                    <div className="lg:col-span-5 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-glow">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Email Us</p>
                                    <p className="text-xl font-bold text-white">hello@spidermedia.studio</p>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-glow">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Call Us</p>
                                    <p className="text-xl font-bold text-white">+91 99441 43167</p>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-glow">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Visit Us</p>
                                    <p className="text-xl font-bold text-white italic">Cinema District, Creative Hub, TN 600001</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="p-8 rounded-[32px] bg-gradient-to-br from-white/5 to-transparent border border-white/10"
                        >
                            <h4 className="text-lg font-black mb-6 flex items-center gap-3">
                                <Clock size={20} className="text-primary" />
                                Studio Hours
                            </h4>
                            <div className="space-y-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted">Monday - Friday</span>
                                    <span className="text-white font-bold">09:00 AM - 08:00 PM</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted">Saturday</span>
                                    <span className="text-white font-bold">10:00 AM - 04:00 PM</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted">Sunday</span>
                                    <span className="text-primary font-black uppercase tracking-tighter italic">By Appointment</span>
                                </div>
                            </div>
                        </motion.div>

                        <div className="flex gap-4">
                            {[Instagram, Youtube, Facebook, Linkedin].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -5, borderColor: '#f1b434', color: '#f1b434' }}
                                    className="w-12 h-12 rounded-full glass-card border-white/10 flex items-center justify-center text-muted transition-all"
                                >
                                    <Icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-6 sm:p-12 border-primary/20"
                        >
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <MessageSquare size={24} />
                                </div>
                                <h3 className="text-2xl font-black">Project Inquiry</h3>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-muted">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-white placeholder:text-white/20" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-muted">Email Address</label>
                                        <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-white placeholder:text-white/20" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted">Subject</label>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-white/60 appearance-none">
                                        <option className="bg-bg-dark">Video Production</option>
                                        <option className="bg-bg-dark">AI Marketing Strategy</option>
                                        <option className="bg-bg-dark">Web/IT Solution</option>
                                        <option className="bg-bg-dark">VFX & CGI</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-muted">Message</label>
                                    <textarea rows={5} placeholder="Tell us about your project..." className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-white placeholder:text-white/20 resize-none"></textarea>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full btn-premium flex justify-center items-center gap-3 text-lg py-5"
                                >
                                    Send Message <Send size={20} />
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
