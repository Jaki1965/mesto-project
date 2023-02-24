
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

// переменные связанные с валидацией форм

// const form = document.querySelector('.popup__form');
// const formInput = form.querySelector('.popup__text'); // выбор валидируемого поля ввода через id  // не понял зачем так сложно
// const formError = form.querySelector(`.${formInput.id}-error`);






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

 // ___________ ВАЛИДАЦИЯ ФОРМ  _____________________ //
 
 // Создадим две функции - показать ошибку и - спрятать ошибку 

 const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__text_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__text_type_active');
};

const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__text_type_error');
  errorElement.classList.remove('popup__text_type_active');
  errorElement.textContent = '';
};

  // создаем функцию которая будет проверять (валидировать поле ввода)
  
  const checkInputValid = (formElement, inputElement) => {
    if (inputElement.validity.patternMismatch) {                          // Если ошибка возникает из-за несоответсвия атрибуту pattern, то свойство patternMismatch -> выдаст true. 
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);  // в случае true метод setCustomValidity позволит вывести в отношении выбранного поля наше сообщение (любую строку) или из атрибута data. 
    } else {                                                              
      inputElement.setCustomValidity("");                                 // если методу отдать пустую строку, то будут выводиться стандартные сообщения
    }    
  
    if (!inputElement.validity.valid) {``
      showError(formElement, inputElement, inputElement.validationMessage);  // если поле не валидно -> показать ошибку
    } else {
      hideError(formElement, inputElement);                                  // иначе -> спрятать ошибку
    };
  };

  // создаем функцию, которая будет обходить список полей методом some и если хоть одно из них не валидно выдавать true 

  const hasInvalidInput = (inputList) => {        
    return inputList.some((inputElement) => {  // идем по всем полям методом some (этот метод требует внутри себя колл-бэк и возвращает при наличии хотя бы одного совпадения - true)
      return !inputElement.validity.valid;     // это тот самый колл-бэк для some -> если есть хоть одно не валидное поле, возвращаем - true, если все поля валидны false
    });
  }; 

  

  // создаем функцию котрора будет навешивать слушателей всем полям формы

  function setEventListener(formElement) {
    const inputList = Array.from(formElement.querySelectorAll('.popup__text')); // сoздает массив из полей ввода формы 
    const buttonElement = formElement.querySelector('.popup__button'); // найдем кнопку, которую в случае невалидности полей нужно дезактивировать
    toggleButtonState(inputList, buttonElement);   // вызываем функцию, которая активирует/дезактивирует кнопку при первой загрузке страницы, чтобы кнопка была не активной с самого начала
    inputList.forEach((inputElement) => {              // обходим все элементы (inputElement) формы (ormElement) и посредством функции checkInputValid(formElement, inputElement) навешиваем им слушателей
      inputElement.addEventListener('input', () => {
        checkInputValid(formElement, inputElement);    // после того как навешали слушателя - валидируем форму 
        toggleButtonState(inputList, buttonElement);   // вызываем функцию, которая активирует/дезактивирует кнопку 
      });                           
    });
  };
   
  // Создадим функцию, которая обойдет все формы, навешает им слушателя submit и внутри себя произведет поделючение слушателей и валидайию через setEventListener(formElement)

  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));  // формируем массив (formList) из форм в проекте
    formList.forEach((formElement) => {                                        // обходим массив форм и работаем с каждым элементом (formElement)
      formElement.addEventListener('submit', (evt) => {                         // навешиваем каждому полю ввода (formElement) слушателя с событием submit
        evt.preventDefault();                                                   // отменяем стандартное поведение submit                      
      });
      setEventListener(formElement);     // каждому элементу (теперь уже каждой формы) нвешиваем функцию написанную выше - слушатель (input) И валидатор
    });
  };

  enableValidation();  // Вызывем функцию, которую создали. Глобальные переменные объявленные ранее (касающиеся валидации полей) теперь не нужны. 

// Cоздаем функцию, котрая будет активировать и дезактивировать кнопку. Функция будет принимать список валидируемых полей и элемент - кнопку (которую нужно активировать/дезактивироать) 

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {                       // если функция hasInvalidInput(inputList) вернула true 
    buttonElement.disabled = true;                        // у кнопки buttonElement навешиваем свойство disabled = true - отключить
    buttonElement.classList.add('popup__button_inactive');  // заодно стилизуем саму кнопку, делая ее прозрачной
  } else {                                                  // иначе 
    buttonElement.disabled = false;                          // включаем кнопку 
    buttonElement.classList.remove('popup__button_inactive'); // возвращем кнопке стиль активной
  };
};
 

// ___________________________ БЛОК ВАЛИДАЦИИ ФОРМ ЗАКОНЧЕН ___________________ //

// ___________________________ ФУНКЦИИ ЗАКРЫТИЯ POPUP __________________________ //

// Создаем функцию, котрая закрывает popup по клику на overlay

// console.log(popup[0]);
// console.log(popup[1]);
// console.log(popup[2]);

// Функция закрытия popup по клику на overlay 

function closeOverlayClick(popup) {
  const popupClick = Array.from(popup);
  popupClick.forEach((popup) => {
    console.log(popup);
    popup.addEventListener('click', function(evt) {
      if (evt.target === popup) {                      // условие, что клик произошел именно по поппапу, а не по форме или еще где-то
        closePopup(popup); 
      }
    });
  });
};

closeOverlayClick(popup);


// Создаем функцию, котрая закрывает popup по нажатию на клавишу escape
// Функционал работает, но код неверный в том смысле, что нужно сделать его унивесральным ... сейчас вголове есть несколько вариантов. Попробую разные.

document.addEventListener('keydown', function(evt) {
  if (evt.key == "Escape"){
    closePopup(profilePopup);
    closePopup(placePopup);
    closePopup(openingPopupImg);}
});





// ___________________________ БЛОК ФУНКЦИй ЗАКРЫТИЯ POPUP ЗАКОНЧЕН__________________________ //



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