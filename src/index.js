// импорты 
import './pages/index.css';
import { enableValidation } from "./components/validate.js";
import {closeOverlayClick, closeOverlayEscape} from "./components/modal.js";
import {handleFormSubmit, handleFormSubmitPlace} from "./components/utils.js";


const formPlaceElement = document.querySelector('.popup-place__form');  // принимает элемент формы из попап Новое место
const formElement = document.querySelector('.popup__form');  // принимает форму из попап
const popup = document.querySelectorAll('.popup');  

// функция валидации форм 
enableValidation();  

// Функция закрытия popup по клику на overlay 
closeOverlayClick(popup);

// Функция закрывает popup по нажатию на клавишу escape
closeOverlayEscape(popup);

// submit формы profile
formElement.addEventListener('submit', handleFormSubmit);

// submit формы place
formPlaceElement.addEventListener('submit', handleFormSubmitPlace);
