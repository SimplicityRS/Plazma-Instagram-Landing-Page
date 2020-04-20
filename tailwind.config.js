const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    theme: {
        screens: {
            'xsm': '480px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        },
        extend: {
            colors: {
                theme: {
                    'yellow': '#FCD192',
                    'yellow-darker': '#FFC268',
                    'red': '#c1272d'
                }
            },
            container: {
                center: true,
                padding: '4.375rem'
            },
            inset: {
                '1/2': '50%'
            },
            spacing: {
                '7': '1.75rem',
                '9': '2.25rem',
                '11': '2.75rem',
                '15': '3.75rem',
                '18': '4.5rem',
                '21-1/2': '5.375rem',
                '28': '7rem',
                '45': '11.25rem',
                'percent-70': '70%'
            },
            fontSize: {
                'ms': '0.8125rem',
                'm': '0.9375rem',
                '32': '2rem',
                '40': '2.5rem',
                '60': '3.75rem',
                '70': '4.375rem',
                '76': '4.75rem',
                '113': '7.0625rem',
                '124': '7.75rem'
            },
            borderRadius: {
                '20': '1.25rem'
            },
            fontFamily: {
                sans: [
                    'Open Sans',
                    ...defaultTheme.fontFamily.sans
                ],
                serif: [
                    'MonstroSolid',
                    ...defaultTheme.fontFamily.serif
                ]
            }
        }
    },
    variants: {
        scale: ['responsive', 'hover', 'focus', 'group-hover'],
        opacity: ['responsive', 'hover', 'focus', 'group-hover'],
        backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
    plugins: []
};