'use strict';

window.utils = (function () {

  var BUTTON_KEY_CLOSE_BYENTER = 13;
  var BUTTON_KEY_CLOSE_BYESCAPE = 27;

  return {
    isDisactiavateEvent: function (evt) {
      return evt.keyCode && evt.keyCode === BUTTON_KEY_CLOSE_BYESCAPE;
    },

    isActiveEvent: function (evt) {
      return evt.keyCode && evt.keyCode === BUTTON_KEY_CLOSE_BYENTER;
    },

    getRandomElement: function (someArray) {
      return someArray[Math.floor(Math.random() * someArray.length)];
    },

    /**
     * Функция возвращает True, если у element есть
     * класс className/
     * @param {element} element - html-элемент.
     * @param {string} className - класс, определяющий функцию html-элемента.
     * @return {boolean} Есть ли у элемента класс.
     */
    isContainClass: function (element, className) {
      return element.classList.contains(className);
    },

    removeClass: function (element, className) {
      element.classList.remove(className);
      return element;
    },

    addClass: function (element, className) {
      element.classList.add(className);
      return element;
    }

  };
})();
