// Require Laravel Mix
let mix = require('laravel-mix');

// Require Tailwind CSS
const tailwindcss = require('tailwindcss');

// Require Laravel Mix PurgeCSS
require('laravel-mix-purgecss');

// Do Laravel Mix
mix.setPublicPath( '/' )
    .sass( 'assets/scss/app.scss', 'app.css' )
    .copy( 'node_modules/jquery/dist/jquery.min.js', 'assets/js' )
    .copy( 'node_modules/isotope-layout/dist/isotope.pkgd.min.js', 'assets/js' )
    .copy( 'node_modules/imagesloaded/imagesloaded.pkgd.min.js', 'assets/js' )
    .copy( 'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js', 'assets/js' )
    .copy( 'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css', 'assets/css' )
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