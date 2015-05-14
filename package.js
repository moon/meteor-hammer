//------------------------------
// Description
//------------------------------

Package.describe({
  name: 'moonco:hammer',
  summary: 'Meteor wrapper for the Hammer.js library',
  version: '0.0.3',
  git: 'https://github.com/moon/meteor-hammer'
});

//------------------------------
// Definition
//------------------------------

Package.onUse(function(api) {

  api.versionsFrom('1.0.4.2');

  //------------------------------
  // Exports
  //------------------------------

  api.export('Hammer');

  //------------------------------
  // Files
  //------------------------------

  api.addFiles([

    'thirdparty/hammer.min.js',
    'index.js',
    'thirdparty/jquery.hammer.js'

  ], 'client');

});