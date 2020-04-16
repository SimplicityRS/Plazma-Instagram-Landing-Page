// Require Laravel Mix
let mix = require('laravel-mix');

// Require Tailwind CSS
const tailwindcss = require('tailwindcss');

// Require Laravel Mix PurgeCSS
require('laravel-mix-purgecss');

// Do Laravel Mix
mix.setPublicPath( '/' )
    .sass( 'assets/scss/app.scss', 'app.css' )
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('tailwind.config.js') ]
    });

// Do purgeCSS in Production only
if ( mix.inProduction() ) {

    mix.purgeCss({
        enabled: true,
        folders: [ '.' ],
        extensions: [ 'html' ],
        defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || []
    });

}