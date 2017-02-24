'use strict';

window.utils = function () {
  var BUTTON_KEY_CLOSE_BYENTER = 13;
  var BUTTON_KEY_CLOSE_BYESCAPE = 27;

  return {
    isDisactiavateEvent: function (evt) {
      return evt.keyCode && evt.keyCode === BUTTON_KEY_CLOSE_BYESCAPE;
    },

    isActiveEvent: function (evt) {
      return evt.keyCode && evt.keyCode === BUTTON_KEY_CLOSE_BYENTER;
    }
  };
};
