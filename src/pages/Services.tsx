import { useEffect } from 'react';
import {
    ArrowRight,
    Camera,
    Zap,
    BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

/* ─── DATA ──────────────────────────────────── */
const chapters = [
    {
        id: 'production',
        num: '01',
        title: 'Cinematic Production',
        subtitle: 'The Visual Hook',
        philosophy: 'Attention is the only currency. We engineer visual hooks that stop the thumb and start the heart.',
        what: [
            { t: 'Ad Films', d: 'Cinema-grade commercials that build authority instantly.' },
            { t: 'Strategic Reels', d: 'Algorithm-native content designed to go viral.' },
            { t: 'Drone Capture', d: 'Grand-scale perspectives that elevate your brand.' }
        ],
        visual: '/images/services_prod.png'
    },
    {
        id: 'strategy',
        num: '02',
        title: 'Social Blueprint',
        subtitle: 'The Growth Loop',
        philosophy: 'Consistency is noise without intelligence. We deploy the playbook that built Kanchi360.',
        what: [
            { t: 'Content Ecosystems', d: 'Self-sustaining social loops that drive engagement.' },
            { t: 'Community Scaling', d: 'Turning a passive audience into active brand loyalists.' },
            { t: 'Trend Engineering', d: 'Newsjacking real-time culture to stay relevant.' }
        ],
        visual: '/images/services_strat.png'
    },
    {
        id: 'performance',
        num: '03',
        title: 'Profit Accelerator',
        subtitle: 'The Revenue Funnel',
        philosophy: 'Stop boosting posts. Start building funnels. We treat your ad budget like our own investment.',
        what: [
            { t: 'Meta Mastery', d: 'FB/IG ads engineered for high-intent conversion.' },
            { t: 'Google Search', d: 'Capturing active buyers at the exact moment of intent.' },
            { t: 'Local Lead Ops', d: 'End-to-end systems to flood your business with enquiries.' }
        ],
        visual: '/images/services_perf.png'
    }
];

const pricing = [
    {
        name: 'Starter',
        price: '₹15K',
        best: false,
        features: ['12 Strategy Posts', 'Community Mgmt', 'Monthly Reporting', 'Creative Support']
    },
    {
        name: 'Growth',
        price: '₹40K',
        best: true,
        features: ['30 Content Pieces', '4 Cinematic Reels', 'Meta Ads Mgmt', 'Newsjacking Strategy', 'Priority Execution']
    },
    {
        name: 'Dominance',
        price: 'Custom',
        best: false,
        features: ['Full Stack Content', 'Monthly Ad Film', 'Google Funnel Ops', 'Influencer Scale', 'Omnichannel Strategy']
    }
];

/* ─── COMPONENT ─────────────────────────────── */
const Services = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="services-v2">

            {/* ════════ HERO ════════ */}
            <section className="s2-hero">
                <div className="container">
                    <div className="s2-hero-content">
                        <div className="section-label animate-reveal">Our Expertise</div>
                        <h1 className="s2-hero-title animate-reveal" style={{ animationDelay: '0.2s' }}>
                            Engineering <br />
                            <span className="text-gradient">Viral Growth.</span>
                        </h1>
                        <p className="s2-hero-sub animate-reveal" style={{ animationDelay: '0.4s' }}>
                            We don't just post content. We build high-performance ecosystems that turn attention into revenue.
                        </p>
                    </div>
                </div>
            </section>

            {/* ════════ CHAPTERS ════════ */}
            <div className="s2-chapters">
                {chapters.map((ch) => (
                    <section key={ch.id} className="s2-chapter">
                        <div className="container s2-chapter-grid">

                            <div className="s2-ch-content">
                                <span className="s2-ch-num">{ch.num}</span>
                                <span className="s2-ch-subtitle">{ch.subtitle}</span>
                                <h2 className="animate-reveal">{ch.title}</h2>
                                <p className="s2-ch-philosophy animate-reveal">{ch.philosophy}</p>

                                <ul className="s2-detail-list">
                                    {ch.what.map((item, i) => (
                                        <li key={i} className="animate-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                                            <h4>{item.t}</h4>
                                            <p>{item.d}</p>
                                        </li>
                                    ))}
                                </ul>

                                <Link to="/contact" className="btn-primary" style={{ marginTop: '4rem' }}>
                                    Scale Your Brand <ArrowRight size={20} />
                                </Link>
                            </div>

                            <div className="s2-ch-visual">
                                <div className="s2-media-stack">
                                    <div className="s2-media-main glass"></div>
                                    <div className="s2-media-float">
                                        <div className="section-label" style={{ marginBottom: '1rem' }}>Intel</div>
                                        <p style={{ fontSize: '0.9rem' }}>Proprietary Growth System v4.0 Active</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                ))}
            </div>

            {/* ════════ WHY ════════ */}
            <section className="s2-why">
                <div className="container">
                    <h2 className="s2-why-title">Why we <br /><span className="text-gradient">win.</span></h2>

                    <div className="s2-why-grid">
                        <div className="s2-why-card">
                            <Camera size={40} color="var(--accent-orange)" />
                            <h3>Production First</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>We own the gear and the talent. No outsourcing. Pure quality control.</p>
                        </div>
                        <div className="s2-why-card">
                            <Zap size={40} color="var(--accent-orange)" />
                            <h3>Real Results</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Built Kanchi360 to half a million. We use the same playbook for you.</p>
                        </div>
                        <div className="s2-why-card">
                            <BarChart3 size={40} color="var(--accent-orange)" />
                            <h3>Data Obsessed</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Every reel and ad is backed by deep-data algorithm analysis.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ════════ PRICING ════════ */}
            <section className="s2-pricing">
                <div className="container">
                    <div className="s2-pricing-header text-center">
                        <div className="section-label">Investment</div>
                        <h2>Simple. <span className="text-gradient">Powerful.</span></h2>
                    </div>

                    <div className="s2-pricing-grid">
                        {pricing.map((p, i) => (
                            <div key={i} className={`s2-price-card animate-reveal ${p.best ? 's2-price-featured' : ''}`} style={{ animationDelay: `${i * 0.1}s` }}>
                                {p.best && <span className="s2-price-badge">Most Popular</span>}
                                <h3>{p.name}</h3>
                                <div className="s2-price-amount">
                                    <strong>{p.price}</strong>
                                    <span>/mo</span>
                                </div>
                                <ul className="s2-price-list">
                                    {(p.features as string[]).map((f, idx) => (
                                        <li key={idx}><Zap size={14} /> {f}</li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="s2-price-btn">
                                    Start with {p.name}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};


export default Services;
