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
            container: {
                center: true,
                //padding: '1.25rem'
            },
            spacing: {
                '7': '1.75rem',
                '9': '2.25rem',
                '11': '2.75rem'
            },
            fontSize: {
                'ms': '0.8125rem',
                'm': '0.9375rem'
            }
        }
    },
    variants: {},
    plugins: []
};