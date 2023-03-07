/* модуль содержащий скрипты работы модальных окон */

import {renderLoading} from "./utils.js"
import {passProfileDate} from "./api.js"


const buttonSumitProfile = document.querySelector('.popup-profile__button') // принимает кнопку сохранить в попап профайл
const buttonSumitPlace = document.querySelector('.popup-place__button') // принимает кнопку сохранить в попап карточки
const buttonSumitAvatar = document.querySelector('.popup-avatar__button') // принимает кнопку сохранить в попап редактирования аватара
const formProfile = document.querySelector('.popup-profile__form'); // принимает форму профайла из попап 
const nameInput = formProfile.querySelector('.popup__text_edit_name'); // принимает элемент с полем редактирования имени //
const jobInput = formProfile.querySelector('.popup__text_edit_career'); // принимает элемент с полем редактирования рода занятий //
const profileTitle = document.querySelector('.profile__title'); // принимает элемент с текстом имени //
const profileSubTitle = document.querySelector('.profile__subtitle'); // принимает элемент с текстом рода занятий //
const profilePopup = document.querySelector('.popup-profile'); //




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

// Функция закрытия popup по клику на overlay 

function closeOverlayClick(popupElements) {
  const popupsClick = Array.from(popupElements);
  popupsClick.forEach((popup) => {
    popup.addEventListener('mousedown', function(evt) {
      if (evt.target === popup) {                      // условие, что клик произошел именно по поппапу, а не по форме или еще где-то
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
  document.addEventListener('keydown',  closeByEsc);  
 
};

// Функция закрытия popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown',  closeByEsc);
  
};



export {openPopup, 
  closePopup, 
  closeOverlayClick, 
  handleFormProfileSubmit,  
  formProfile,
  nameInput,
  jobInput,
  profileTitle,
  profileSubTitle,
  profilePopup };