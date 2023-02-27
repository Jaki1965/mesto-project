/* модуль содержащий скрипты работы модальных окон */

const profileOpenBotton = document.querySelector('.profile__edit-botton'); // принимает элемент - кнопка редактирования формы личных данных
const formElement = document.querySelector('.popup__form');  // принимает форму из попап 
const nameInput = formElement.querySelector('.popup__text_edit_name'); // принимает элемент с полем редактирования имени //
const jobInput = formElement.querySelector('.popup__text_edit_career'); // принимает элемент с полем редактирования рода занятий //
const profileTitle = document.querySelector('.profile__title');  // принимает элемент с текстом имени //
const profileSubTitle = document.querySelector('.profile__subtitle'); // принимает элемент с текстом рода занятий //
const placeOpenButton = document.querySelector('.profile__add-botton'); // принимает кнопку  открытия формы редактирования личных данных
const profilePopup = document.querySelector('.popup-profile');  //
const placePopup = document.querySelector('.popup-place'); //
const closeButtons = document.querySelectorAll('.popup__close'); 

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

  closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

export {openPopup, closePopup, closeOverlayClick, closeOverlayEscape};