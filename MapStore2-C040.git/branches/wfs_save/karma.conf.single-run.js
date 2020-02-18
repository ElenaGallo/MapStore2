var path = require("path");
module.exports = function karmaConfig(config) {
    config.set({

        browsers: [ 'Chrome' ],

        singleRun: true,

        frameworks: [ 'mocha' ],

        files: [
            'tests.webpack.js',
            { pattern: './js/test-resources/**/*', included: false }
        ],

        preprocessors: {
            'tests.webpack.js': [ 'webpack', 'sourcemap' ]
        },

        reporters: [ 'mocha', 'coverage', 'coveralls' ],

        junitReporter: {
            outputDir: './js/target/karma-tests-results',
            suite: ''
        },

        coverageReporter: {
            dir: './coverage/',
            reporters: [
                { type: 'html', subdir: 'report-html' },
                { type: 'cobertura', subdir: '.', file: 'cobertura.txt' },
                { type: 'lcovonly', subdir: '.' }
            ],
            instrumenterOptions: {
                istanbul: { noCompact: true }
            }
        },

        webpack: {
            devtool: 'eval',
            module: {
                rules: [
                    {
                        test: /\.jsx?$/,
                        exclude: /(__tests__|node_modules|legacy)\/|(__tests__|node_modules|legacy)\\|webpack\.js|utils\/(openlayers|leaflet)/,
                        enforce: "pre",
                        use: [
                            {
                                loader: 'babel-istanbul-loader'
                            }
                        ]
                    },
                    { test: /\.jsx?$/, exclude: /(ol\.js$|node_modules)/, loader: 'babel-loader', include: [path.join(__dirname, "js"), path.join(__dirname, "MapStore2", "web", "client")] },
                    { test: /\.css$/, loader: 'style!css-loader'},
                    { test: /\.less$/, loader: "style!css!less-loader" },
                    { test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, loader: "url-loader?mimetype=application/font-woff" },
                    { test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, loader: "file-loader?name=[name].[ext]" },
                    { test: /\.(png|jpg|gif|svg)$/, loader: 'url-loader?name=[path][name].[ext]&limit=8192'} // inline base64 URLs for <=8k images, direct URLs for the rest
                ]
            },
            resolve: {
                extensions: ['.js', '.json', '.jsx']
            }
        },

        webpackServer: {
            noInfo: true
        }

    });
};
