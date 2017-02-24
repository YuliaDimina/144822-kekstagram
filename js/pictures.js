
'use strict';
// (function () {
//   var pictureTemplate = document.querySelector('#picture-template');
//   var picturesElement = pictureTemplate.content.querySelector('.picture');
//   var picturesContainer = document.querySelector('.pictures');
//
//   var openGallery = function(evt) {
//     evt.preventDefault();
//     window.showGallery(picture);
//   }
//
//   var loadData = function(event) {
//     var target = event.target;
//     var pictures = target.response;
//     var fragment = document.createDocumentFragment();
//
//     pictures.forEach(function (picture) {
//       var content = picturesElement.cloneNode(true);
//
//       content.querySelector('img').src = picture.url;
//       content.querySelector('.picture-likes').textContent = picture.likes;
//       content.querySelector('.picture-comments').textContent = picture.comments.length;
//       content.addEventListener('click', openGallery);
//
//       fragment.appendChild(content);
//
//       picturesContainer.appendChild(fragment);
//     });
//   };
//
//   window.load('https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data', loadData);
//
// })();

(function () {
  var pictureTemplate = document.querySelector('#picture-template');
  var picturesElement = pictureTemplate.content.querySelector('.picture');
  var picturesContainer = document.querySelector('.pictures');

  window.load('https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data', onLoad);

  function onLoad(event) {
    var target = event.target;
    var pictures = target.response;
    var fragment = document.createDocumentFragment();

    pictures.forEach(function (picture) {
      var content = picturesElement.cloneNode(true);

      content.querySelector('img').src = picture.url;
      content.querySelector('.picture-likes').textContent = picture.likes;
      content.querySelector('.picture-comments').textContent = picture.comments.length;
      content.addEventListener('click', onOpen);

      fragment.appendChild(content);

      function onOpen(evt) {
        evt.preventDefault();
        window.showGallery(picture);
      }
    });

    picturesContainer.appendChild(fragment);
  }
})();
