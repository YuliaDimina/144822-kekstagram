'use strict';

window.load = (function () {

  var LOAD_TIMEOUT = 10000;

  return function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = callback;
    xhr.timeout = LOAD_TIMEOUT;
    xhr.responseType = 'json';
    xhr.open('GET', url);
    xhr.ontimeout = xhr.onerror = function () {
      // console.log('Timeout error...');
    };

    xhr.send();
  };

})();
