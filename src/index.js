// импорты 
import './pages/index.css';
import {enableValidation, selectors} from "./components/validate.js";
import {openPopup, closePopup, closeOverlayClick} from "./components/modal.js";
import {handleFormProfileSubmit, handleFormSubmitPlace, formPlaceElement, formProfile, nameInput, jobInput, profileTitle, profileSubTitle, profilePopup, placePopup} from "./components/utils.js";
import {createCard, grid} from "./components/card.js";
import {getUsersData, getCards} from "./components/api.js";


const popups = document.querySelectorAll('.popup');  
const profileAvatar = document.querySelector('.profile__avatar');
const profileOpenBotton = document.querySelector('.profile__edit-botton'); // принимает элемент - кнопка редактирования формы личных данных
const placeOpenButton = document.querySelector('.profile__add-botton'); // принимает кнопку  открытия формы редактирования личных данных
const buttonsClose = document.querySelectorAll('.popup__close'); 
const profile = document.querySelector('.profile');

Promise.all([getUsersData(), getCards()])
  .then(([user, cards]) => {
    profileTitle.textContent = user.name;
    profileSubTitle.textContent = user.about;
    profile.id = user._id;
    profileAvatar.src = user.avatar;
    
    cards.forEach((card) => {
      grid.append(createCard(card, profile))
    });
  })
  .catch((err) => {
    console.log(err); // выводим ошибку в консоль, если запрос неуспешный
  });


// функция валидации форм 
enableValidation(selectors);  

// Функция закрытия popup по клику на overlay 
closeOverlayClick(popups);


// submit формы profile
formProfile.addEventListener('submit', handleFormProfileSubmit);

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


getUsersData(); // вызов получения данных пользователя с сервера

export { profile}