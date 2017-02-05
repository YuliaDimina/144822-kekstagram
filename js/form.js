'use strict';
var BUTTON_KEY_CLOSE_BYENTER = 13;
var BUTTON_KEY_CLOSE_BYESCAPE = 27;
var uploadBox = document.querySelector('.upload-overlay');
var filtersContainer = document.querySelector('.upload-filter-controls');
var filterForm = document.forms['upload-filter'];
var uploadFormClose = filterForm.querySelector('.upload-form-cancel');
var uploadFormCloseAriastatus = function () {
  if (uploadFormClose.getAttribute('aria-pressed', false)) {
    uploadFormClose.setAttribute('aria-pressed', true);
  } else {
    uploadFormClose.setAttribute('aria-pressed', false);
  }
};
var uploadFormSubmit = document.querySelector('.upload-form-submit');
var uploadFormSubmitAriastatus = function () {
  if (uploadFormSubmit.getAttribute('aria-pressed', false)) {
    uploadFormSubmit.setAttribute('aria-pressed', true);
  } else {
    uploadFormSubmit.setAttribute('aria-pressed', false);
  }
};
var uploadInput = document.querySelector('.upload-input');
var uploadBoxShow = function () {
  uploadBox.classList.remove('invisible');
  if (uploadBox.getAttribute('aria-hidden', true)) {
    uploadBox.setAttribute('aria-hidden', false);
  } else {
    uploadBox.setAttribute('aria-hidden', true);
  }
};
var uploadBoxClose = function () {
  uploadBox.classList.add('invisible');
  uploadFormCloseAriastatus();
};
uploadInput.addEventListener('change', function () {
  uploadBoxShow();
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === BUTTON_KEY_CLOSE_BYESCAPE) {
      uploadBoxClose();
    }
  });
});
uploadFormClose.addEventListener('click', uploadBoxClose);
uploadFormClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === BUTTON_KEY_CLOSE_BYENTER) {
    uploadBoxClose();
  }
});
uploadFormSubmit.addEventListener('click', function () {
  uploadFormSubmitAriastatus();
  uploadBox.classList.add('invisible');
});
uploadFormSubmit.addEventListener('keydown', function (evt) {
  if (evt.keyCode === BUTTON_KEY_CLOSE_BYENTER) {
    uploadBoxClose();
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

filtersContainer.addEventListener('change', function () {
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
