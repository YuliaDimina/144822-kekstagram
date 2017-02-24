'use strict';

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

  // Возвращает следующее значение масштабирования на основании
  // текущей операции масштабирования. В зависимости от операции мы проверяем
  // значение с мин и макс
  function getNextScaleValue(operation, scale) {
    if (operation === 'inc') {
      return Math.min(initialScale + scaleStep, MAX_SCALE);
    }

    if (operation === 'dec') {
      return Math.max(initialScale - scaleStep, MIN_SCALE);
    }
    return 25;
  }

  // Функция возвращает True, если у element есть
  // класс className
  function isContainClass(element, className) {
    return element.classList.contains(className);
  }

  // Определяем тип операции + -
  // К элемент не привязываемся, а смотрим на наличие соответствующего класса
  function getTypeScaleOperation(element) {
    if (isContainClass(element, uploadResizeDecBtnClass)) {
      return 'dec';
    }

    if (isContainClass(element, uploadResizeIncBtnClass)) {
      return 'inc';
    }

    return 'unknown';
  }

  // ВОзвращает элемент, на котором мы будем обновлять
  // значение представления (текущий процесс масштабирования).
  // Можно было это не городить, но тут мы изобретаем простенький кэш. Если
  // ссылка на элемент есть в константе, то возвращаем значение константы,
  // иначе ищем элемент и записываем в константу. На консультации рассмотрим.
  function getViewElement() {
    if (UPLOAD_RESIZE_VALUE === null) {
      UPLOAD_RESIZE_VALUE = document.querySelector(uploadResizeValueClass);
    }

    return UPLOAD_RESIZE_VALUE;
  }

  // Обновляем представление элемента
  // ЭЛемент, на котором обновлять представление мы берем
  // из метода getViewElement;
  function updateResizeValue(scale) {
    var element = getViewElement();
    element.value = scale + ' %';
  }

  // Обработчик события кнопок управления масштабирования
  // ОТработка задания на всплытие. Нас интересуют только кнопки
  // + -
  function scaleElementHandle(event) {
    var eventElement = event.target;
    var operationType = getTypeScaleOperation(eventElement);

    if (operationType === 'unknown') {
      return;
    }

    setScale(operationType);
  }

  // В этой функции на основании типа операции
  // мы ставим новое значение для масштабирования.
  function setScale(operationType) {

    initialScale = getNextScaleValue(operationType, scaleStep);

    scaleFunction(initialScale);
    updateResizeValue(initialScale);
  }

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
