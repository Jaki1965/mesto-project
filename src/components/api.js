/* модуль обработки api запросов и ответов */

import{ profileSubTitle, profileTitle} from "./utils";
import { createCard, grid } from "./card";
//import { createCard } from "";


const chogort = 'plus-cohort-20';
const token = '5d7e2f85-78b5-4b83-bd14-9cd0868b773e';
const profileAvatar = document.querySelector('.profile__avatar');




//  функция получения данных о пользователе с сервера //

const getUsersData = () => {
  fetch(`https://nomoreparties.co/v1/${chogort}/users/me`, {
  headers: {
    authorization: `${token}`
  },
})
  .then(res => res.json())
  .then((user)=>{
    profileAvatar.src = user.avatar;
    profileTitle.textContent = user.name;
    profileSubTitle.textContent = user.about;
  })
  .catch((err) => {
    console.log(`Ошибка: ${err.status}`);
  })
};

// функция получения карточек с сервера //

const getCards = () => {
  fetch(`https://nomoreparties.co/v1/${chogort}/cards `, {
    headers: {
      authorization: `${token}`
    },
  })
  .then((res) => res.json())
  .then((cards) => {
    cards.forEach((card) => {
      grid.append(createCard(card.name, card.link))
    });
    
   })
  .catch((err) => {
    console.log(`Ошибка: ${err.status}`);
  })
  
};

// функция передачи данных о пользователе (профайл) на сервер //

function passProfileDate(nameInput, jobInput) {
  return fetch(`https://nomoreparties.co/v1/${chogort}/users/me`, {
    method: 'PATCH',  
    headers: {
      authorization: `${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: nameInput.value ,
      about: jobInput.value
    })
  });
};

// функция передачи (добавления) новой карточки на сервер //


const passNewCard = (name, link) => {
  return fetch(`https://nomoreparties.co/v1/${chogort}/cards`, {
    method: 'POST',  
    headers: {
      authorization: `${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name ,
      link: link
    })
  });
};

//passNewCard();


export{getUsersData, getCards, passProfileDate, passNewCard, profileAvatar}