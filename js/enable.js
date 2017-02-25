'use strict';

window.enable = function () {
  var uploadBox = document.querySelector('.upload-overlay');
  var filterForm = document.forms['upload-filter'];
  var uploadFormClose = filterForm.querySelector('.upload-form-cancel');
  var uploadFormSubmit = document.querySelector('.upload-form-submit');
  var uploadImageBtn = document.querySelector('.upload-input');

  uploadImageBtn.addEventListener('change', listenUploadBtn);
  uploadFormClose.addEventListener('click', uploadBoxClose);
  uploadFormClose.addEventListener('keydown', listenFormCloseKeydown);
  uploadFormSubmit.addEventListener('click', listenFormSubmit);
  uploadFormSubmit.addEventListener('keydown', listenFormSubmitKeydown);

  /**
   * Отвечает за отображение формы загрузки и смену атрибута aria.
   */
  function uploadBoxShow() {
    uploadBox.classList.remove('invisible');
    if (uploadBox.getAttribute('aria-hidden', true)) {
      uploadBox.setAttribute('aria-hidden', false);
    } else {
      uploadBox.setAttribute('aria-hidden', true);
    }
  }
  /**
   * Отвечает за скрытие формы загрузки и смену атрибута aria.
   */
  function uploadBoxClose() {
    uploadBox.classList.add('invisible');
    changeAriaStatus(uploadFormClose, 'aria-pressed');
  }
  /**
   * Отвечает за отображение/скрытие формы загрузки по клавиатурному событию.
   */
  function listenUploadBtn() {
    uploadBoxShow();
    document.addEventListener('keydown', function (evt) {
      if (window.utils.isDisactiavateEvent) {
        uploadBoxClose();
      }
    });
  }
  /**
   * Отвечает за скрытие формы загрузки по клавиатурному событию.
   * @param {event} evt - нажатие клавыши Enter
   */
  function listenFormCloseKeydown(evt) {
    if (window.utils.isActiveEvent) {
      uploadBoxClose();
    }
  }

  /**
   * Отвечает за скрытие формы загрузки по клику на кнопку Отправить
   */
  function listenFormSubmit() {
    window.utils.addClass(uploadBox, 'invisible');
    // uploadBox.classList.add('invisible');
    changeAriaStatus(uploadFormSubmit, 'aria-pressed');
  }
  /**
   * Отвечает за скрытие формы загрузки по клавиатурному событию во время фокуса
   * на кнопке Отправить.
   * @param {event} evt - нажатие клавыши Enter
   */
  function listenFormSubmitKeydown(evt) {
    if (window.utils.isActiveEvent) {
      uploadBoxClose();
    }
  }

  function changeAriaStatus(element, aria) {
    var result = element.getAttribute(aria, false);
    element.setAttribute(aria, result);
  }
};
