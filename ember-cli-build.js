/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      extension: 'scss'
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  var Funnel = require('broccoli-funnel');

  app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
  app.import('bower_components/Chart.StackedBar.js/src/Chart.StackedBar.js');

  var fonts = new Funnel('bower_components/bootstrap/dist/fonts/', {
    srcDir: '/',
    include: ['**/*.woff*', '**/stylesheet.css'],
    destDir: '/fonts'
  });

  var sampleJSON = new Funnel('JSON', {
    destDir: '/JSON'
  });

  return app.toTree([fonts, sampleJSON]);
};
