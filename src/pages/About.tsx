import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Zap, Globe } from 'lucide-react';
import './About.css';

const team = [
    { name: 'Harivignesh', role: 'Founder & Creative Director', expertise: 'Strategy · Storytelling · Community' },
    { name: 'Dev Lead', role: 'Head of Technology', expertise: 'React · Node.js · Architecture' },
    { name: 'Lens & Frame', role: 'Director of Photography', expertise: 'Cinema · Colour · Drone' },
];

const About = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="about-page">

            {/* ── HERO ── */}
            <section className="about-hero">
                <img src="/images/about_hero.png" alt="" className="about-hero-img" />
                <div className="container about-hero-body">
                    <div className="section-label animate-reveal">Our Origin</div>
                    <h1 className="animate-reveal" style={{ animationDelay: '0.2s' }}>
                        The engine behind <br />
                        <span className="text-gradient">the story.</span>
                    </h1>
                    <p className="animate-reveal" style={{ animationDelay: '0.4s' }}>
                        We didn't start in a marketing agency. We started in the streets, capturing the pulse of the city.
                    </p>
                </div>
            </section>

            {/* ── NARRATIVE ── */}
            <section className="about-narrative">
                <div className="container about-narrative-grid">
                    <div className="narrative-left">
                        <div className="section-label">The Evolution</div>
                        <h2 className="animate-reveal">Built where culture is made.</h2>
                    </div>
                    <div className="narrative-right">
                        <p className="lead-text animate-reveal">We started as Kanchi360, a platform dedicated to the soul of our city.</p>
                        <p className="animate-reveal" style={{ animationDelay: '0.2s' }}>
                            As we grew that platform from zero to half a million followers, we learned how to truly connect.
                            Businesses needed more than just a shoutout; they needed a narrative that resonated.
                        </p>
                        <p className="animate-reveal" style={{ animationDelay: '0.3s' }}>
                            Traditional agencies were pushing corporate noise. We knew how to stop the scroll.
                            Spider Media was born to be the high-performance engine behind those stories.
                        </p>
                        <blockquote className="animate-reveal" style={{ animationDelay: '0.4s' }}>
                            "We don't just create content; we engineer cultural moments that drive commerce."
                        </blockquote>
                    </div>
                </div>
            </section>

            {/* ── TEAM ── */}
            <section className="team-section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '6rem' }}>
                        <div className="section-label">The Collective</div>
                        <h2 className="team-title">Young. High-Tech. <span className="text-gradient">Relentless.</span></h2>
                    </div>

                    <div className="team-grid">
                        {team.map((m, i) => (
                            <div key={i} className="team-card animate-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                                <div className="team-avatar-wrap">
                                    <div className="team-avatar"></div>
                                </div>
                                <div className="team-info">
                                    <span className="team-role">{m.role}</span>
                                    <h3>{m.name}</h3>
                                    <p>{m.expertise}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── VALUES ── */}
            <section className="about-narrative" style={{ background: 'var(--bg-page)' }}>
                <div className="container about-narrative-grid">
                    <div className="narrative-left">
                        <div className="section-label">Values</div>
                        <h2>Our Core <span className="text-gradient">Principles.</span></h2>
                    </div>
                    <div className="narrative-right" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
                        <div>
                            <Users size={32} color="var(--accent-orange)" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{ marginBottom: '1rem' }}>Community First</h3>
                            <p style={{ fontSize: '0.95rem', opacity: 0.7 }}>We build ecosystems, not just audiences. Authentic connection is our North Star.</p>
                        </div>
                        <div>
                            <Zap size={32} color="var(--accent-orange)" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{ marginBottom: '1rem' }}>Production Native</h3>
                            <p style={{ fontSize: '0.95rem', opacity: 0.7 }}>We don't outsource quality. We own the gear, the talent, and the execution.</p>
                        </div>
                        <div>
                            <Globe size={32} color="var(--accent-orange)" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{ marginBottom: '1rem' }}>Local Impact</h3>
                            <p style={{ fontSize: '0.95rem', opacity: 0.7 }}>Helping homegrown brands achieve global-standard digital presence.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BTS ── */}
            <section className="bts-section">
                <div className="container">
                    <div className="text-center">
                        <div className="section-label">Studio Life</div>
                        <h2>Where the <span className="text-gradient">magic</span> happens.</h2>
                    </div>
                    <div className="bts-grid">
                        <div className="bts-tile bts-wide glass animate-reveal"></div>
                        <div className="bts-tile glass animate-reveal" style={{ animationDelay: '0.1s' }}></div>
                        <div className="bts-tile bts-tall glass animate-reveal" style={{ animationDelay: '0.2s' }}></div>
                        <div className="bts-tile glass animate-reveal" style={{ animationDelay: '0.3s' }}></div>
                        <div className="bts-tile bts-wide glass animate-reveal" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="about-cta">
                <div className="container text-center">
                    <div className="glass" style={{ padding: '6rem', borderRadius: 'var(--radius-xl)' }}>
                        <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Want to be part of the <span className="text-gradient">story?</span></h2>
                        <p style={{ fontSize: '1.25rem', marginBottom: '3rem', opacity: 0.7 }}>Let's engineer your brand's next cultural moment.</p>
                        <Link to="/contact" className="btn-primary" style={{ display: 'inline-flex' }}>
                            Start a Project <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;

