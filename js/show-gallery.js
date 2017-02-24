
'use strict';

window.showGallery = (function () {
  var pictureBox = document.querySelector('.gallery-overlay');
  var closeButton = pictureBox.querySelector('.gallery-overlay-close');
  var boxImage = pictureBox.querySelector('.gallery-overlay-image');
  var lakes = pictureBox.querySelector('.likes-count');
  var comments = pictureBox.querySelector('.comments-count');

  closeButton.addEventListener('click', closeGallery);

  function closeGallery() {
    pictureBox.classList.add('invisible');
  }

  return function (data) {
    document.addEventListener('keydown', closeGallery);
    pictureBox.classList.remove('invisible');
    boxImage.src = data.url;
    lakes.textContent = data.likes;
    comments.textContent = data.comments.length;
    closeButton.focus();
  };
})();
