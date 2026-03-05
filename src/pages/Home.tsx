import { Link } from 'react-router-dom';
import {
    ArrowRight, ChevronRight, CheckCircle,
    Video, Megaphone, TrendingUp,
    Zap,
    Eye,
    Sparkles, Layers
} from 'lucide-react';
import './Home.css';

/* ─── DATA ─────────────────────────────────── */
const spiderMethod = [
    {
        step: '01',
        title: 'Visual Intelligence',
        subtitle: 'Strategic Insight',
        desc: 'We decode audience psychology before a single pixel is created.',
        icon: Eye,
        color: 'orange'
    },
    {
        step: '02',
        title: 'Cinematic Edge',
        subtitle: 'Premium Production',
        desc: 'High-end cinema gear meets viral editing to build the "Unskippable".',
        icon: Video,
        color: 'teal'
    },
    {
        step: '03',
        title: 'Amplified Growth',
        subtitle: 'Precision Paid',
        desc: 'Targeted amplification engineered for high-intent conversion.',
        icon: Zap,
        color: 'blue'
    }
];

const homeServices = [
    {
        icon: Video, tag: 'Production', color: 'orange',
        title: 'Ad Films & Reels',
        desc: 'Cinematic storytelling that commands attention and respect.',
        features: ['Premium Reels', 'Drone Ops']
    },
    {
        icon: Megaphone, tag: 'Strategy', color: 'teal',
        title: 'Growth Strategy',
        desc: 'Algorithmic content calendars that drive viral intent.',
        features: ['Viral Strategy', 'Community']
    },
    {
        icon: TrendingUp, tag: 'Ads', color: 'blue',
        title: 'Paid Performance',
        desc: 'Meta & Google Ads engineered for lead generation.',
        features: ['FB/IG Ads', 'Google Search']
    }
];

const results = [
    { brand: 'ASM Traders', category: 'Growth Strategy', result: '3× Sales', metric: '300%', color: 'orange' },
    { brand: 'Chennai Dental', category: 'Performance Ads', result: '80+ Leads', metric: '80+', color: 'teal' },
    { brand: 'Prime Properties', category: 'Video Production', result: '2× Enquiries', metric: '200%', color: 'blue' },
];

