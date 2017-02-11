'use strict';
window.createScale = function (uploadResizeDecBtn, uploadResizeIncBtn, step, currentZoom) {

  // currentZoom = 100;
  // step = 25;
  // uploadResizeDecBtn = document.querySelector('.upload-resize-controls-button-dec');
  // uploadResizeIncBtn = document.querySelector('.upload-resize-controls-button-inc');
  var uploadResizeValue = document.querySelector('.upload-resize-controls-value');
  uploadResizeValue.value = currentZoom + ' %';
  var imagePreview = document.querySelector('.filter-image-preview');

  uploadResizeDecBtn.addEventListener('click', listenResizeDecBtn);
  uploadResizeIncBtn.addEventListener('click', listenResizeIncBtn);

  function imagePreviewZoomTransform() {
    imagePreview.style.transform = ' scale(' + (currentZoom / 100) + ')';
  }

  function showUploadResize() {
    uploadResizeValue.value = currentZoom + ' %';
  }

  function listenResizeDecBtn() {
    if (currentZoom > 25) {
      currentZoom = currentZoom - step;
      showUploadResize();
    }
    imagePreviewZoomTransform();
  }

  function listenResizeIncBtn() {
    if (currentZoom < 100) {
      currentZoom = currentZoom + step;
      showUploadResize();
    }
    imagePreviewZoomTransform();
  }
};

window.createScale(
    document.querySelector('.upload-resize-controls-button-dec'),
    document.querySelector('.upload-resize-controls-button-inc'),
    25,
    100
);
