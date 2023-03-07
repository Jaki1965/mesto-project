/* модуль утилитарные функции, которые используются в работе сразу нескольких других функций */

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

const formAvatar = document.querySelector('.popup-avatar__form'); // принимает элемент формы из попап редактирования аватара
const inputAvatarLink = formAvatar.querySelector('.popup-avatar__text_edit_link'); // принимает поле ссылки на аватар в попап редактирования аватара //
const avatarPopup = document.querySelector('.popup-avatar'); //
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
  handleFormSubmitAvatar,
  checkResponse,
  renderLoading,
  formAvatar,
  avatarPopup,
  inputAvatarLink
};