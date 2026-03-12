import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot } from 'lucide-react';

const AIBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, type: 'bot', text: "Welcome to the web! I'm your Spider Assistant. How can I help you weave your digital vision today?" }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMsg = { id: Date.now(), type: 'user', text: inputValue };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            const botResponse = getBotResponse(inputValue);
            setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: botResponse }]);
            setIsTyping(false);
        }, 1500);
    };

    const getBotResponse = (input: string) => {
        const lowerInput = input.toLowerCase();
        if (lowerInput.includes('service') || lowerInput.includes('do')) {
            return "We offer Cinematic Video Production, AI Marketing, and high-end IT Solutions. Check our Services page for the full web of possibilities!";
        }
        if (lowerInput.includes('portfolio') || lowerInput.includes('work')) {
            return "Our Portfolio showcases masterpieces for brands like Nike and Zenith AI. Want to see our latest legacies?";
        }
        if (lowerInput.includes('contact') || lowerInput.includes('hire')) {
            return "Ready to weave something great? You can reach us via the Contact page or call +91 99441 43167.";
        }
        if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
            return "Hello! I'm here to help you navigate through Spider Media Studio. What's on your mind?";
        }
        return "That's an interesting thread! Our team can give you more details. Would you like to head to the Contact page?";
    };

    const quickActions = [
        "What services do you offer?",
        "Show me your portfolio",
        "How can I contact you?",
        "Tell me about Spider Media"
    ];

    return (
        <div className="fixed bottom-24 right-6 sm:right-8 z-[1000]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8, rotate: 10 }}
                        animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8, rotate: 10 }}
                        className="absolute bottom-20 right-0 w-[90vw] sm:w-[400px] h-[500px] glass-card flex flex-col overflow-hidden border-primary/30 shadow-2xl"
                        style={{ perspective: '1000px' }}
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-primary/20 to-transparent border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-bg-deep shadow-glow relative">
                                    <Bot size={20} />
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-bg-deep rounded-full"></span>
                                </div>
                                <div>
                                    <h4 className="text-sm font-black uppercase tracking-widest text-white">Spider Assistant</h4>
                                    <p className="text-[10px] text-primary font-bold uppercase">Online • Weaving Magic</p>
                                </div>
                            </div>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, x: msg.type === 'bot' ? -20 : 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${msg.type === 'bot' ? 'justify-start' : 'justify-end'}`}
                                >
                                    <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                                        msg.type === 'bot' 
                                        ? 'bg-white/5 border border-white/10 text-white rounded-tl-none' 
                                        : 'bg-primary text-bg-deep font-bold rounded-tr-none shadow-glow'
                                    }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none">
                                        <div className="flex gap-1">
                                            {[0, 1, 2].map((i) => (
                                                <motion.div
                                                    key={i}
                                                    animate={{ y: [0, -5, 0] }}
                                                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                                                    className="w-1.5 h-1.5 bg-primary rounded-full"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Actions */}
                        {messages.length === 1 && !isTyping && (
                            <div className="p-4 pt-0 flex flex-wrap gap-2">
                                {quickActions.map((action, i) => (
                                    <motion.button
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + i * 0.1 }}
                                        onClick={() => {
                                            setInputValue(action);
                                            // Trigger send automatically after a tiny delay
                                            setTimeout(handleSend, 100);
                                        }}
                                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] text-white/80 font-bold uppercase tracking-widest hover:border-primary/50 hover:text-primary transition-all"
                                    >
                                        {action}
                                    </motion.button>
                                ))}
                            </div>
                        )}

                        {/* Input */}
                        <div className="p-4 border-t border-white/10 bg-black/20">
                            <div className="flex gap-2">
                                <input 
                                    type="text" 
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask anything..."
                                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-primary transition-all text-white placeholder:text-white/20"
                                />
                                <button 
                                    onClick={handleSend}
                                    disabled={!inputValue.trim() || isTyping}
                                    className="w-10 h-10 rounded-xl bg-primary text-bg-deep flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-glow disabled:opacity-50 disabled:grayscale"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Trigger Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1, rotate: isOpen ? 90 : 0 }}
                whileTap={{ scale: 0.9 }}
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500 relative group ${
                    isOpen ? 'bg-white/10 border border-white/20' : 'bg-primary border-primary shadow-glow'
                }`}
            >
                {/* Spider Silk Visual */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-20 h-20 border-2 border-primary/20 rounded-full animate-ping"></div>
                </div>

                {isOpen ? (
                    <X className="text-white" size={24} />
                ) : (
                    <div className="flex flex-col items-center">
                        <Bot size={28} className="text-bg-deep" />
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center text-[8px] font-black text-primary p-1 border-2 border-bg-deep"
                        >
                            1
                        </motion.div>
                    </div>
                )}
            </motion.button>
        </div>
    );
};

export default AIBot;
