import Hero from '../sections/Hero';
import Services from '../sections/Services';
import SingleReel from '../sections/SingleReel';
import Commercial from '../sections/Commercial';
import StudioRental from '../sections/StudioRental';
import BusinessTech from '../sections/BusinessTech';
import Portfolio from '../sections/Portfolio';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';

const Home = () => {
    return (
        <main>
            <Hero />
            <div className="web-divider"></div>
            <Services />
            <div className="web-divider"></div>
            <SingleReel />
            <div className="web-divider"></div>
            <Commercial />
            <div className="web-divider"></div>
            <StudioRental />
            <div className="web-divider"></div>
            <BusinessTech />
            <div className="web-divider"></div>
            <Portfolio />
            <div className="web-divider"></div>
            <Testimonials />
            <div className="web-divider"></div>
            <Contact />
        </main>
    );
};

export default Home;
