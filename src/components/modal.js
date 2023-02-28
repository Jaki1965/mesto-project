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


export {openPopup, closePopup, closeOverlayClick, closeOverlayEscape};