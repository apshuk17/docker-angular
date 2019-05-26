// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-firefox-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    files: ['app/app.component.spec.ts'],
    reporters: ['progress', 'kjhtml'],
    browsers: ['Chrome'],
    customLaunchers: {
      Headless_Firefox: {
        base: 'Firefox',
        flags: []
      },
      Headless_Chrome: {
        base: 'Chrome',
        flags: [
          '--no-sandbox',
          '--disable-gpu'
        ]
      }
    },
    singleRun: true,
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browserDisconnectTimeout: 10000,
    browserNoActivityTimeout: 30000
  });
  // if(process.env.TRAVIS){
  //   config.browsers = ['Chrome_travis_ci'];
  // }
};