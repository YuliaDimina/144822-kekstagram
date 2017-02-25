'use strict';
var scaleElement = document.querySelector('.upload-resize-controls');
var pictureElement = document.querySelector('.filter-image-preview');
var SCALE_STEP = 25;
var INITIAL_SCALE = 100;
var filterElement = document.forms['upload-filter'];

/**
 * Является collback для window.initializeScale.
 * Отвечает за трансформацию (масштабирование) элемента.
 * @param {number} scale - параметр INITIAL_SCALE.
 */
var adjustScale = function (scale) {
  pictureElement.style.transform = 'scale(' + scale / 100 + ')';
};

window.initializeScale(scaleElement, SCALE_STEP, INITIAL_SCALE, adjustScale);

/**
 * Является collback для window.initializeFilters.
 * Отвечает за определение выбранного фильтра и применение новогого фильтра к элементу.
 */
var applyFilter = function () {
  /**
   * Находит определение фильтра в value элемента и добавляет его к классу изменяемого элемента.
   * @return {value}.
   */
  var selectedFilter = [].filter.call(filterElement, function (item) {
    return item.checked;
  })[0].value;
  pictureElement.className = 'filter-image-preview ' + window.filterMap[selectedFilter];
};

window.initializeFilters(filterElement, applyFilter);

window.utils();
window.enable();
