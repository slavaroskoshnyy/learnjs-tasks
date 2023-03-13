// ? Задача 1.Дочерние элементы в DOM
// Для страницы:

// <html>
// <body>
//   <div>Пользователи:</div>
//   <ul>
//     <li>Джон</li>
//     <li>Пит</li>
//   </ul>
// </body>
// </html>
// Напишите код, как получить…

// элемент <div>?
console.log(document.body.firstElementChild);
// <ul>?
console.log(document.body.children[1]);
// второй <li> (с именем Пит)?
console.log(document.body.children[1].lastElementChild);

// ? Задача 2.Вопрос о соседях
// Если elem – произвольный узел DOM-элемента…

// Правда, что elem.lastChild.nextSibling всегда равен ?
// ! будет null т.к. nextSibling последний элемент и после него нечего нет
// Правда, что elem.children[0].previousSibling всегда равен null ?
// ! children[0] - является первым видимым элементом но перед ним идет "не видимый элемент" - Text.
// ! null - не будет. Если ебудет сам элемент.

// ? Задача 3.Выделите ячейки по диагонали
// Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.

// Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:

//  в переменной td находится DOM-элемент для тега <td>
// td.style.backgroundColor = 'red';
// Должно получиться так:

function makeDiagonalRed(table) {
	for (let i = 0; i < table.rows.length; i++) {
	  table.rows[i].cells[i].style.backgroundColor = 'red';
	}
}	
