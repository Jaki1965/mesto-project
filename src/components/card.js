/* модуль содержащий скрипты для работы с карточками */

import { openPopup } from "./modal.js";  // позже сменить импорт на modal.js

const formPlaceElement = document.querySelector('.popup-place__form');  // принимает элемент формы из попап Новое место
const openingPopupImg = document.querySelector('.popup-image');   // принимает элемент попап открытия изображения
const showImg = document.querySelector('.popup-image__image');  // принимает элемент в котром хранится изображение места
const showPopupSubtitle = document.querySelector('.popup-image__subtitle');  // принимает элемент - подпись (название места ) в попап изображения
const gridTemplateCell = document.querySelector('#myTemplateOne').content; // принимает клон элемента #myTemplateOne - ячейка сетки //
const existGrid = document.querySelector('.grid__list'); // принимает обертку под сетку из карточек //

// массив карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },

];


// Функция удаления карточки
function removeCard(evt){
  evt.target.closest('.grid__list-cell').remove();
};

// Функция отмечающая сердечко
function markHeart(evt){
  evt.target.classList.toggle('element__button-heart_dark');
};

// Функция открывающая popup изображения
function openImgPopup(evt){
  showImg.src = evt.target.src;
  showImg.alt = evt.target.alt;
  showPopupSubtitle.textContent = evt.target.alt;
  openPopup(openingPopupImg);
  };

 // Функция создающая карточку  /// поправлено многократно после замечаний ревьюера
 function createCard(name, link){
  const cardElement = gridTemplateCell.querySelector('.grid__list-cell').cloneNode(true); 
  cardElement.querySelector('.element__image').src = link;   
  cardElement.querySelector('.element__image').alt = name;   
  cardElement.querySelector('.element__title').textContent = name;                                       
  cardElement.querySelector('.element__delet-button').addEventListener('click', removeCard);
  cardElement.querySelector('.element__button-heart').addEventListener('click', markHeart);
  cardElement.querySelector('.element__image').addEventListener('click', openImgPopup);
  return cardElement;
};

// Создание первой сетки карточек // исправлено по замечанию ревьюера

initialCards.forEach(function(element){
const newCard = createCard(element.name, element.link); 
addCard(newCard, existGrid);
})

// Добавление карточки в сетку
function addCard(card, box) {
box.prepend(card);
};

export { addCard, createCard };