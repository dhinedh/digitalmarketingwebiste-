/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#f1b434',
                    light: '#f4cf6d',
                    dark: '#cc9628',
                    glow: 'rgba(241, 180, 52, 0.4)',
                    soft: 'rgba(241, 180, 52, 0.08)',
                },
                bg: {
                    deep: '#2c1b47',
                    dark: '#3a1f5d',
                    surface: '#4a2d7a',
                },
                glass: {
                    DEFAULT: 'rgba(255, 255, 255, 0.03)',
                    border: 'rgba(255, 255, 255, 0.08)',
                    heavy: 'rgba(44, 27, 71, 0.8)',
                }
            },
            fontFamily: {
                heading: ['Outfit', 'sans-serif'],
                body: ['Plus Jakarta Sans', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            fontSize: {
                'heading-xl': ['clamp(2.5rem, 8vw, 5.5rem)', { lineHeight: '0.9', letterSpacing: '-0.04em', fontWeight: '900' }],
                'heading-lg': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
            },
            boxShadow: {
                premium: '0 10px 40px -10px rgba(0, 0, 0, 0.5)',
                glow: '0 0 30px rgba(212, 175, 55, 0.15)',
                'btn-glow': '0 0 40px rgba(212,175,55,0.4)',
            }
        },
    },
    plugins: [],
}
