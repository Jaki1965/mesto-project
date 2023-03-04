/* модуль содержащий скрипты для работы с карточками */

import { openPopup } from "./modal.js";  
import { getCards } from "./api.js";

const popupImg = document.querySelector('.popup-image');   // принимает элемент попап открытия изображения
const popupPicture = document.querySelector('.popup-image__image');  // принимает элемент в котром хранится изображение места
const popupSubtitle = document.querySelector('.popup-image__subtitle');  // принимает элемент - подпись (название места ) в попап изображения
const gridTemplateCell = document.querySelector('#myTemplateOne').content; // принимает клон элемента #myTemplateOne - ячейка сетки //
const grid = document.querySelector('.grid__list'); // принимает обертку под сетку из карточек //

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
  popupPicture.src = evt.target.src;
  popupPicture.alt = evt.target.alt;
  popupSubtitle.textContent = evt.target.alt;
  openPopup(popupImg);
  };

 // Функция создающая карточку  //
 function createCard(name, link){
  const cardElement = gridTemplateCell.querySelector('.grid__list-cell').cloneNode(true); 
  const elementImage = cardElement.querySelector('.element__image');
  elementImage.src = link;   
  elementImage.alt = name;   
  cardElement.querySelector('.element__title').textContent = name;                                       
  cardElement.querySelector('.element__delet-button').addEventListener('click', removeCard);
  cardElement.querySelector('.element__button-heart').addEventListener('click', markHeart);
  elementImage.addEventListener('click', openImgPopup);
  return cardElement;
};

// Добавление карточки в сетку
// function addCard(cards){
//   cards.forEach(element => {
//     grid.prepend(createCard(element.name, element.link));
//   });
// }

// function addNewCard(name, link){
//   grid.prepend(createCard(name, link));
// }
// function addCard(card, box) {
// box.prepend(card);
// };

//getCards();

export { createCard, grid};