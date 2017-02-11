'use strict';
window.setFilters = (function () {
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
  var initializeFilters = function () {
    return filtersContainer.addEventListener('change', function () {
      var selectedFilter = [].filter.call(filterForm, function (item) {
        return item.checked;
      })[0].value;
      imagePreview.className = 'filter-image-preview ' + filterMap[selectedFilter];
    });
  };
  return initializeFilters;
})();

window.initializeFilters = function () {
  window.setFilters();
};

// window.initializeFilters = (function () {
//   var filterMap = {
//     'none': 'filter-none',
//     'chrome': 'filter-chrome',
//     'marvin': 'filter-marvin',
//     'phobos': 'filter-phobos',
//     'sepia': 'filter-sepia',
//     'heat': 'filter-heat'
//   };
//
//   var filtersContainer = document.querySelector('.upload-filter-controls');
//   var filterForm = document.forms['upload-filter'];
//   var imagePreview = filterForm.querySelector('.filter-image-preview');
//   filtersContainer.addEventListener('change', function () {
//     var selectedFilter = [].filter.call(filterForm, function (item) {
//       return item.checked;
//     })[0].value;
//     imagePreview.className = 'filter-image-preview ' + filterMap[selectedFilter];
//   });
// })();
