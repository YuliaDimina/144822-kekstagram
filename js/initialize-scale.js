'use strict';

/**
 * Отвечает за трансформацию (масштабирование) элемента.
 */

window.initializeScale = (function () {

  var UPLOAD_RESIZE_VALUE = null;
  var MAX_SCALE = 100;
  var MIN_SCALE = 25;

  var scaleElement = null;
  var scaleStep = null;
  var initialScale = null;
  var scaleFunction = null;

  var uploadResizeDecBtnClass = 'upload-resize-controls-button-dec';
  var uploadResizeIncBtnClass = 'upload-resize-controls-button-inc';
  var uploadResizeValueClass = '.upload-resize-controls-value';

  /**
   * Возвращает следующее значение масштабирования на основании
   * текущей операции масштабирования. В зависимости от операции мы проверяем
   * значение с мин и макс.
   * @param {string} operation - уменьшение или увеличение масштаба.
   * @param {number} scale - начальное (INITIAL_SCALE в вызове) и текущее значение шкалы масштабирования.
   * @return {number} Возвращает минимальное значение шкалы масштабирования.
   */
  function getNextScaleValue(operation, scale) {
    if (operation === 'inc') {
      return Math.min(initialScale + scaleStep, MAX_SCALE);
    }

    if (operation === 'dec') {
      return Math.max(initialScale - scaleStep, MIN_SCALE);
    }
    return 25;
  }

  /**
   * Функция возвращает True, если у element есть
   * класс className/
   * @param {element} element - html-элемент.
   * @param {string} className - класс, определяющий функцию html-элемента.
   * @return {boolean} Есть ли у элемента класс.
   */
  function isContainClass(element, className) {
    return element.classList.contains(className);
  }

  /**
   * Определяем тип операции - увеличение (+) или уменьшение (-)
   * К элементу не привязываемся, смотрим только на наличие соответствующего класса
   * @param {element} element - html-элемент.
   * @return {string}.
   */
  function getTypeScaleOperation(element) {
    if (isContainClass(element, uploadResizeDecBtnClass)) {
      return 'dec';
    }

    if (isContainClass(element, uploadResizeIncBtnClass)) {
      return 'inc';
    }

    return 'unknown';
  }

  /**
   * Возвращает элемент, на котором мы будем обновлять значение представления
   * (текущий процесс масштабирования).
   * Псевдокэширование - если ссылка на элемент есть в константе,
   * то возвращаем значение константы, иначе - ищем элемент и записываем в константу.
   * @return {string}.
   */
  function getViewElement() {
    if (UPLOAD_RESIZE_VALUE === null) {
      UPLOAD_RESIZE_VALUE = document.querySelector(uploadResizeValueClass);
    }

    return UPLOAD_RESIZE_VALUE;
  }

  /**
   * Обновляем представление элемента
   * ЭЛемент, на котором обновлять представление мы берем
   * из метода getViewElement;
   * @param {number} scale - начальное (INITIAL_SCALE в вызове) и текущее
   * значение шкалы масштабирования.
   */
  function updateResizeValue(scale) {
    var element = getViewElement();
    element.value = scale + ' %';
  }

  /**
   * Обработчик события кнопок управления масштабированием.
   * Определяем было ли событие: увеличение (+) или уменьшение (-).
   * @param {event} event - клик на элементах управления масштабом.
   */
  function scaleElementHandle(event) {
    var eventElement = event.target;
    var operationType = getTypeScaleOperation(eventElement);

    if (operationType === 'unknown') {
      return;
    }

    setScale(operationType);
  }

  /**
   * В этой функции на основании типа операции
   * мы ставим новое значение для масштабирования.
   * @param {function} operationType - определение события клика: увеличение (+)
   * или уменьшение (-) масштаба.
   */
  function setScale(operationType) {

    initialScale = getNextScaleValue(operationType, scaleStep);

    scaleFunction(initialScale);
    updateResizeValue(initialScale);
  }

  /**
   * Отвечает за применение масштабирования по клику на элемент.
   * @param {element} el - html-элемент, по клику на который применяется фильтр.
   * @param {number} step - html-элемент, по клику на который применяется фильтр.
   * @param {number} scale - html-элемент, по клику на который применяется фильтр.
   * @param {@callback} callback - изменяет css-стиль элемента, применяет
   * трансформацию масштабирования элемента.
   */
  return function (el, step, scale, callback) {

    scaleElement = el;
    scaleStep = step;
    initialScale = scale;
    scaleFunction = callback;

    scaleElement.addEventListener('click', scaleElementHandle);
  };

})();


// function createScale(scaleElement, scaleStep, initialScale, callback) {
//
//   var uploadResizeDecBtn = scaleElement.querySelector('.upload-resize-controls-button-dec');
//   var uploadResizeIncBtn = scaleElement.querySelector('.upload-resize-controls-button-inc');
//   var uploadResizeValue = scaleElement.querySelector('.upload-resize-controls-value');
//
//   uploadResizeDecBtn.addEventListener('click', function () {
//
//     if (initialScale > 25) {
//       initialScale = initialScale - scaleStep;
//       uploadResizeValue.value = initialScale + ' %';
//     }
//
//     callback(initialScale);
//   });
//
//   uploadResizeIncBtn.addEventListener('click', function () {
//
//     if (initialScale < 100) {
//       initialScale = initialScale + scaleStep;
//       uploadResizeValue.value = initialScale + ' %';
//     }
//
//     callback(initialScale);
//   });
//
// }
//
// window.initializeScale = (function () {
//   return createScale;
// })();
