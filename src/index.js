// импорты 
import './pages/index.css';
import { enableValidation } from "./components/validate.js";
import { addCard, createCard } from "./components/card.js";

const formPlaceElement = document.querySelector('.popup-place__form');  // принимает элемент формы из попап Новое место
const existGrid = document.querySelector('.grid__list'); // принимает обертку под сетку из карточек //
const inputCardLink = formPlaceElement.querySelector('.popup-place__text_edit_link'); // принимает поле ссылки на кртинку в попап редактирования карточки //
const inputCardTitle = formPlaceElement.querySelector('.popup-place__text_edit_title'); // принимает поле название места в попап редактирования карточки //
const profileOpenBotton = document.querySelector('.profile__edit-botton'); // принимает элемент - кнопка редактирования формы личных данных
const formElement = document.querySelector('.popup__form');  // принимает форму из попап 
const nameInput = formElement.querySelector('.popup__text_edit_name'); // принимает элемент с полем редактирования имени //
const jobInput = formElement.querySelector('.popup__text_edit_career'); // принимает элемент с полем редактирования рода занятий //
const profileTitle = document.querySelector('.profile__title');  // принимает элемент с текстом имени //
const profileSubTitle = document.querySelector('.profile__subtitle'); // принимает элемент с текстом рода занятий //
const placeOpenButton = document.querySelector('.profile__add-botton'); // принимает кнопку  открытия формы редактирования личных данных
const popup = document.querySelectorAll('.popup');  
const profilePopup = document.querySelector('.popup-profile');  //
const placePopup = document.querySelector('.popup-place'); //
const closeButtons = document.querySelectorAll('.popup__close'); 

 
  enableValidation();  // Вызывем функцию, которую создали. Глобальные переменные объявленные ранее (касающиеся валидации полей) теперь не нужны. 

// ___________________________ ФУНКЦИИ ЗАКРЫТИЯ POPUP __________________________ //

// Функция закрытия popup по клику на overlay 

function closeOverlayClick(popup) {
  const popupClick = Array.from(popup);
  popupClick.forEach((popup) => {
    popup.addEventListener('click', function(evt) {
      if (evt.target === popup) {                      // условие, что клик произошел именно по поппапу, а не по форме или еще где-то
        closePopup(popup); 
      }
    });
  });
};

closeOverlayClick(popup);

// Создаем функцию, котрая закрывает popup по нажатию на клавишу escape

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

closeOverlayEscape(popup);

// ___________________________ БЛОК ФУНКЦИй ЗАКРЫТИЯ POPUP ЗАКОНЧЕН__________________________ //



 // _____________________ БЛОК ФНКЦИЙ ИЗ ПРЕДЫДУЩЕГО СПРИНТА _______________________________ //

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

    closeButtons.forEach((button) => {
      const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
  });
  


// Обработчик submit в редактировании профиля // изменено согласно замечаний ревьюера
  function handleFormSubmit(evt) {
      evt.preventDefault(); 
      profileTitle.textContent = nameInput.value;
      profileSubTitle.textContent = jobInput.value;
      closePopup(profilePopup);
      evt.target.reset();
  };

   formElement.addEventListener('submit', handleFormSubmit);

// Обработчик submit в добавлени карточки  // изменено согласно замечаний ревьюера
  function handleFormSubmitPlace(evt) {
    evt.preventDefault(); 
    const newCard = createCard(inputCardTitle.value, inputCardLink.value);
    addCard(newCard, existGrid);
    closePopup(placePopup);
    evt.target.reset();
  };

  formPlaceElement.addEventListener('submit', handleFormSubmitPlace);
