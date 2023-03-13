// ? Задача 1.Считаем потомков
// У нас есть дерево, структурированное как вложенные списки ul/li.
// Напишите код, который выведет каждый элемент списка <li>:
// Какой в нём текст (без поддерева) ?
// Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?
 
 for (let li of document.querySelectorAll('li')) {
	let title = li.firstChild.data;
	console.log(title);
	
 }
li.querySelectorAll('li').length

// ? Задача 2.Что содержит свойство nodeType?
// Что выведет этот код?
// <html>

// <body>
//   <script>
//     alert(document.body.lastChild.nodeType);
//   </script>
// </body>

// </html>

// ! lastChild - <script>, script - узел-элемент. Получаем 1.
// ? Задача 3.Тег в комментарии
// Что выведет этот код?

// <script>
//   let body = document.body;

//   body.innerHTML = "<!--" + body.tagName + "-->";

//   alert( body.firstChild.data ); // что выведет?
// </script>
// ! body.tagName == "BODY". firstChild - первые элемен, у нас комментарий.
// ! Получаем содержимое комментария: BODY
// ? Задача 4.Где в DOM-иерархии "document"?
// Объектом какого класса является document? - //!Глобальный объект, класс document
// Какое место он занимает в DOM-иерархии? - //! Идет после node
// Наследует ли он от Node или от Element, или может от HTMLElement? - //! Наследует он от Node

