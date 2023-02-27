// импорты 
import './pages/index.css';
import { enableValidation, selectors } from "./components/validate.js";
import {closeOverlayClick, closeOverlayEscape} from "./components/modal.js";
import {handleFormSubmit, handleFormSubmitPlace} from "./components/utils.js";
import {addCard, createCard, grid} from "./components/card.js";

// const grid = document.querySelector('.grid__list'); // принимает обертку под сетку из карточек //
const formPlaceElement = document.querySelector('.popup-place__form');  // принимает элемент формы из попап Новое место
const formElement = document.querySelector('.popup__form');  // принимает форму из попап
const popups = document.querySelectorAll('.popup');  

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

// Создание первой сетки карточек // исправлено по замечанию ревьюера

initialCards.forEach(function(element){
const newCard = createCard(element.name, element.link); 
addCard(newCard, grid);
})

// функция валидации форм 
enableValidation(selectors);  

// Функция закрытия popup по клику на overlay 
closeOverlayClick(popups);

// Функция закрывает popup по нажатию на клавишу escape
closeOverlayEscape(popups);

// submit формы profile
formElement.addEventListener('submit', handleFormSubmit);

// submit формы place
formPlaceElement.addEventListener('submit', handleFormSubmitPlace);
