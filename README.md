# Исполнитель:
# Студент Кирьянов Игорь
# Курс "Веб разработчик плюс".

# Описание проекта
## Проект: Путешествия по России
Прект предствален как адаптивный оностраничный сайт, рассказывающий об путешествиии по России.
Позволяет отмечать понравившиеся места, редактировать личные данные, а также добавлять карточки с понравившимися местами.

#### Технологии:
* HTML5
* CCS3
* JavaScript
* Методология БЭМ (наименования классов и файловая структура)
* Flexbox
* Верстка grid
* Медиазапросы
* Анимации
* Позиционирование
* Псевдоклассы
* Псевдоэлементы

#### Последовательность подготовки проекта к сдаче (изменения вносятся по каждому commit)
* commit 8
* Удалены коментарии в html от прошлого спринта
* Определены minlength и maxlength для полей формы, оба поля формы сделанны обязательными (аьтрибут - required). Форма - Редактировать профиль.
* commit 9 - промежуточный
* У формы - Редактировать профиль отключены стандартные сообщения об ошибке - атрибут novalidate 
* На поле ИМЯ формы навешан слушатель события 'input' с отслеживанием валидности данных evt.target.validity.valid
* commit 10 - промежуточный
* Созданы функции showError и hideError, создана функция валидатор checkInputValid(). Пака валидируется одно поле в одной форме. /commit 11/
* Функции showError и hideError сделаны универсальными, но пока по прежнему валидируется только одно поле. Нужно сделать универсальной функцию checkInputValid(). /commit 12/
* Функции showError, hideError и checkInputValid() сделаны универсальными, но также валидируется только одно поле. Необходимо изменить способ добавления слушателей событий форме и её полям. 
/commit 13/




Ссылка на проект в GitHub https://jaki1965.github.io/mesto-project/