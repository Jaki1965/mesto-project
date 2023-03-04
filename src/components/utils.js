/* модуль утилитарные функции, которые используются в работе сразу нескольких других функций */

import { addCard, createCard, grid } from "./card.js";
import {closePopup} from "./modal.js";
import { passProfileDate } from "./api.js";

const formPlaceElement = document.querySelector('.popup-place__form');  // принимает элемент формы из попап Новое место
const inputCardLink = formPlaceElement.querySelector('.popup-place__text_edit_link'); // принимает поле ссылки на кртинку в попап редактирования карточки //
const inputCardTitle = formPlaceElement.querySelector('.popup-place__text_edit_title'); // принимает поле название места в попап редактирования карточки //
const formProfile = document.querySelector('.popup-profile__form');  // принимает форму профайла из попап 
const nameInput = formProfile.querySelector('.popup__text_edit_name'); // принимает элемент с полем редактирования имени //
const jobInput = formProfile.querySelector('.popup__text_edit_career'); // принимает элемент с полем редактирования рода занятий //
const profileTitle = document.querySelector('.profile__title');  // принимает элемент с текстом имени //
const profileSubTitle = document.querySelector('.profile__subtitle'); // принимает элемент с текстом рода занятий //
const profilePopup = document.querySelector('.popup-profile');  //
const placePopup = document.querySelector('.popup-place'); //



// Обработчик submit в редактировании профиля
function handleFormProfileSubmit(evt) {
  evt.preventDefault(); 
  profileTitle.textContent = nameInput.value;
  profileSubTitle.textContent = jobInput.value;
  passProfileDate(nameInput, jobInput);            // вызов функции передачи данных пользователя (профайла) на сервер
  closePopup(profilePopup);
  evt.target.reset();
};
 

// Обработчик submit в добавлени карточки 
function handleFormSubmitPlace(evt) {
  evt.preventDefault(); 
  const newCard = createCard(inputCardTitle.value, inputCardLink.value);
  addCard(newCard, grid);
  closePopup(placePopup);
  evt.target.reset();
};


export {handleFormProfileSubmit, handleFormSubmitPlace, formPlaceElement, formProfile, nameInput, jobInput, profileTitle,  profileSubTitle, profilePopup, placePopup};