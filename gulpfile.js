const elixir = require('laravel-elixir');
var path = require('path');

require('laravel-elixir-webpack');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir((mix) => {
    //mix.sass('app.scss');
    mix.browserSync({
        proxy: 'tomu.app',
        https: true
    });

    mix.sass('app.scss');

    mix.webpack('angular.js', {
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015']
                    }
                },
                {
                    test: /\.html$/,
                    loader: 'html'
                },
                {
                    test: /\.scss$/,
                    loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
                },
                { test: /\.jpg$/, loader: "file-loader" },
                { test: /\.png$/, loader: "url-loader?mimetype=image/png" }
            ]
        },
        output: {
            publicPath: "/"
        }
    });

    mix.version(['css/app.css', 'js/angular.js']);
});
