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
 * Является callback для window.initializeFilters.
 * Отвечает за определение выбранного фильтра и применение новогого фильтра к элементу.
 * @param {string} newFilter - новый фильтр.
 * @param {string} oldFilter - предыдущий фильтр.
*/
var applyFilter = function (newFilter, oldFilter) {
  window.utils.removeClass(pictureElement, oldFilter);
  window.utils.addClass(pictureElement, newFilter);
};

window.initializeFilters(filterElement, applyFilter);
window.enable();
