require.config({
  paths: {
    jquery: 'vendor/jquery.min',
    bonsai: 'bonsai.min'
  }
});

require(['app'], function(app) {
  // use app here
  koffing = {}
  koffing.app = app
  window.koffing = koffing;
});