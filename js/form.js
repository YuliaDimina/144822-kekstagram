'use strict';

var SCALE_STEP = 25;
var INITIAL_SCALE = 100;
var scaleElement = document.querySelector('.upload-resize-controls');
var pictureElement = document.querySelector('.filter-image-preview');
var uploadBox = document.querySelector('.upload-overlay');
var filterForm = document.forms['upload-filter'];
var uploadFormClose = filterForm.querySelector('.upload-form-cancel');
var uploadFormSubmit = filterForm.querySelector('.upload-form-submit');
var uploadImageBtn = document.querySelector('.upload-input');

/**
 * Является collback для window.initializeScale.
 * Отвечает за трансформацию (масштабирование) элемента.
 * @param {number} scale - параметр INITIAL_SCALE.
 */
var adjustScale = function (scale) {
  pictureElement.style.transform = 'scale(' + scale / 100 + ')';
};

window.initializeScale(scaleElement, SCALE_STEP, INITIAL_SCALE, adjustScale);

/**
 * Является callback для window.initializeFilters.
 * Отвечает за определение выбранного фильтра и применение новогого фильтра к элементу.
 * @param {string} newFilter - новый фильтр.
 * @param {string} oldFilter - предыдущий фильтр.
*/
var applyFilter = function (newFilter, oldFilter) {
  window.utils.removeClass(pictureElement, oldFilter);
  window.utils.addClass(pictureElement, newFilter);
};

window.initializeFilters(filterForm, applyFilter);

uploadImageBtn.addEventListener('change', listenUploadBtn);
uploadFormClose.addEventListener('click', uploadBoxClose);
uploadFormClose.addEventListener('keydown', listenFormCloseKeydown);
uploadFormSubmit.addEventListener('click', listenFormSubmit);
uploadFormSubmit.addEventListener('keydown', listenFormSubmitKeydown);
document.addEventListener('keydown', function (evt) {
  if (window.utils.isDisactiavateEvent(evt)) {
    uploadBoxClose();
  }
});

/**
 * Отвечает за отображение формы загрузки и смену атрибута aria.
 */
function uploadBoxShow() {
  window.utils.removeClass(uploadBox, 'invisible');
  if (uploadBox.getAttribute('aria-hidden')) {
    uploadBox.setAttribute('aria-hidden', false);
  } else {
    uploadBox.setAttribute('aria-hidden', true);
  }
}
/**
 * Отвечает за скрытие формы загрузки и смену атрибута aria.
 */
function uploadBoxClose() {
  window.utils.addClass(uploadBox, 'invisible');
  changeAriaStatus(uploadFormClose);
}
/**
 * Отвечает за отображение/скрытие формы загрузки по клавиатурному событию.
 */
function listenUploadBtn() {
  uploadBoxShow();
  uploadFormClose.addEventListener('keydown', function (evt) {
    if (window.utils.isActiveEvent(evt) || window.utils.isDisactiavateEvent(evt)) {
      uploadBoxClose();
    }
  });
}
/**
 * Отвечает за скрытие формы загрузки по клавиатурному событию.
 * @param {event} evt - нажатие клавыши Enter
 */
function listenFormCloseKeydown(evt) {
  if (window.utils.isActiveEvent(evt) || window.utils.isDisactiavateEvent(evt)) {
    uploadBoxClose();
  }
}
/**
 * Отвечает за скрытие формы загрузки по клику на кнопку Отправить
 */
function listenFormSubmit() {
  window.utils.addClass(uploadBox, 'invisible');
  changeAriaStatus(uploadFormSubmit);
}
/**
 * Отвечает за скрытие формы загрузки по клавиатурному событию во время фокуса
 * на кнопке Отправить.
 * @param {event} evt - нажатие клавыши Enter
 */
function listenFormSubmitKeydown(evt) {
  if (window.utils.isActiveEvent(evt)) {
    uploadBoxClose();
  }
}
function changeAriaStatus(element) {
  if (element.getAttribute('aria-pressed')) {
    element.setAttribute('aria-pressed', true);
  } else {
    element.setAttribute('aria-pressed', false);
  }
}
