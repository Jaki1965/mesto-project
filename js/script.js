
const formPlaceElement = document.querySelector('.popup-place__form');  // принимает элемент формы из попап Новое место
const openingPopupImg = document.querySelector('.popup-image');   // принимает элемент попап открытия изображения
const showImg = document.querySelector('.popup-image__image');  // принимает элемент в котром хранится изображение места
const closingPopupImg = document.querySelector('.popup-image__button-close'); // принимает кнопку - закрытие попап с изображением
const showPopupSubtitle = document.querySelector('.popup-image__subtitle');  // принимает элемент - подпись (название места ) в попап изображения
const gridTemplateCell = document.querySelector('#myTemplateOne').content; // принимает клон элемента #myTemplateOne - ячейка сетки
const existGrid = document.querySelector('.grid__list'); // принимает обертку под сетку из карточек
const inputCardLink = formPlaceElement.querySelector('.popup-place__text_edit_link'); // принимает поле ссылки на кртинку в попап редактирования карточки
const inputCardTitle = formPlaceElement.querySelector('.popup-place__text_edit_title'); // принимает поле название места в попап редактирования карточки
const profileOpenBotton = document.querySelector('.profile__edit-botton'); // принимает элемент - кнопка редактирования формы личных данных
const profileCloseBotton = document.querySelector('.popup__button-close'); // принимает кнопку "крестик" - закрытие формы личных данных
const formElement = document.querySelector('.popup__form');  // принимает форму из попап 
const nameInput = formElement.querySelector('.popup__text_edit_name'); // принимает элемент с полем редактирования имени
const jobInput = formElement.querySelector('.popup__text_edit_career'); // принимает элемент с полем редактирования рода занятий
const profileTitle = document.querySelector('.profile__title');  // принимает элемент с текстом имени
const profileSubTitle = document.querySelector('.profile__subtitle'); // принимает элемент с текстом рода занятий
const placeOpenButton = document.querySelector('.profile__add-botton'); // принимает кнопку  открытия формы редактирования личных данных
const popupSence = document.querySelector('.popup-place'); // принимает элемент попап "Новое место" для закрытия или открытия в зависимотси от наличия или отсутствия модификатора
const placeCloseButton = document.querySelector('.popup-place__button-close'); // принимает кнопку "крестик" - закрытие формы "Новое место"

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
 
  // Функция создающая карточку

  function сreateGridCell(link, name){
    const myGridCell = gridTemplateCell.querySelector('.grid__list-cell').cloneNode(true); 
    myGridCell.querySelector('.element__image').src = link;   
    myGridCell.querySelector('.element__image').alt = name;   
    myGridCell.querySelector('.element__title').textContent = name;
    existGrid.prepend(myGridCell);                                          
    const dellButtton = myGridCell.querySelector('.element__delet-button');
    dellButtton.addEventListener('click', function(evt){
    evt.target.closest('.grid__list-cell').remove();
    })
    const heartButton = myGridCell.querySelector('.element__button-heart');
    let myClickCounter = 0;
    heartButton.addEventListener('click', function(evt){
      myClickCounter++;
    if (myClickCounter % 2 !== 0){
      heartButton.classList.add ('element__button-heart_dark');
      };
    if (myClickCounter % 2 == 0){
      heartButton.classList.remove ('element__button-heart_dark');
    };
    });
    const openImg = myGridCell.querySelector('.element__image');
      openImg.addEventListener('click', function(evt){
      openingPopupImg.classList.add('popup-image_opened');
      showImg.src = link;
      showImg.alt = name;
      showPopupSubtitle.textContent = name;
    });
  };

 
// Функция создает сетку из карточек массива initialCards 
  
  function сreateGrid(){
    initialCards.slice().reverse()    // Чтобы в противоположную сторону заполнял сетку
      .forEach(function(item) {
        сreateGridCell(item.link, item.name);
      });
  };
  сreateGrid();  
 
// Скрипт закрывает попап изображения
  
  closingPopupImg.addEventListener('click', function(evt){
    openingPopupImg.classList.remove('popup-image_opened'); 
  });

// скрипт выполняет 
// 1. Открытие и закрытие модального окна редактирования личных данных
// 2. Редактирирование полей в форме - о себе 

  profileOpenBotton.addEventListener('click', function(evt){
      popupOpen = document.querySelector('.popup');
      popupOpen.classList.add('popup_opened');
  });

  profileCloseBotton.addEventListener('click', function(evt){
      popupOpen.classList.remove('popup_opened');
  });

  function handleFormSubmit(evt) {
      evt.preventDefault(); 

      profileTitle.textContent = nameInput.value;
      profileSubTitle.textContent = jobInput.value;
    
  };

  formElement.addEventListener('submit', handleFormSubmit);

// скрипт открывает и закрывает форму добаления карточки 

  placeOpenButton.addEventListener('click', function(etv){
    popupSence.classList.add('popup-place_opened');
  });

  function placePopupClose(){
  placeCloseButton.addEventListener('click', function(etv){
      popupSence.classList.remove('popup-place_opened');
  });
  }
  placePopupClose();

  function handleFormSubmitPlace(evt) {
    evt.preventDefault(); 
    сreateGridCell (inputCardLink.value, inputCardTitle.value);
    popupSence.classList.remove('popup-place_opened');
  };

  formPlaceElement.addEventListener('submit', handleFormSubmitPlace);