/* ─── COMPONENT ─────────────────────────────── */
const Home = () => {
    return (
        <div className="home-v2">

            {/* ════════ HERO ════════ */}
            <section className="h2-hero">
                <div className="h2-hero-canvas">
                    <div className="h2-hero-overlay"></div>
                    <img src="/images/home_hero.png" alt="" className="h2-hero-bg" />
                </div>

                <div className="container h2-hero-content">
                    <div className="h2-hero-eyebrow animate-reveal">
                        <Sparkles size={14} className="icon-pulse" />
                        <span>The Content-Led Growth Agency</span>
                    </div>

                    <h1 className="h2-hero-title animate-reveal" style={{ animationDelay: '0.2s' }}>
                        <span className="h2-reveal-line">Engineering</span>
                        <span className="h2-reveal-line h2-accent">Culture.</span>
                        <span className="h2-reveal-line">Scaling Brands.</span>
                    </h1>

                    <p className="h2-hero-sub animate-reveal" style={{ animationDelay: '0.4s' }}>
                        Founded on the community intelligence of Kanchi360, we bridge the gap between cinematic storytelling and profit-driven performance.
                    </p>

                    <div className="h2-hero-actions animate-reveal" style={{ animationDelay: '0.6s' }}>
                        <Link to="/contact" className="btn-primary">
                            Get Your Audit <ArrowRight size={18} />
                        </Link>
                        <Link to="/portfolio" className="btn-glass">
                            Explore Showreel
                        </Link>
                    </div>
                </div>

                <div className="h2-scroll-hint">
                    <div className="h2-scroll-dot"></div>
                    <span>Scroll to Discover</span>
                </div>
            </section>

            {/* ════════ MARQUEE ════════ */}
            <div className="h2-marquee">
                <div className="h2-marquee-track">
                    {[...results, ...results, ...results].map((r, i) => (
                        <div key={i} className="h2-marquee-card">
                            <span className="h2-m-cat">{r.category}</span>
                            <strong>{r.brand}</strong>
                            <span className="h2-m-res">/ {r.result}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ════════ THE SPIDER METHOD ════════ */}
            <section className="h2-method">
                <div className="container">
                    <div className="h2-section-head">
                        <div className="section-label">Our Proprietary Framework</div>
                        <h2>The <span className="text-gradient">Spider Method</span></h2>
                        <p>Engineering unskippable brands in the age of algorithms.</p>
                    </div>

                    <div className="h2-method-grid">
                        {spiderMethod.map((m) => (
                            <div key={m.step} className="h2-method-card glass-card">
                                <div className={`h2-m-icon h2-m-icon-${m.color}`}>
                                    <m.icon size={24} />
                                    <span className="h2-m-step">{m.step}</span>
                                </div>
                                <h3>{m.title}</h3>
                                <span className="h2-m-subtitle">{m.subtitle}</span>
                                <p>{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════ CULTURE ENGINEERING ════════ */}
            <section className="h2-culture">
                <div className="container h2-culture-grid">
                    <div className="h2-culture-text">
                        <div className="section-label">The Kanchi360 Legacy</div>
                        <h2>Built on <span className="text-gradient">Community Intel.</span></h2>
                        <p className="h2-lead">We didn't learn marketing from books. We learned it by building a 500K+ city community from scratch.</p>

                        <div className="h2-culture-stats">
                            <div className="h2-c-stat">
                                <strong>500K+</strong>
                                <span>Reach</span>
                            </div>
                            <div className="h2-c-stat">
                                <strong>5 Yrs</strong>
                                <span>Data Intel</span>
                            </div>
                        </div>
                        <p>Managing Kanchi360 gives us a unique "In-Market" advantage. We know exactly what triggers local purchases in Chennai & beyond.</p>
                        <Link to="/about" className="btn-glass" style={{ marginTop: '2rem' }}>Learn Our Roots <ChevronRight size={16} /></Link>
                    </div>

                    <div className="h2-culture-visual">
                        <div className="h2-culture-blob"></div>
                        <div className="h2-visual-card glass">
                            <div className="hvc-top">
                                <Layers size={20} />
                                <span>Audience Sentiment Analysis</span>
                            </div>
                            <div className="hvc-graph">
                                {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                                    <div key={i} className="hvc-bar" style={{ height: `${h}%` }}></div>
                                ))}
                            </div>
                            <div className="h2-m-subtitle" style={{ textAlign: 'center', margin: 0 }}>Real-time local engagement data</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════ SERVICES BENTO ════════ */}
            <section className="h2-bento">
                <div className="container">
                    <div className="h2-section-head">
                        <div className="section-label">Specialist Capabilities</div>
                        <h2>Full-Stack <span className="text-gradient">Growth.</span></h2>
                    </div>

                    <div className="h2-bento-grid">
                        {homeServices.map((s, i) => (
                            <Link to="/services" key={s.title} className={`h2-bento-card glass-card ${i === 0 ? 'h2-bc-wide' : ''}`}>
                                <div className="hbc-header">
                                    <span className="hbc-tag">{s.tag}</span>
                                    <div className="hbc-icon"><s.icon size={22} /></div>
                                </div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                                <ul className="hbc-feats" style={{ listStyle: 'none', display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                    {s.features.map(f => <li key={f} style={{ fontSize: '0.8rem', opacity: 0.8, display: 'flex', alignItems: 'center', gap: '5px' }}><CheckCircle size={14} color="#00F5FF" /> {f}</li>)}
                                </ul>
                            </Link>
                        ))}

                        <div className="h2-bento-card h2-bc-cta">
                            <div className="hbc-cta-content">
                                <h3>Ready to Scale?</h3>
                                <p>Join the 50+ brands winning with Spider Media.</p>
                                <Link to="/contact" className="btn-primary" style={{ background: 'white', color: 'black' }}>Get Your Audit</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════ REVEAL CTA ════════ */}
            <section className="h2-final-cta">
                <div className="container">
                    <div className="h2-cta-wrap glass">
                        <div className="h2-cta-text">
                            <h2>Let's build your <span className="text-gradient">Impact.</span></h2>
                            <p>Stop guessing with your social media. Start engineering it.</p>
                        </div>
                        <div className="h2-cta-actions">
                            <Link to="/contact" className="btn-primary">Book Strategy Call</Link>
                            <Link to="/portfolio" className="btn-glass">See Our Work</Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;

