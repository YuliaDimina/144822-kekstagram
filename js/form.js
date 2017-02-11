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
  if (element.getAttribute(aria, false)) {
    element.setAttribute(aria, true);
  } else {
    element.setAttribute(aria, false);
  }
}

window.initializeFilters();
window.createScale(
    document.querySelector('.upload-resize-controls'),
    25,
    100
);


// 'use strict';
// var BUTTON_KEY_CLOSE_BYENTER = 13;
// var BUTTON_KEY_CLOSE_BYESCAPE = 27;
// var filterMap = {
//   'none': 'filter-none',
//   'chrome': 'filter-chrome',
//   'marvin': 'filter-marvin',
//   'phobos': 'filter-phobos',
//   'sepia': 'filter-sepia',
//   'heat': 'filter-heat'
// };
// var currentZoom = 100;
// var step = 25;
// var uploadBox = document.querySelector('.upload-overlay');
// var filtersContainer = document.querySelector('.upload-filter-controls');
// var filterForm = document.forms['upload-filter'];
// var uploadFormClose = filterForm.querySelector('.upload-form-cancel');
// var uploadFormSubmit = document.querySelector('.upload-form-submit');
// var uploadImageBtn = document.querySelector('.upload-input');
// var uploadResizeDecBtn = filterForm.querySelector('.upload-resize-controls-button-dec');
// var uploadResizeIncBtn = filterForm.querySelector('.upload-resize-controls-button-inc');
// var uploadResizeValue = filterForm.querySelector('.upload-resize-controls-value');
// uploadResizeValue.value = currentZoom + ' %';
// var imagePreview = filterForm.querySelector('.filter-image-preview');
//
// uploadImageBtn.addEventListener('change', listenUploadBtn);
// uploadFormClose.addEventListener('click', uploadBoxClose);
// uploadFormClose.addEventListener('keydown', listenFormCloseKeydown);
// uploadFormSubmit.addEventListener('click', listenFormSubmit);
// uploadFormSubmit.addEventListener('keydown', listenFormSubmitKeydown);
// filtersContainer.addEventListener('change', listenFilterChange);
// uploadResizeDecBtn.addEventListener('click', listenResizeDecBtn);
// uploadResizeIncBtn.addEventListener('click', listenResizeIncBtn);
//
// function uploadBoxShow() {
//   uploadBox.classList.remove('invisible');
//   if (uploadBox.getAttribute('aria-hidden', true)) {
//     uploadBox.setAttribute('aria-hidden', false);
//   } else {
//     uploadBox.setAttribute('aria-hidden', true);
//   }
// }
// function uploadBoxClose() {
//   uploadBox.classList.add('invisible');
//   changeAriaStatus(uploadFormClose, 'aria-pressed');
// }
//
// function listenUploadBtn() {
//   uploadBoxShow();
//   document.addEventListener('keydown', function (evt) {
//     if (evt.keyCode === BUTTON_KEY_CLOSE_BYESCAPE) {
//       uploadBoxClose();
//     }
//   });
// }
//
// function listenFormCloseKeydown(evt) {
//   if (evt.keyCode === BUTTON_KEY_CLOSE_BYENTER) {
//     uploadBoxClose();
//   }
// }
//
// function listenFormSubmit() {
//   uploadBox.classList.add('invisible');
//   changeAriaStatus(uploadFormSubmit, 'aria-pressed');
// }
//
// function listenFormSubmitKeydown(evt) {
//   if (evt.keyCode === BUTTON_KEY_CLOSE_BYENTER) {
//     uploadBoxClose();
//   }
// }
//
// function getCurrentFilterName() {
//   return [].filter.call(filterForm, function (item) {
//     return item.checked;
//   })[0].value;
// }
//
// function listenFilterChange() {
//   var selectedFilter = getCurrentFilterName();
//   imagePreview.className = 'filter-image-preview ' + filterMap[selectedFilter];
// }
//
// function imagePreviewZoomTransform() {
//   imagePreview.style.transform = ' scale(' + (currentZoom / 100) + ')';
// }
//
// function showUploadResize() {
//   uploadResizeValue.value = currentZoom + ' %';
// }
//
// function listenResizeDecBtn() {
//   if (currentZoom > 25) {
//     currentZoom = currentZoom - step;
//     showUploadResize();
//   }
//   imagePreviewZoomTransform();
// }
//
// function listenResizeIncBtn() {
//   if (currentZoom < 100) {
//     currentZoom = currentZoom + step;
//     showUploadResize();
//   }
//   imagePreviewZoomTransform();
// }
//
// function changeAriaStatus(element, aria) {
//   if (element.getAttribute(aria, false)) {
//     element.setAttribute(aria, true);
//   } else {
//     element.setAttribute(aria, false);
//   }
// }
