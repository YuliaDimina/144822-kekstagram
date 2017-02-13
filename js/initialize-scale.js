'use strict';
window.createScale = (function () {

  return setScale;

  function setScale(resizeControls, step, currentZoom, imagePreview) {

    var uploadResizeDecBtn = resizeControls.querySelector('.upload-resize-controls-button-dec');
    var uploadResizeIncBtn = resizeControls.querySelector('.upload-resize-controls-button-inc');
    var uploadResizeValue = resizeControls.querySelector('.upload-resize-controls-value');

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

    function imagePreviewZoomTransform() {
      imagePreview.style.transform = ' scale(' + (currentZoom / 100) + ')';
    }

    function showUploadResize() {
      uploadResizeValue.value = currentZoom + ' %';
    }
  }
})();
