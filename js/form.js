'use strict';

var scaleElement = document.querySelector('.upload-resize-controls');
var pictureElement = document.querySelector('.filter-image-preview');
var SCALE_STEP = 25;
var INITIAL_SCALE = 100;

var adjustScale = function (scale) {
  pictureElement.style.transform = 'scale(' + scale / 100 + ')';
};

window.initializeScale(scaleElement, SCALE_STEP, INITIAL_SCALE, adjustScale);

var filterElement = document.forms['upload-filter'];
var applyFilter = function () {
  var selectedFilter = [].filter.call(filterElement, function (item) {
    return item.checked;
  })[0].value;
  pictureElement.className = 'filter-image-preview ' + window.filterMap[selectedFilter];
};

window.initializeFilters(filterElement, applyFilter);

window.utils();
window.enable();
