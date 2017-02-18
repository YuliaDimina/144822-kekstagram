'use strict';
window.initializeFilters = function (callback) {
  if (typeof callback === 'function') {
    callback();
  }
};
// не работает, если обернуть в IIEF
