'use strict';
window.initializeFilters = function () {
  var filterMap = {
    'none': 'filter-none',
    'chrome': 'filter-chrome',
    'marvin': 'filter-marvin',
    'phobos': 'filter-phobos',
    'sepia': 'filter-sepia',
    'heat': 'filter-heat'
  };

  var filtersContainer = document.querySelector('.upload-filter-controls');
  var filterForm = document.forms['upload-filter'];
  var imagePreview = filterForm.querySelector('.filter-image-preview');
  filtersContainer.addEventListener('change', listenFilterChange);

  function getCurrentFilterName() {
    return [].filter.call(filterForm, function (item) {
      return item.checked;
    })[0].value;
  }

  function listenFilterChange() {
    var selectedFilter = getCurrentFilterName();
    imagePreview.className = 'filter-image-preview ' + filterMap[selectedFilter];
  }
};

// function changeAriaStatus(element, aria) {
//   if (element.getAttribute(aria, false)) {
//     element.setAttribute(aria, true);
//   } else {
//     element.setAttribute(aria, false);
//   }
// }
