import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import SpiderNetwork from './components/SpiderNetwork';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

function App() {
    return (
        <Router>
            <LoadingScreen />
            <SpiderNetwork />
            <div className="min-h-screen bg-bg-dark text-white selection:bg-accent selection:text-bg-dark">
                <div className="bg-mesh"></div>
                <div className="bg-noise"></div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <Footer />
                <FloatingWhatsApp />
            </div>
        </Router>
    );
}

export default App;
