'use strict';

window.initializeFilters = (function () {

  var FILTER_CLASS_NAME = 'filter-';

  var _currentFilter = null;
  var _newFilter = null;
  var _filterElement = null;
  var _applyFilterFunc = null;

  function getClassNameByFilterName(filterName) {
    return FILTER_CLASS_NAME + filterName;
  }

  function getSelectedFilter() {
    _currentFilter = [].filter.call(_filterElement, function (item) {
      return item.checked;
    })[0].value;
  }

  function onChangeFilter(evt) {
    _newFilter = event.target.value;

    var oldClassFilter = getClassNameByFilterName(_newFilter);
    var newClassFilter = getClassNameByFilterName(_currentFilter);

    _applyFilterFunc(oldClassFilter, newClassFilter);

    _currentFilter = _newFilter;
  }

  return function (element, filterCallback) {
    _filterElement = element;
    _applyFilterFunc = filterCallback;

    getSelectedFilter();
    element.addEventListener('change', onChangeFilter);
  };


})();
