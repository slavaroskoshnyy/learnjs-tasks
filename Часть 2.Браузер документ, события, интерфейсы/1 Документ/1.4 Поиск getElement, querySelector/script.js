// Поиск элементов
// Вот документ с таблицей и формой.

// Как найти?…

// Таблицу с id="age-table".
let table = document.getElementById('age-table')
// Все элементы label внутри этой таблицы (их три).
document.querySelectorAll('#age-table label')
// Первый td в этой таблице (со словом «Age»).
table.querySelector('td')
// Форму form с именем name="search".
document.querySelector('form[name="search"]')
// Первый input в этой форме.
form.querySelector('input')
// Последний input в этой форме.
let inputs = form.querySelectorAll('input') 
inputs[inputs.length-1] 
// Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика.
