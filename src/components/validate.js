/* модуль содержащий скрипты валидации форм */

const selectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__text_type_active'
}; 

 const showError = (formElement, inputElement, errorMessage) => {
  console.log(selectors.errorClass)
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(selectors['inputErrorClass']);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(selectors['errorClass']);
};

const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(selectors['inputErrorClass']);
  errorElement.classList.remove(selectors['errorClass']);
  errorElement.textContent = '';
};
  
 const checkInputValid = (formElement, inputElement) => {
  if (inputElement.validity.patternMismatch) {                          
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);  
  } else {                                                              
    inputElement.setCustomValidity("");                                 
  }    

  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage); 
  } else {
    hideError(formElement, inputElement);                                  
  };
};

const hasInvalidInput = (inputList) => {        
  return inputList.some((inputElement) => {  
    return !inputElement.validity.valid;     
  });
}; 

function setEventListener(formElement) {
  const inputList = Array.from(formElement.querySelectorAll(selectors['inputSelector'])); 
  const buttonElement = formElement.querySelector(selectors['submitButtonSelector']); 
  toggleButtonState(inputList, buttonElement);   
  inputList.forEach((inputElement) => {              
    inputElement.addEventListener('input', () => {
      checkInputValid(formElement, inputElement);    
      toggleButtonState(inputList, buttonElement);   
    });                           
  });
};
 
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(selectors['formSelector']));  
  formList.forEach((formElement) => {                                        
    formElement.addEventListener('submit', (evt) => {                       
      evt.preventDefault();                                                                       
    });
    setEventListener(formElement);     
  });
};

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {                      
    buttonElement.disabled = true;                        
    buttonElement.classList.add(selectors['inactiveButtonClass']); 
  } else {                                                  
    buttonElement.disabled = false;                          
    buttonElement.classList.remove(selectors['inactiveButtonClass']); 
  };
};

export { enableValidation }