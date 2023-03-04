/* модуль обработки api запросов и ответов */

import{profileSubTitle, profileTitle} from "./utils";
import { addCard } from "./card";

const chogort = 'plus-cohort-20';
const token = '5d7e2f85-78b5-4b83-bd14-9cd0868b773e';
const profileAvatar = document.querySelector('.profile__avatar');

//  функция получения данных о пользователе с сервера //

function getUsersData() {
  fetch(`https://nomoreparties.co/v1/${chogort}/users/me`, {
  headers: {
    authorization: `${token}`
  },
})
  .then(res => res.json())
  .then((data)=>{
    profileAvatar.src = data.avatar;
    profileTitle.textContent = data.name;
    profileSubTitle.textContent = data.about;
  })
  .catch((err) => {
    console.log(`Ошибка: ${err.status}`);
  })
};

// функция получения карточек с сервера //

function getCards() {
  fetch(`https://nomoreparties.co/v1/${chogort}/cards `, {
    headers: {
      authorization: `${token}`
    },
  })
  .then((res) => res.json())
  .then((data) => {
    addCard(data);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err.status}`);
  })
  
}




export{getUsersData, getCards}