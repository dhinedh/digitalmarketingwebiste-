import { Send, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="relative py-24 overflow-hidden">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-5/12"
                    >
                        <div className="section-label">Get In Touch</div>
                        <h2 className="heading-lg mb-8">
                            Let's Ignite Your <br />
                            <span className="text-gradient font-serif italic">Digital Presence</span>
                        </h2>
                        <p className="text-lg text-muted mb-12">
                            Ready to transform your brand into a cinematic masterpiece? Our team is standing by to bring your vision to life.
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: <MapPin size={20} />, title: "Studio Location", detail: "Spider Media Studio, Chennai, Tamil Nadu" },
                                { icon: <Phone size={20} />, title: "Direct Line", detail: "+91 9944143167" },
                                { icon: <Mail size={20} />, title: "Email Address", detail: "hello@spidermedia.com" }
                            ].map((item, i) => (
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    key={i}
                                    className="flex items-center gap-6 group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-primary-soft border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-bg-deep transition-all duration-500">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-muted mb-1">{item.title}</h4>
                                        <p className="text-lg font-bold text-white tracking-tight">{item.detail}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-7/12"
                    >
                        <div className="glass-card p-8 md:p-12 relative overflow-hidden">
                            <form className="space-y-8 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-primary px-1">Full Name</label>
                                        <input type="text" placeholder="John Wick" className="w-full bg-white/5 border border-glass-border rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all focus:bg-white/10 text-white placeholder:text-white/20" />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-primary px-1">Phone Number</label>
                                        <input type="tel" placeholder="+91 00000 00000" className="w-full bg-white/5 border border-glass-border rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all focus:bg-white/10 text-white placeholder:text-white/20" />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-primary px-1">Service Required</label>
                                    <div className="relative">
                                        <select className="w-full bg-white/5 border border-glass-border rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all focus:bg-white/10 text-white appearance-none cursor-pointer">
                                            <option value="" className="bg-bg-deep text-white/40">Select a Service</option>
                                            <option value="studio" className="bg-bg-deep">Studio Pro</option>
                                            <option value="onsite" className="bg-bg-deep">On-Site Creative</option>
                                            <option value="ai" className="bg-bg-deep">AI & VFX Special</option>
                                            <option value="commercial" className="bg-bg-deep">Commercial Ads</option>
                                        </select>
                                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-primary/40">
                                            <ArrowUpRight size={18} />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-primary px-1">Project Brief</label>
                                    <textarea placeholder="Describe your vision..." rows={4} className="w-full bg-white/5 border border-glass-border rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-all focus:bg-white/10 text-white placeholder:text-white/20 resize-none"></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="btn-premium w-full py-4 flex items-center justify-center gap-3 text-sm"
                                >
                                    Launch Project
                                    <Send size={18} />
                                </motion.button>
                            </form>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] -z-10 rounded-full"></div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Accent */}
            <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10"></div>
        </section>
    );
};

export default Contact;
