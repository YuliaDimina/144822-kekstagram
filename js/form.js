'use strict';
var uploadBox = document.querySelector('.upload-overlay');
var filterForm = document.forms['upload-filter'];
var uploadFormClose = filterForm.querySelector('.upload-form-cancel');
var uploadResizeDecBtn = filterForm.querySelector('.upload-resize-controls-button-dec');
var uploadResizeIncBtn = filterForm.querySelector('.upload-resize-controls-button-inc');
var uploadResizeValue = filterForm.querySelector('.upload-resize-controls-value');
var currentZoom = 100;
uploadResizeValue.value = currentZoom + ' %';
var imagePreview = filterForm.querySelector('.filter-image-preview');
var uploadInput = document.querySelector('.upload-input');
var step = 25;

var filterMap = {
  'none': 'filter-none',
  'chrome': 'filter-chrome',
  'marvin': 'filter-marvin',
  'phobos': 'filter-phobos',
  'sepia': 'filter-sepia',
  'heat': 'filter-heat'
};

function getCurrentFilterName() {
  return [].filter.call(filterForm, function (item) {
    return item.checked;
  })[0].value;
}

filterForm.addEventListener('change', function () {
  var selectedFilter = getCurrentFilterName();
  imagePreview.className = 'filter-image-preview ' + filterMap[selectedFilter];
});

uploadInput.addEventListener('change', function () {
  uploadBox.classList.remove('invisible');
});

uploadFormClose.addEventListener('click', function () {
  uploadBox.classList.add('invisible');
});

uploadResizeDecBtn.addEventListener('click', function () {
  if (currentZoom > 25) {
    currentZoom = currentZoom - step;
    uploadResizeValue.value = currentZoom + ' %';
  }
  imagePreview.style.transform = ' scale(' + (currentZoom / 100) + ')';
});

uploadResizeIncBtn.addEventListener('click', function () {
  if (currentZoom < 100) {
    currentZoom = currentZoom + step;
    uploadResizeValue.value = currentZoom + ' %';
  }
  imagePreview.style.transform = ' scale(' + (currentZoom / 100) + ')';
});
