/* модуль обработки api запросов и ответов */


const chogort = 'plus-cohort-20';
const token = '5d7e2f85-78b5-4b83-bd14-9cd0868b773e';

//  функция получения данных о пользователе с сервера //

const getUsersData = () => {
  return fetch(`https://nomoreparties.co/v1/${chogort}/users/me`, {
  headers: {
    authorization: `${token}`
  },
})
.then((res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
})
};

// функция получения карточек с сервера //

const getCards = () => {
  return fetch(`https://nomoreparties.co/v1/${chogort}/cards `, {
    headers: {
      authorization: `${token}`
    },
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }) 
};

// функция передачи данных о пользователе (профайл) на сервер //

const passProfileDate = (profileTitle, profileSubTitle) => {
  return fetch(`https://nomoreparties.co/v1/${chogort}/users/me`, {
    method: 'PATCH',  
    headers: {
      authorization: `${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: profileTitle ,
      about: profileSubTitle
    })})
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
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
    })})
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
};

const delCard = (cardId) => {
    return fetch(`https://nomoreparties.co/v1/${chogort}/cards/${cardId}`, {
    method: 'DELETE',  
    headers: {
      authorization: `${token}`,
    },
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
};

const addLike = (cardId) => {
  return fetch(`https://nomoreparties.co/v1/${chogort}/cards/likes/${cardId}`, {
    method: 'PUT',  
    headers: {
      authorization: `${token}`,
    },
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
};

const delLike = (cardId) => {
  return fetch(`https://nomoreparties.co/v1/${chogort}/cards/likes/${cardId}`, {
    method: 'DELETE',  
    headers: {
      authorization: `${token}`,
    },
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
};




export{getUsersData, getCards, passProfileDate, passNewCard, delCard, addLike, delLike}