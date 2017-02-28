
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

  function onCloseGalleryByEnter(evt) {
    if (window.utils.isActiveEvent(evt)) {
      onCloseGallery();
    }
  }

  function onCloseGalleryByEscape(evt) {
    if (window.utils.isDisactiavateEvent(evt)) {
      onCloseGallery();
    }
  }

  function onCloseGallery() {
    pictureBox.classList.add('invisible');
  }

  return function (data) {
    document.addEventListener('keydown', onCloseGalleryByEscape);
    document.addEventListener('keydown', onCloseGalleryByEnter);
    pictureBox.classList.remove('invisible');
    boxImage.src = data.url;
    lakes.textContent = data.likes;
    comments.textContent = data.comments.length;
    closeButton.focus();
  };
})();
