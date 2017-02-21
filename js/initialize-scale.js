'use strict';
function createScale(scaleElement, scaleStep, initialScale, callback) {

  var uploadResizeDecBtn = scaleElement.querySelector('.upload-resize-controls-button-dec');
  var uploadResizeIncBtn = scaleElement.querySelector('.upload-resize-controls-button-inc');
  var uploadResizeValue = scaleElement.querySelector('.upload-resize-controls-value');

  uploadResizeDecBtn.addEventListener('click', function () {

    if (initialScale > 25) {
      initialScale = initialScale - scaleStep;
      uploadResizeValue.value = initialScale + ' %';
    }

    callback(initialScale);
  });

  uploadResizeIncBtn.addEventListener('click', function () {

    if (initialScale < 100) {
      initialScale = initialScale + scaleStep;
      uploadResizeValue.value = initialScale + ' %';
    }

    callback(initialScale);
  });

}

window.initializeScale = (function () {
  return createScale;
})();
