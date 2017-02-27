
'use strict';
/**
 * Функция отображает\скрывает отдельный элемент массива (фото из галлереи).
 */
window.showGallery = (function () {
  var pictureBox = document.querySelector('.gallery-overlay');
  var closeButton = pictureBox.querySelector('.gallery-overlay-close');
  var boxImage = pictureBox.querySelector('.gallery-overlay-image');
  var lakes = pictureBox.querySelector('.likes-count');
  var comments = pictureBox.querySelector('.comments-count');

  closeButton.addEventListener('click', onCloseGallery);
  closeButton.addEventListener('keydown', onCloseGalleryByEnter);

  function onCloseGalleryByEnter(event) {
    if (window.utils.isActiveEvent(event)) {
      onCloseGallery();
    }
  }

  function onCloseGalleryByEscape(event) {
    if (window.utils.isDisactiavateEvent(event)) {
      onCloseGallery();
    }
  }

  function onCloseGallery() {
    pictureBox.classList.add('invisible');
  }

  return function (data) {
    document.addEventListener('keydown', onCloseGallery);
    document.addEventListener('keydown', onCloseGalleryByEscape);
    pictureBox.classList.remove('invisible');
    boxImage.src = data.url;
    lakes.textContent = data.likes;
    comments.textContent = data.comments.length;
    closeButton.focus();
  };
})();
