/* модуль содержащий скрипты работы модальных окон */

import {formElement, nameInput, jobInput, profileTitle, profileSubTitle, profilePopup, placePopup} from "./utils.js";


const profileOpenBotton = document.querySelector('.profile__edit-botton'); // принимает элемент - кнопка редактирования формы личных данных
const placeOpenButton = document.querySelector('.profile__add-botton'); // принимает кнопку  открытия формы редактирования личных данных
const buttonsClose = document.querySelectorAll('.popup__close'); 

// Функция закрытия popup по клику на overlay 

function closeOverlayClick(popup) {
  const popupClick = Array.from(popup);
  popupClick.forEach((popup) => {
    popup.addEventListener('mousedown', function(evt) {
      if (evt.target === popup) {                      // условие, что клик произошел именно по поппапу, а не по форме или еще где-то
        closePopup(popup); 
      }
    });
  });
};


// Функция закрывает popup по нажатию на клавишу escape

function closeOverlayEscape(popup) {
  const popupEscape = Array.from(popup);
  popupEscape.forEach((popup) => {
    document.addEventListener('keydown', function(evt) {
      if (evt.key == "Escape"){
        closePopup(popup); 
      }
    });
  });
}

 // Функция открытия popup
 function openPopup(popup) {
  popup.classList.add('popup_opened');
};

// Функция закрытия popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

// Открытие popup профиля 
profileOpenBotton.addEventListener('click', function(evt) {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubTitle.textContent;
  openPopup(profilePopup);
});
 
// Открытие попап карточки 
placeOpenButton.addEventListener('click', function(evt){
  openPopup(placePopup);
});

  buttonsClose.forEach((button) => {
    const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

export {openPopup, closePopup, closeOverlayClick, closeOverlayEscape};