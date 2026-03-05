import { useEffect, useState } from 'react';
import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import './Contact.css';

const services = ['Video Production', 'Social Media Management', 'Performance Marketing (Ads)', 'Brand Identity', 'Full Digital Package'];

const Contact = () => {
    const [form, setForm] = useState({ name: '', brand: '', service: '', challenge: '' });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => { window.scrollTo(0, 0); }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="contact-page">

            {/* Hero */}
            <section className="contact-hero">
                <img src="/images/contact_hero.png" alt="Contact Spider Media" className="contact-hero-img" />
                <div className="contact-hero-scrim"></div>
                <div className="container contact-hero-body">
                    <div className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Get in Touch</div>
                    <h1>Let's build <br /><span className="text-gradient">something great.</span></h1>
                    <p>Fill in the form and we'll get back to you within 24 hours.</p>
                </div>
            </section>

            {/* Form + Info */}
            <section className="contact-body">
                <div className="container contact-grid">

                    {/* Form */}
                    <div className="contact-form-wrap">
                        <h2>Tell us about your brand</h2>
                        <p className="form-subtitle">The more detail you give, the better our proposal will be.</p>

                        {submitted ? (
                            <div className="success-msg">
                                <div className="success-icon">✓</div>
                                <h3>We've got your message!</h3>
                                <p>Our team will reach out within 24 hours. In the meantime, check out our portfolio.</p>
                            </div>
                        ) : (
                            <form className="cf" onSubmit={handleSubmit}>
                                <div className="cf-row">
                                    <div className="cf-group">
                                        <label htmlFor="name">Your Name *</label>
                                        <input type="text" id="name" name="name" placeholder="Jane Doe" required value={form.name} onChange={handleChange} />
                                    </div>
                                    <div className="cf-group">
                                        <label htmlFor="brand">Brand Name *</label>
                                        <input type="text" id="brand" name="brand" placeholder="Acme Corp" required value={form.brand} onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="cf-group">
                                    <label htmlFor="service">Service Needed *</label>
                                    <div className="select-wrap">
                                        <select id="service" name="service" required value={form.service} onChange={handleChange}>
                                            <option value="" disabled>Select a service…</option>
                                            {services.map(s => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                    </div>
                                </div>

                                <div className="cf-group">
                                    <label htmlFor="challenge">What's your biggest challenge right now? *</label>
                                    <textarea id="challenge" name="challenge" rows={5} placeholder="We need more leads / Our content isn't converting / We want a full rebrand…" required value={form.challenge} onChange={handleChange}></textarea>
                                </div>

                                <button type="submit" className="btn-primary cf-submit">
                                    Send Enquiry <ArrowRight size={16} />
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Info Card */}
                    <div className="contact-info-wrap">
                        <div className="info-block">
                            <h2>Let's grab a coffee.</h2>
                            <p>We're based in Chennai and love a good conversation about growth.</p>

                            <div className="info-list">
                                <div className="info-row">
                                    <div className="info-icon"><MapPin size={18} /></div>
                                    <div><strong>Location</strong><span>Chennai, Tamil Nadu, India</span></div>
                                </div>
                                <div className="info-row">
                                    <div className="info-icon"><Mail size={18} /></div>
                                    <div><strong>Email</strong><a href="mailto:hello@spidermedia.in">hello@spidermedia.in</a></div>
                                </div>
                                <div className="info-row">
                                    <div className="info-icon"><Phone size={18} /></div>
                                    <div><strong>WhatsApp</strong><a href="#">Get our number</a></div>
                                </div>
                            </div>

                            {/* Map visual */}
                            <div className="map-visual">
                                <div className="map-grid"></div>
                                <div className="map-pin">
                                    <div className="pin-pulse"></div>
                                    <MapPin size={26} fill="var(--accent-orange)" color="white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
