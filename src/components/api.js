/* модуль обработки api запросов и ответов */

import { checkResponse } from "./utils";

const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-20',
  headers: {
    authorization: '5d7e2f85-78b5-4b83-bd14-9cd0868b773e',
    'Content-Type': 'application/json',
  },
};

function request(url, options){
  return fetch(url, options).then(checkResponse);
}

//  функция получения данных о пользователе с сервера //
const getUsersData = () => {
  return request(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
};

// функция получения карточек с сервера //
const getCards = () => {
  return request(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
};

// функция передачи данных о пользователе (профайл) на сервер //

const passProfileDate = (profileTitle, profileSubTitle) => {
  return request(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers ,
    body: JSON.stringify({
          name: profileTitle ,
          about: profileSubTitle
        })
      })
}

// функция передачи (добавления) новой карточки на сервер //

const passNewCard = (name, link) => {
  return request(`${config.baseUrl}/cards`, {
    method: 'POST',  
    headers: config.headers ,
    body: JSON.stringify({
      name: name ,
      link: link
    })
  })
};

// Запрос на удаление карточки

const delCard = (cardId) => {
    return request(`${config.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: config.headers,
    })
};

// Запрос на добавление лайка

const addLike = (cardId) => {
  return request(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers,
  })
 };

 // Запрос на удаление лайка

const delLike = (cardId) => {
  return request(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
};

const addAvatar = (avatar) => {
  return request(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers ,
    body: JSON.stringify({
          avatar: avatar
        })
      })
  };
  
 
export{getUsersData, getCards, passProfileDate, passNewCard, delCard, addLike, delLike, addAvatar}