// импорты 
import './pages/index.css';
import {enableValidation, selectors} from "./components/validate.js";
import {openPopup, closePopup, closeOverlayClick, closeOverlayEscape} from "./components/modal.js";
import {handleFormSubmit, handleFormSubmitPlace, formPlaceElement, formProfile, nameInput, jobInput, profileTitle, profileSubTitle, profilePopup, placePopup} from "./components/utils.js";
import {addCard, createCard, grid} from "./components/card.js";


const popups = document.querySelectorAll('.popup');  

const profileOpenBotton = document.querySelector('.profile__edit-botton'); // принимает элемент - кнопка редактирования формы личных данных
const placeOpenButton = document.querySelector('.profile__add-botton'); // принимает кнопку  открытия формы редактирования личных данных
const buttonsClose = document.querySelectorAll('.popup__close'); 

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
formProfile.addEventListener('submit', handleFormSubmit);

// submit формы place
formPlaceElement.addEventListener('submit', handleFormSubmitPlace);

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