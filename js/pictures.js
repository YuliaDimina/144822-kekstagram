'use strict';

(function () {

  var DATA_URL = 'https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data';

  var pictureTemplate = document.querySelector('#picture-template');
  var picturesElement = pictureTemplate.content.querySelector('.picture');
  var picturesContainer = document.querySelector('.pictures');
  var filters = document.querySelector('.filters');
  var pictures = [];

  window.load(DATA_URL, onLoad);

  function sortByNew(array) {
    var newArray = array.slice();
    var sorted = [];

    while (sorted.length < 10) {
      var element = window.utils.getRandomElement(newArray);
      var index = sorted.indexOf(element);

      if (index === -1) {
        sorted.push(element);
      }
    }

    return sorted;
  }

  function sortByDiscussed(array) {
    var sorted = array.slice();
    sorted.sort(function (a, b) {
      return b.comments.length - a.comments.length;
    });

    return sorted;
  }

  function drawPictures(array) {
    var fragment = document.createDocumentFragment();

    array.forEach(function (picture) {

      var content = picturesElement.cloneNode(true);

      content.querySelector('img').src = picture.url;
      content.querySelector('.picture-likes').textContent = picture.likes;
      content.querySelector('.picture-comments').textContent = picture.comments.length;
      content.addEventListener('click', function (evt) {
        evt.preventDefault();
        window.showGallery(picture);
      });

      fragment.appendChild(content);
    });

    picturesContainer.appendChild(fragment);
  }

  function onLoad(event) {
    var target = event.target;
    pictures = target.response;

    drawPictures(pictures);

    window.utils.removeClass(filters, 'hidden');
    filters.addEventListener('click', onSelectFilter);
  }

  function onSelectFilter(e) {
    var filterEl = e.target;

    if (!window.utils.isContainClass(filterEl, 'filters-radio')) {
      return;
    }

    picturesContainer.innerHTML = '';

    switch (filterEl.value) {
      case 'popular':
        drawPictures(pictures);
        break;
      case 'new':
        drawPictures(sortByNew(pictures));
        break;
      case 'discussed':
        drawPictures(sortByDiscussed(pictures));
        break;
    }
  }
})();
