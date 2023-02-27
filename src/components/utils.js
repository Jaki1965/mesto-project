/* модуль утилитарные функции, которые используются в работе сразу нескольких других функций */

import { addCard, createCard, grid } from "./card.js";
import {closePopup} from "./modal.js";

const formPlaceElement = document.querySelector('.popup-place__form');  // принимает элемент формы из попап Новое место
const inputCardLink = formPlaceElement.querySelector('.popup-place__text_edit_link'); // принимает поле ссылки на кртинку в попап редактирования карточки //
const inputCardTitle = formPlaceElement.querySelector('.popup-place__text_edit_title'); // принимает поле название места в попап редактирования карточки //
const formElement = document.querySelector('.popup__form');  // принимает форму из попап 
const nameInput = formElement.querySelector('.popup__text_edit_name'); // принимает элемент с полем редактирования имени //
const jobInput = formElement.querySelector('.popup__text_edit_career'); // принимает элемент с полем редактирования рода занятий //
const profileTitle = document.querySelector('.profile__title');  // принимает элемент с текстом имени //
const profileSubTitle = document.querySelector('.profile__subtitle'); // принимает элемент с текстом рода занятий //
const profilePopup = document.querySelector('.popup-profile');  //
const placePopup = document.querySelector('.popup-place'); //

// Обработчик submit в редактировании профиля // изменено согласно замечаний ревьюера
function handleFormSubmit(evt) {
  evt.preventDefault(); 
  profileTitle.textContent = nameInput.value;
  profileSubTitle.textContent = jobInput.value;
  closePopup(profilePopup);
  evt.target.reset();
};


// Обработчик submit в добавлени карточки  // изменено согласно замечаний ревьюера
function handleFormSubmitPlace(evt) {
  evt.preventDefault(); 
  const newCard = createCard(inputCardTitle.value, inputCardLink.value);
  addCard(newCard, grid);
  closePopup(placePopup);
  evt.target.reset();
};


export {handleFormSubmit, handleFormSubmitPlace};