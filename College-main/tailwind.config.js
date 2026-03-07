/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#fff4f0',
                    100: '#ffe6dd',
                    200: '#ffc8b3',
                    300: '#ffa180',
                    400: '#ff7244',
                    500: '#f25a22', // SRIT Brand Reddish-Orange from image
                    600: '#ea4309',
                    700: '#c33006',
                    800: '#9b270b',
                    900: '#7d230e',
                    950: '#440e04',
                },
                secondary: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a', // Deep Slate
                    950: '#020617',
                },
                accent: {
                    400: '#fbbf24',
                    500: '#f59e0b',
                    600: '#d97706',
                }
            },
            fontFamily: {
                sans: ['Open Sans', 'sans-serif'],
                heading: ['"Playfair Display"', 'serif'],
                cinzel: ['"Cinzel"', 'serif'],
            },
        },
        animation: {
            'scroll-left': 'scroll-left 40s linear infinite',
            'scroll-up': 'scroll-up 20s linear infinite',
            'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
            'marquee': 'marquee 25s linear infinite',
        },
        keyframes: {
            'marquee': {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-100%)' },
            },
            'scroll-left': {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-100%)' },
            },
            'scroll-up': {
                '0%': { transform: 'translateY(0)' },
                '100%': { transform: 'translateY(-100%)' },
            },
            fadeInUp: {
                '0%': { opacity: '0', transform: 'translateY(20px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' },
            }
        }
    },
    plugins: [],
}
