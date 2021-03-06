'use strict';
/**
 * Функция отвечает за определение и применение css-фильтров к элементам.
 */
window.initializeFilters = (function () {

  var FILTER_CLASS_NAME = 'filter-';

  var _currentFilter = null;
  var _newFilter = null;
  var _filterElement = null;
  var _applyFilterFunc = null;

  function getClassNameByFilterName(filterName) {
    return FILTER_CLASS_NAME + filterName;
  }

  function setFilters(filterName) {

    _newFilter = filterName;

    var oldClassFilter = getClassNameByFilterName(_newFilter);
    var newClassFilter = getClassNameByFilterName(_currentFilter);

    _applyFilterFunc(oldClassFilter, newClassFilter);

    _currentFilter = _newFilter;
  }

  /**
   * Функция определяет название выбранного фильтра.
   */
  function getSelectedFilter() {
    _currentFilter = [].filter.call(_filterElement, function (item) {
      return item.checked;
    })[0].value;
  }

  function onEnterClick(evt) {
    if (window.utils.isActiveEvent(evt)) {
      var target = evt.target;

      if (!window.utils.isContainClass(target, 'upload-filter-preview')) {
        return;
      }

      var newFilterName = target.parentNode.previousElementSibling.value;

      setFilters(newFilterName);
    }
  }

  function onChangeFilter(evt) {
    setFilters(evt.target.value);
  }


  /**
   * Функция определяет начальный фильтр и по клику меняет его на выбранный.
   * @param {element} element - html-элемент.
   * @param {@callback} filterCallback - удаляет предыдущий css-класс фильтра
   * и добавляет новый css-класс фильтра.
   */
  return function (element, filterCallback) {
    _filterElement = element;
    _applyFilterFunc = filterCallback;

    getSelectedFilter();
    element.addEventListener('change', onChangeFilter);
    element.addEventListener('keydown', onEnterClick);
  };


})();
