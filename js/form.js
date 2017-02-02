'use strict';
var uploadBox = document.querySelector('.upload-overlay');
var filterForm = document.forms['upload-filter'];
var uploadFormClose = filterForm.querySelector('.upload-form-cancel');
var uploadInput = document.querySelector('.upload-input');
var BUTTON_KEY_CLOSE_BYENTER = 13;
var BUTTON_KEY_CLOSE_BYESCAPE = 27;
var uploadBoxShow = function () {
  uploadBox.classList.remove('invisible');
};
var uploadBoxClose = function () {
  uploadBox.classList.add('invisible');
};
// var changeCloseButtonAreaPressed = function() {
//   uploadFormClose.area-pressed = 'true';
// }

uploadInput.addEventListener('change', function () {
  uploadBoxShow();
  // uploadBox.area-hidden = 'false';
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === BUTTON_KEY_CLOSE_BYESCAPE) {
      uploadBoxClose();
      // uploadBox.area-hidden = 'true';
    }
  });
});

uploadFormClose.addEventListener('click', function () {
  uploadBoxClose();
  // changeCloseButtonAreaPressed();
});

uploadFormClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === BUTTON_KEY_CLOSE_BYENTER) {
    uploadBoxClose();
    // changeCloseButtonAreaPressed();
  }
});

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

var uploadResizeDecBtn = filterForm.querySelector('.upload-resize-controls-button-dec');
var uploadResizeIncBtn = filterForm.querySelector('.upload-resize-controls-button-inc');
var uploadResizeValue = filterForm.querySelector('.upload-resize-controls-value');
var currentZoom = 100;
var step = 25;
uploadResizeValue.value = currentZoom + ' %';
var imagePreview = filterForm.querySelector('.filter-image-preview');
var imagePreviewZoomTransform = function () {
  imagePreview.style.transform = ' scale(' + (currentZoom / 100) + ')';
};
var showUploadResize = function () {
  uploadResizeValue.value = currentZoom + ' %';
};

uploadResizeDecBtn.addEventListener('click', function () {
  if (currentZoom > 25) {
    currentZoom = currentZoom - step;
    showUploadResize();
  }
  imagePreviewZoomTransform();
});

uploadResizeIncBtn.addEventListener('click', function () {
  if (currentZoom < 100) {
    currentZoom = currentZoom + step;
    showUploadResize();
  }
  imagePreviewZoomTransform();
});

// проверка eslint
