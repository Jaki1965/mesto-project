/* модуль содержащий скрипты работы модальных окон */


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

//Отдельная функция закрытия попапа клавишей Escape // Создана по замечанию ревьюера 

function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 
  }
} 


 // Функция открытия popup
 function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown',  closeByEsc);  
 
};

// Функция закрытия popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown',  closeByEsc);
  
};



export {openPopup, closePopup, closeOverlayClick};