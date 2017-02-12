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

window.initializeFilters();
window.createScale(
    document.querySelector('.upload-resize-controls'),
    25,
    100,
    document.querySelector('.filter-image-preview')
);
