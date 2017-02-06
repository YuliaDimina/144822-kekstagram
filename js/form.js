'use strict';
// объявляем константы
var BUTTON_KEY_CLOSE_BYENTER = 13;
var BUTTON_KEY_CLOSE_BYESCAPE = 27;
var changeAriaStatus = function (param1, param2) {
  if (param1.getAttribute(param2, false)) {
    param1.setAttribute(param2, true);
  } else {
    param1.setAttribute(param2, false);
  }
};
// определяем контейнер формы загрузки
var uploadBox = document.querySelector('.upload-overlay');
// определяем контейнер, содержащий все фильстры
var filtersContainer = document.querySelector('.upload-filter-controls');
// определяем все фильтры в массиве форм документа
var filterForm = document.forms['upload-filter'];
// определяем кнопку закрытия контейнера с формой загрузки картинки
var uploadFormClose = filterForm.querySelector('.upload-form-cancel');
// задаем функцию смены атрибута aria- кнопке закрытия формы
var uploadFormCloseAriastatus = changeAriaStatus(uploadFormClose, 'aria-pressed');
// Опередялем кнопку сохранения загруженной картинки с примененными фильтрами
var uploadFormSubmit = document.querySelector('.upload-form-submit');
// задаем функцию смены атрибута aria- в кнопке сохранения картинки
var uploadFormSubmitAriastatus = changeAriaStatus(uploadFormSubmit, 'aria-pressed');
// определяем кнопку загрузки картинки (инпут, в который добавляется файл картинки)
var uploadImageBtn = document.querySelector('.upload-input');
// задаем функцию показа контейнера с формой
var uploadBoxShow = function () {
  // делаем контейнер видимым, убирая соответствующий класс
  uploadBox.classList.remove('invisible');
  // задаем изменение атрибута aria- у контейнера с формой
  if (uploadBox.getAttribute('aria-hidden', true)) {
    uploadBox.setAttribute('aria-hidden', false);
  } else {
    uploadBox.setAttribute('aria-hidden', true);
  }
};
// задаем функцию закрытия контейнера формы
var uploadBoxClose = function () {
  // делаем контейнер невидимым, добавляя соответствующий класс
  uploadBox.classList.add('invisible');
  // применяем функцию изменения атрибута aria-
  uploadFormCloseAriastatus();
};
// задаем отслеживание изменения инпута, в который загружаем картинку,
// если меняется, то применяем функцию открытия контейнера формы загрузки
uploadImageBtn.addEventListener('change', function () {
  uploadBoxShow();
  // в состоянии открытого контейнера формы загрузки отслеживаем попытку закрытия формы
  // через Событие нажатия на кнопку Escape. Еслим да, то применяем функцию
  // закрытия контейнера с формой
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === BUTTON_KEY_CLOSE_BYESCAPE) {
      uploadBoxClose();
    }
  });
});
// отслеживаем клик по кнопке закрытия контейнера формы и применяем функцию закрытия
uploadFormClose.addEventListener('click', uploadBoxClose);
// отслеживаем Событие нажатия кнопки Enter на клавиатуре на кнопке закрытия формы
// и применяем функцию закрытия контейнера формы
uploadFormClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === BUTTON_KEY_CLOSE_BYENTER) {
    uploadBoxClose();
  }
});
// отслеживаем клик на кнопке сохранения загруженной картинки
uploadFormSubmit.addEventListener('click', function () {
  // скрывает контейнер формы загрузки
  uploadBox.classList.add('invisible');
  // меняем статус атрибута aria-
  uploadFormSubmitAriastatus();
});
// отслеживаем Событие сохранения картинки и закрытия формы занрузки
// нажатием кнопки Enter на клавиатуре на кнопке сохранения
uploadFormSubmit.addEventListener('keydown', function (evt) {
  if (evt.keyCode === BUTTON_KEY_CLOSE_BYENTER) {
    uploadBoxClose();
  }
});

// задаем объект Карта фильтров, куда вносим имена и значения фильтров
var filterMap = {
  'none': 'filter-none',
  'chrome': 'filter-chrome',
  'marvin': 'filter-marvin',
  'phobos': 'filter-phobos',
  'sepia': 'filter-sepia',
  'heat': 'filter-heat'
};
// задаем функцию извлечения названия конкретного фильтра из атрибута value каждого фильтра
function getCurrentFilterName() {
  return [].filter.call(filterForm, function (item) {
    return item.checked;
  })[0].value;
}
// ставим отслеживание изменения изменений в контейнере со всеми фильтрами
filtersContainer.addEventListener('change', function () {
  // задаем переменную с названием фильтра (которое получаем с помощью ранее
  // объявленной функции)
  var selectedFilter = getCurrentFilterName();
  // загруженной картинке присваиваем кроме уже существующего класа, класс, полученный
  // из Карты фильтров (имя фильтра получаем из value (получили
  // с помощью функции getCurrentFilterName), а значение уже из Карты)
  imagePreview.className = 'filter-image-preview ' + filterMap[selectedFilter];
});
// Задаем кнопки увеличения и уменьшения масштаба загруженной картинки, а так же определяем
// инпут, в котором будет отображаться текущее значение масштаба
var uploadResizeDecBtn = filterForm.querySelector('.upload-resize-controls-button-dec');
var uploadResizeIncBtn = filterForm.querySelector('.upload-resize-controls-button-inc');
var uploadResizeValue = filterForm.querySelector('.upload-resize-controls-value');
// задаем первоначальное значение масштаба
var currentZoom = 100;
// задаем шаг, на который будет изменяться масштаб
var step = 25;
// в атрибут value инпута, отображающего текущий масштаб, записываем значение масштаба
uploadResizeValue.value = currentZoom + ' %';
// определяем картинку, которую загружаем и к которой будем применять фильтры и масштаб
var imagePreview = filterForm.querySelector('.filter-image-preview');
// определяем функцию, которая будет применять css трансформацию стиля картинки в зависимости
// от выбранного масштаба.
var imagePreviewZoomTransform = function () {
  imagePreview.style.transform = ' scale(' + (currentZoom / 100) + ')';
};
// задаем функцию, которая будет записывать значение масштаба в атрибут value инпута,
// отвечающего за отображение текущего масштаба
var showUploadResize = function () {
  uploadResizeValue.value = currentZoom + ' %';
};
// задаем обработчик клика на кнопке уменьшения масштаба
uploadResizeDecBtn.addEventListener('click', function () {
  // если значение не ниже минимального
  if (currentZoom > 25) {
    // применяем функцию определения текущего масштаба, путем вычитанияиз текущего масштаба
    // ранее опреленного Шага
    currentZoom = currentZoom - step;
    // отображаем изменения
    showUploadResize();
  }
  // применяем функцию соответствующей трансформации картинки
  imagePreviewZoomTransform();
});
// задаем обработчик клика на кнопке увеличения масштаба картинки
uploadResizeIncBtn.addEventListener('click', function () {
  // если значение не больше допустимого максимума
  if (currentZoom < 100) {
    // к текущему значению масштаба прибавляем ранее определенный Шаг
    currentZoom = currentZoom + step;
    // отображаем новое текущение значение в инпуте отображения текущего масштаба
    showUploadResize();
  }
  // применяем функцию соответствующего изменения стиля картинки путем
  // css-трансформации
  imagePreviewZoomTransform();
});
