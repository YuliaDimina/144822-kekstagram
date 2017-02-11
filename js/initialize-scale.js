'use strict';
window.setScale = (function (resizeControls, step, currentZoom) {

  var uploadResizeDecBtn = resizeControls.querySelector('.upload-resize-controls-button-dec');
  var uploadResizeIncBtn = resizeControls.querySelector('.upload-resize-controls-button-inc');
  var uploadResizeValue = resizeControls.querySelector('.upload-resize-controls-value');
  var imagePreview = document.querySelector('.filter-image-preview');

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
  var createScale = function () {
    uploadResizeDecBtn.addEventListener('click', listenResizeDecBtn);
    uploadResizeIncBtn.addEventListener('click', listenResizeIncBtn);
  };
  return createScale();
})();

window.createScale = function () {
  window.setScale(
      document.querySelector('.upload-resize-controls'),
      25,
      100
  );
};
