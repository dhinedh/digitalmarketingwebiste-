import { useEffect, useState } from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const items = [
    { id: 1, category: 'Commercials', title: 'ASM Traders Campaign', client: 'ASM Traders', height: 'tall' },
    { id: 2, category: 'Social Campaigns', title: 'Kanchi360 Festival Reel', client: 'Kanchi360', height: 'short' },
    { id: 3, category: 'Brand Identity', title: 'Dental Clinic Rebrand', client: 'Chennai Dental', height: 'medium' },
    { id: 4, category: 'Social Campaigns', title: 'Viral Food Series', client: 'Local Resto', height: 'tall' },
    { id: 5, category: 'Commercials', title: 'Real Estate Drone Showcase', client: 'Prime Properties', height: 'medium' },
    { id: 6, category: 'Content', title: 'Gym Promo Sequence', client: 'FitLife Gym', height: 'short' },
];

const categories = ['All', 'Commercials', 'Social Campaigns', 'Brand Identity', 'Content'];

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    useEffect(() => { window.scrollTo(0, 0); }, []);

    const filtered = filter === 'All' ? items : items.filter(i => i.category === filter);

    return (
        <div className="portfolio-page">

            {/* ── HERO ── */}
            <section className="port-hero">
                <img src="/images/portfolio_hero.png" alt="" className="port-hero-img" />
                <div className="container port-hero-body">
                    <div className="section-label animate-reveal">Our Work</div>
                    <h1 className="animate-reveal" style={{ animationDelay: '0.2s' }}>
                        The <span className="text-gradient">Vault.</span>
                    </h1>
                    <p className="animate-reveal" style={{ animationDelay: '0.4s' }}>
                        No fluff. No filler. Campaigns that drove real results for real businesses.
                    </p>
                </div>
            </section>

            {/* ── GRID + FILTERS ── */}
            <section className="port-grid-section">
                <div className="container">
                    <div className="port-filters animate-reveal">
                        {categories.map(c => (
                            <button
                                key={c}
                                className={`filter-btn ${filter === c ? 'active' : ''}`}
                                onClick={() => setFilter(c)}
                            >
                                {c}
                            </button>
                        ))}
                    </div>

                    <div className="masonry-grid">
                        {filtered.map((item, idx) => (
                            <div
                                key={item.id}
                                className={`port-item ${item.height} animate-reveal`}
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                <div className="port-item-overlay">
                                    <div className="port-play">
                                        <Play size={28} fill="white" color="white" />
                                    </div>
                                    <div className="port-info">
                                        <span className="port-cat">{item.category}</span>
                                        <h3>{item.title}</h3>
                                        <p>for {item.client}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="port-cta text-center" style={{ marginTop: '8rem' }}>
                        <div className="glass" style={{ padding: '5rem', borderRadius: 'var(--radius-xl)' }}>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '2rem' }}>Ready to build your brand's vault?</p>
                            <Link to="/contact" className="btn-primary">
                                Launch Project <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;

