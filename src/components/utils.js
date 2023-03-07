/* модуль утилитарные функции, которые используются в работе сразу нескольких других функций */

import {
  createCard,
  grid
} from "./card.js";
import {
  closePopup
} from "./modal.js";
import {
  passNewCard,
  addAvatar,
} from "./api.js";
import {
  profile,
  profileAvatar
} from "../index.js"

const formPlaceElement = document.querySelector('.popup-place__form'); // принимает элемент формы из попап Новое место
const formAvatar = document.querySelector('.popup-avatar__form'); // принимает элемент формы из попап редактирования аватара
const inputCardLink = formPlaceElement.querySelector('.popup-place__text_edit_link'); // принимает поле ссылки на кртинку в попап редактирования карточки //
const inputCardTitle = formPlaceElement.querySelector('.popup-place__text_edit_title'); // принимает поле название места в попап редактирования карточки //
const inputAvatarLink = formAvatar.querySelector('.popup-avatar__text_edit_link'); // принимает поле ссылки на аватар в попап редактирования аватара //
const placePopup = document.querySelector('.popup-place'); //
const avatarPopup = document.querySelector('.popup-avatar'); //
const buttonSumitPlace = document.querySelector('.popup-place__button') // принимает кнопку сохранить в попап карточки
const buttonSumitAvatar = document.querySelector('.popup-avatar__button') // принимает кнопку сохранить в попап редактирования аватара

const renderLoading = (isLoading, button, buttonText = 'Сохранить', loadingText = 'Сохранение...') => {
  if (isLoading) {
    button.textContent = loadingText;
  } else {
    button.textContent = buttonText;
  };
};

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};



// Обработчик submit в добавлени карточки 
function handleFormSubmitPlace(evt) {
  evt.preventDefault();
  renderLoading(true, buttonSumitPlace);
  passNewCard(inputCardTitle.value, inputCardLink.value)
    .then((card) => {
      grid.prepend(createCard(card, profile));
      closePopup(placePopup)
      evt.target.reset();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, buttonSumitPlace);
    });
};

// Обработчик submit в редактировании аватара
function handleFormSubmitAvatar(evt) {
  evt.preventDefault();
  renderLoading(true, buttonSumitAvatar);
  addAvatar(inputAvatarLink.value)
    .then((res) => {
      profileAvatar.src = res.avatar;
      closePopup(avatarPopup)
      evt.target.reset();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, buttonSumitAvatar);
    });
 
};


export {
  handleFormSubmitPlace,
  handleFormSubmitAvatar,
  checkResponse,
  renderLoading,
  formPlaceElement,
  formAvatar,
  placePopup,
  avatarPopup,
  inputAvatarLink
};