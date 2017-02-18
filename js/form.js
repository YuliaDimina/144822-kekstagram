'use strict';
var BUTTON_KEY_CLOSE_BYENTER = 13;
var BUTTON_KEY_CLOSE_BYESCAPE = 27;

var uploadBox = document.querySelector('.upload-overlay');
var filterForm = document.forms['upload-filter'];
var uploadFormClose = filterForm.querySelector('.upload-form-cancel');
var uploadFormSubmit = document.querySelector('.upload-form-submit');
var uploadImageBtn = document.querySelector('.upload-input');

uploadImageBtn.addEventListener('change', listenUploadBtn);
uploadFormClose.addEventListener('click', uploadBoxClose);
uploadFormClose.addEventListener('keydown', listenFormCloseKeydown);
uploadFormSubmit.addEventListener('click', listenFormSubmit);
uploadFormSubmit.addEventListener('keydown', listenFormSubmitKeydown);


function uploadBoxShow() {
  uploadBox.classList.remove('invisible');
  if (uploadBox.getAttribute('aria-hidden', true)) {
    uploadBox.setAttribute('aria-hidden', false);
  } else {
    uploadBox.setAttribute('aria-hidden', true);
  }
}

function uploadBoxClose() {
  uploadBox.classList.add('invisible');
  changeAriaStatus(uploadFormClose, 'aria-pressed');
}

function listenUploadBtn() {
  uploadBoxShow();
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === BUTTON_KEY_CLOSE_BYESCAPE) {
      uploadBoxClose();
    }
  });
}

function listenFormCloseKeydown(evt) {
  if (evt.keyCode === BUTTON_KEY_CLOSE_BYENTER) {
    uploadBoxClose();
  }
}

function listenFormSubmit() {
  uploadBox.classList.add('invisible');
  changeAriaStatus(uploadFormSubmit, 'aria-pressed');
}

function listenFormSubmitKeydown(evt) {
  if (evt.keyCode === BUTTON_KEY_CLOSE_BYENTER) {
    uploadBoxClose();
  }
}

function changeAriaStatus(element, aria) {
  var result = element.getAttribute(aria, false);
  element.setAttribute(aria, result);
}

window.initializeFilters(function () {
  var filterMap = {
    'none': 'filter-none',
    'chrome': 'filter-chrome',
    'marvin': 'filter-marvin',
    'phobos': 'filter-phobos',
    'sepia': 'filter-sepia',
    'heat': 'filter-heat'
  };

  var filtersContainer = document.querySelector('.upload-filter-controls');
  filterForm = document.forms['upload-filter'];
  var imagePreview = filterForm.querySelector('.filter-image-preview');
  var setFilters = function () {
    return filtersContainer.addEventListener('change', function () {
      var selectedFilter = [].filter.call(filterForm, function (item) {
        return item.checked;
      })[0].value;
      imagePreview.className = 'filter-image-preview ' + filterMap[selectedFilter];
    });
  };
  return setFilters();
});

window.createScale(
    document.querySelector('.upload-resize-controls'),
    25,
    100,
    document.querySelector('.filter-image-preview')
);
