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

#### Последовательность подготовки проекта к сдаче (спринт 5 задание 2)
* Создан модуль api.js для оработки API запросов и ответов от сервера. Реализовано заполнение профайла данными с сервера. Реализовано заполнение карточками с сервера. /commit 46/
* Реализована функция запроса на сервер о смене (обновлении) данных пользователя. /commit 47/
* Реализовано добавление карточки. Код оставляет желать лучшего. Буду править и добавление карточки и внесение измениний в профайл. Этот коммит можно считаь промежуточным. /commit 48/
* Сверстан элемент счетчика. Перед сдачей на ревью почистить css от коментариев. /commit 49/
* Реализована функция отражения количества лайков. Реализована возможность удаления только своей карточки. Реализован функция постановки и снятия лайка с передачей данных на сервер. /commit 50/
* Реализвано затемнение аватара после наведения мышки. Реализована функция изменения аватара. Реализовано изменение кнопки submit на время загрузки данных. /commit 51/
* Коммит перед первым рвью второго задания. /commit 52/
### Устранение замечаний ревьюера (спринт 5 задание 2)
* Удален лишний вызов getUsersData(); в index.js
* Переименована константа в closeButtons - так как она принимает несколько попапов и должна быть прописана во множественном числе.
* В модуле api.js создан универсальный объект config содержащий ссылку и headers
* В модуле api.js созданы универсальные функции checkResponse и request. Проферена функциональность. /commit 52/
