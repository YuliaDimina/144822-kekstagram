'use strict';
window.initializeFilters = function (filterElement, callback) {
  window.filterMap = {
    'none': 'filter-none',
    'chrome': 'filter-chrome',
    'marvin': 'filter-marvin',
    'phobos': 'filter-phobos',
    'sepia': 'filter-sepia',
    'heat': 'filter-heat'
  };

  var filtersContainer = document.querySelector('.upload-filter-controls');
  filtersContainer.addEventListener('change', function () {
    callback();
  });
};


// function createFilters(ilterElement, collback) {
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
//
//   var setFilters = function () {
//     return filtersContainer.addEventListener('change', function () {
//       var selectedFilter = [].filter.call(filterForm, function (item) {
//         return item.checked;
//       })[0].value;
//       imagePreview.className = 'filter-image-preview ' + filterMap[selectedFilter];
//     });
//   };
//   return setFilters;
// }
//
// window.initializeFilters = (function () {
//   return createFilters;
// })();
