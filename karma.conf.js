var webpack = require('webpack');
module.exports = function karmaConfig(config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    plugins: ['karma-mocha', 'karma-chai', 'karma-webpack', 'karma-sourcemap-loader', 'karma-chrome-launcher', 'mocha-snapshots'],
    files: ['test/test.js'],
    preprocessors: {
      'test/test.js': ['webpack', 'sourcemap']
    },
    reporters: ['progress'],
    browserConsoleLogOptions: {
     level: 'log',
     format: '%b %T: %m',
     terminal: true
    },
    port: 9876,  // karma web server port
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['Chrome'],
    autoWatch: false,
    singleRun: true, // Karma captures browsers, runs the tests and exits
    concurrency: Infinity,
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [{
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015', 'stage-0']
          }
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }]
      },
      externals: [
        'react/addons',
        'react/lib/ExecutionEnvironment',
        'react/lib/ReactContext' // <- added this
      ],
    }
  });
}
