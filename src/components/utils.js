/* модуль утилитарные функции, которые используются в работе сразу нескольких других функций */

import {
  createCard,
  grid
} from "./card.js";
import {
  closePopup
} from "./modal.js";
import {
  passProfileDate,
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
const formProfile = document.querySelector('.popup-profile__form'); // принимает форму профайла из попап 
const nameInput = formProfile.querySelector('.popup__text_edit_name'); // принимает элемент с полем редактирования имени //
const jobInput = formProfile.querySelector('.popup__text_edit_career'); // принимает элемент с полем редактирования рода занятий //
const profileTitle = document.querySelector('.profile__title'); // принимает элемент с текстом имени //
const profileSubTitle = document.querySelector('.profile__subtitle'); // принимает элемент с текстом рода занятий //
const profilePopup = document.querySelector('.popup-profile'); //
const placePopup = document.querySelector('.popup-place'); //
const avatarPopup = document.querySelector('.popup-avatar'); //
const buttonSumitProfile = document.querySelector('.popup-profile__button') // принимает кнопку сохранить в попап профайл
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

// Создано по рекомендиции ревьюера 

function handleSubmit(request, evt, loadingText = "Сохранение...") {
   evt.preventDefault();
   const submitButton = evt.submitter;
   const initialText = submitButton.textContent;
   renderLoading(true, submitButton, initialText, loadingText);
   request()
     .then(() => {
       evt.target.reset();
     })
     .catch((err) => {
       console.error(`Ошибка: ${err}`);
     })
     .finally(() => {
       renderLoading(false, submitButton, initialText);
     });
 }
 

// Обработчик submit в редактировании профиля
function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  renderLoading(true, buttonSumitProfile);
  passProfileDate(nameInput.value, jobInput.value)
    .then((res) => {
      profileTitle.textContent = res.name;
      profileSubTitle.textContent = res.about;
      closePopup(profilePopup);
      evt.target.reset();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, buttonSumitProfile);
    })
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
  handleFormProfileSubmit,
  handleFormSubmitPlace,
  handleFormSubmitAvatar,
  checkResponse,
  formPlaceElement,
  formProfile,
  formAvatar,
  nameInput,
  jobInput,
  profileTitle,
  profileSubTitle,
  profilePopup,
  placePopup,
  avatarPopup,
  inputAvatarLink
};