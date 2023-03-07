/* модуль содержащий скрипты работы модальных окон */

import {
  renderLoading
} from "./utils.js"
import {
  passProfileDate,
  passNewCard,
  addAvatar
} from "./api.js"
import {
  profile,
  profileAvatar
} from "../index.js"
import {
  createCard,
  grid
} from "./card.js";

const buttonSumitProfile = document.querySelector('.popup-profile__button') // принимает кнопку сохранить в попап профайл
const buttonSumitPlace = document.querySelector('.popup-place__button') // принимает кнопку сохранить в попап карточки
const buttonSumitAvatar = document.querySelector('.popup-avatar__button') // принимает кнопку сохранить в попап редактирования аватара
const formProfile = document.querySelector('.popup-profile__form'); // принимает форму профайла из попап 
const nameInput = formProfile.querySelector('.popup__text_edit_name'); // принимает элемент с полем редактирования имени //
const jobInput = formProfile.querySelector('.popup__text_edit_career'); // принимает элемент с полем редактирования рода занятий //
const profileTitle = document.querySelector('.profile__title'); // принимает элемент с текстом имени //
const profileSubTitle = document.querySelector('.profile__subtitle'); // принимает элемент с текстом рода занятий //
const profilePopup = document.querySelector('.popup-profile'); //
const formPlaceElement = document.querySelector('.popup-place__form'); // принимает элемент формы из попап Новое место
const inputCardLink = formPlaceElement.querySelector('.popup-place__text_edit_link'); // принимает поле ссылки на кртинку в попап редактирования карточки //
const inputCardTitle = formPlaceElement.querySelector('.popup-place__text_edit_title'); // принимает поле название места в попап редактирования карточки //
const placePopup = document.querySelector('.popup-place'); //
const formAvatar = document.querySelector('.popup-avatar__form'); // принимает элемент формы из попап редактирования аватара
const inputAvatarLink = formAvatar.querySelector('.popup-avatar__text_edit_link'); // принимает поле ссылки на аватар в попап редактирования аватара //
const avatarPopup = document.querySelector('.popup-avatar'); //


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


// Функция закрытия popup по клику на overlay 

function closeOverlayClick(popupElements) {
  const popupsClick = Array.from(popupElements);
  popupsClick.forEach((popup) => {
    popup.addEventListener('mousedown', function (evt) {
      if (evt.target === popup) { // условие, что клик произошел именно по поппапу, а не по форме или еще где-то
        closePopup(popup);
      }
    });
  });
};

//Отдельная функция закрытия попапа клавишей Escape // Создана по замечанию ревьюера 

function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}


// Функция открытия popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);

};

// Функция закрытия popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);

};


export {
  openPopup,
  closePopup,
  closeOverlayClick,
  handleFormProfileSubmit,
  handleFormSubmitPlace,
  handleFormSubmitAvatar,
  formProfile,
  nameInput,
  jobInput,
  profileTitle,
  profileSubTitle,
  profilePopup,
  placePopup,
  formPlaceElement,
  formAvatar,
  avatarPopup
};