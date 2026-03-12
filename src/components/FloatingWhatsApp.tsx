import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
    const phoneNumber = '9944143167';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
            title="Chat with us"
        >
            <MessageCircle size={28} fill="currentColor" />
            <span className="whatsapp-tooltip">
                Chat with Spider Media
            </span>
        </a>
    );
};

export default FloatingWhatsApp;
