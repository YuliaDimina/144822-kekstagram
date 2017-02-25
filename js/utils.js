'use strict';

/**
 * Отслеживает клавиатурное событие и определяет тип нажатиой кнопки.
 * @return {object} - возвращает типы нажатой кнопки.
 */
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
