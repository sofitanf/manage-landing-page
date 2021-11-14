module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'bright-red': 'hsl(12, 88%, 59%)',
                'dark-blue': 'hsl(228, 39%, 23%)',
                'dark-grayish-blue': 'hsl(227, 12%, 61%)',
                'very-dark-blue': 'hsl(233, 12%, 13%)',
                'very-pale-red': 'hsl(13, 100%, 96%)',
                'very-light-gray': 'hsl(0, 0%, 98%)',
            },
            fontFamily: {
                BeVietnam: ['Be Vietnam'],
            },
            margin: {
                '-33': '-33rem',
                33: '33rem',
                6.2: '6.2rem',
            },
            fill: ['hover', 'focus'],
            backgroundImage: {
                'hero-desktop': "url('/images/bg-simplify-section-desktop.svg')",
                'hero-mobile': "url('/images/bg-simplify-section-mobile.png')",
            },
        },
        boxShadow: {
            xl: '0 10px 15px -5px rgba(255, 239, 235, 1), 0 4px 6px -2px rgba(255, 239, 235, 1)',
        },
        height: {
            sm: '58rem',
        },
        screens: {
            tablet: '460px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1240px',
            xxl: '1410px',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}