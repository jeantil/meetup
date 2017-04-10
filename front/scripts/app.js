(function(document) {
  'use strict';

  var app = document.querySelector('#app');
  
  app.addEventListener('dom-change', function() {
    console.log('App started');
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    console.log('components ready');
  });
})(document);
