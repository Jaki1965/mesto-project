
const formPlaceElement = document.querySelector('.popup-place__form');  // принимает элемент формы из попап Новое место
const openingPopupImg = document.querySelector('.popup-image');   // принимает элемент попап открытия изображения
const showImg = document.querySelector('.popup-image__image');  // принимает элемент в котром хранится изображение места
const closingPopupImg = document.querySelector('.popup-image__close'); // принимает кнопку - закрытие попап с изображением
const showPopupSubtitle = document.querySelector('.popup-image__subtitle');  // принимает элемент - подпись (название места ) в попап изображения
const gridTemplateCell = document.querySelector('#myTemplateOne').content; // принимает клон элемента #myTemplateOne - ячейка сетки
const existGrid = document.querySelector('.grid__list'); // принимает обертку под сетку из карточек
const inputCardLink = formPlaceElement.querySelector('.popup-place__text_edit_link'); // принимает поле ссылки на кртинку в попап редактирования карточки
const inputCardTitle = formPlaceElement.querySelector('.popup-place__text_edit_title'); // принимает поле название места в попап редактирования карточки
const profileOpenBotton = document.querySelector('.profile__edit-botton'); // принимает элемент - кнопка редактирования формы личных данных
const profileCloseBotton = document.querySelector('.popup-profile__close'); // принимает кнопку "крестик" - закрытие формы личных данных
const formElement = document.querySelector('.popup__form');  // принимает форму из попап 
const nameInput = formElement.querySelector('.popup__text_edit_name'); // принимает элемент с полем редактирования имени
const jobInput = formElement.querySelector('.popup__text_edit_career'); // принимает элемент с полем редактирования рода занятий
const profileTitle = document.querySelector('.profile__title');  // принимает элемент с текстом имени
const profileSubTitle = document.querySelector('.profile__subtitle'); // принимает элемент с текстом рода занятий
const placeOpenButton = document.querySelector('.profile__add-botton'); // принимает кнопку  открытия формы редактирования личных данных
const placeCloseButton = document.querySelector('.popup-place__close'); // принимает кнопку "крестик" - закрытие формы "Новое место"

// созданные после ревью
const popup = document.querySelectorAll('.popup');  
const profilePopup = document.querySelector('.popup-profile');
const placePopup = document.querySelector('.popup-place');

const closeButtons = document.querySelectorAll('.popup__close'); // ПЕРЕМЕННАЯ СОЗДАНА ПОЛНОСТЬЮ ИСХОДЯ ИЗ ИДЕИ ревьюера!!!!!

// массив карточек
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




  

 


  // ----  Функции созданнные после ревью, по замечаниям ревьюера --- //

  // Функция открытия popup
  function openPopup(popup) {
    popup.classList.add('popup_opened');
  };

  // Функция закрытия popup
  function closePopup(popup) {
    popup.classList.remove('popup_opened');
  };

  // Функция удаления карточки
  function removeCard(evt){
    evt.target.closest('.grid__list-cell').remove();
  };
  
  // Функция отмечающая сердечко
  function markHeart(evt){
    evt.target.classList.toggle('element__button-heart_dark');
  };
  
  // Функция открывающая popup изображения
  function openImgPopup(evt){
    showImg.src = evt.target.src;
    showImg.alt = evt.target.alt;
    showPopupSubtitle.textContent = evt.target.alt;
    openPopup(openingPopupImg);
    };
  

  // --- Скрипты созданные по замечаниям ревьюера 
  
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

    // Закрывает любые поппапы по крестику 
    // Создано по идее ревьюера 
    // Михаил, спасибо вам огромное!!! Просто оченьт круто и крайне элегантно. Мне для работы в будущем и как премер красивых решений - ПРОСТО САМЫЙ ТО!!!!
    closeButtons.forEach((button) => {
      const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
  });
  
  
  // Функция создающая карточку  /// поправлено многократно после замечаний ревьюера
  function createCard(name, link){
    const cardElement = gridTemplateCell.querySelector('.grid__list-cell').cloneNode(true); 
    cardElement.querySelector('.element__image').src = link;   
    cardElement.querySelector('.element__image').alt = name;   
    cardElement.querySelector('.element__title').textContent = name;                                       
    cardElement.querySelector('.element__delet-button').addEventListener('click', removeCard);
    cardElement.querySelector('.element__button-heart').addEventListener('click', markHeart);
    cardElement.querySelector('.element__image').addEventListener('click', openImgPopup);
    return cardElement;
  };
  
  
// Создание первой сетки карточек // исправлено по замечанию ревьюера

initialCards.forEach(function(element){
  const newCard = createCard(element.name, element.link); 
  addCard(newCard, existGrid);
})

// Добавление карточки в сетку // создано по замечанию ревюера 
function addCard(card, box) {
  box.prepend(card);
} 

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