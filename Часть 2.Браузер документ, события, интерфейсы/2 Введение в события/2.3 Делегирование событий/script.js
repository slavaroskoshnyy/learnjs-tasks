// ? Задача 1.Спрячьте сообщения с помощью делегирования
// Дан список сообщений с кнопками для удаления [x]. Заставьте кнопки работать.
// В результате должно работать вот так:
// P.S. Используйте делегирование событий. Должен быть лишь один обработчик на элементе-контейнере для всего.

container.onclick = function(event) {
	if (event.target.className != 'remove-button') return;

	let pane = event.target.closest('.pane');
	pane.remove();
 };

// ? Задача 2.Раскрывающееся дерево
// Создайте дерево, которое по клику на заголовок скрывает-показывает потомков:
// Требования:
// Использовать только один обработчик событий (применить делегирование)
// Клик вне текста заголовка (на пустом месте) ничего делать не должен.

 
    for (let li of tree.querySelectorAll('li')) {
      let span = document.createElement('span');
      li.prepend(span);
      span.append(span.nextSibling);
    }

    tree.onclick = function(event) {

      if (event.target.tagName != 'SPAN') {
        return;
      }

      let childrenContainer = event.target.parentNode.querySelector('ul');
      if (!childrenContainer) return; 

      childrenContainer.hidden = !childrenContainer.hidden;
    }

// ? Задача 3.Сортируемая таблица
// Сделать таблицу сортируемой: при клике на элемент <th> строки таблицы должны сортироваться по соответствующему столбцу.
// Каждый элемент <th> имеет атрибут data-type:
// <table id="grid">
//   <thead>
//     <tr>
//       <th data-type="number">Возраст</th>
//       <th data-type="string">Имя</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>5</td>
//       <td>Вася</td>
//     </tr>
//     <tr>
//       <td>10</td>
//       <td>Петя</td>
//     </tr>
//     ...
//   </tbody>
// </table>
// В примере выше первый столбец содержит числа, а второй – строки. Функция сортировки должна это учитывать, ведь числа сортируются иначе, чем строки.
// Сортировка должна поддерживать только типы "string" и "number".
// Работающий пример:
// P.S. Таблица может быть большой, с любым числом строк и столбцов.


grid.onclick = function(e) {
	if (e.target.tagName != 'TH') return;

	let th = e.target;
	sortGrid(th.cellIndex, th.dataset.type);
 };

 function sortGrid(colNum, type) {
	let tbody = grid.querySelector('tbody');

	let rowsArray = Array.from(tbody.rows);

	let compare;

	switch (type) {
	  case 'number':
		 compare = function(rowA, rowB) {
			return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
		 };
		 break;
	  case 'string':
		 compare = function(rowA, rowB) {
			return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
		 };
		 break;
	}

	rowsArray.sort(compare);

	tbody.append(...rowsArray);
 }
// ? Задача 4.Поведение "подсказка"
// Напишите JS-код, реализующий поведение «подсказка».
// При наведении мыши на элемент с атрибутом data-tooltip, над ним должна показываться подсказка и скрываться при переходе на другой элемент.
// Пример HTML с подсказками:
// <button data-tooltip="эта подсказка длиннее, чем элемент">Короткая кнопка</button>
// <button data-tooltip="HTML<br>подсказка">Ещё кнопка</button>
// Результат в ифрейме с документом:
// В этой задаче мы полагаем, что во всех элементах с атрибутом data-tooltip – только текст. То есть, в них нет вложенных тегов (пока).
// Детали оформления:
// Отступ от подсказки до элемента с data-tooltip должен быть 5px по высоте.
// Подсказка должна быть, по возможности, посередине элемента.
// Подсказка не должна вылезать за границы экрана, в том числе если страница частично прокручена, если нельзя показать сверху – показывать снизу элемента.
// Текст подсказки брать из значения атрибута data-tooltip. Это может быть произвольный HTML.
// Для решения вам понадобятся два события:
// mouseover срабатывает, когда указатель мыши заходит на элемент.
// mouseout срабатывает, когда указатель мыши уходит с элемента.
// Примените делегирование событий: установите оба обработчика на элемент document, чтобы отслеживать «заход» и «уход» курсора на элементы с атрибутом data-tooltip и управлять подсказками с их же помощью.
// После реализации поведения – люди, даже не знакомые с JavaScript смогут добавлять подсказки к элементам.
// P.S. В один момент может быть показана только одна подсказка.

let tooltipElem;

document.onmouseover = function(event) {
  let target = event.target;

  // если у нас есть подсказка...
  let tooltipHtml = target.dataset.tooltip;
  if (!tooltipHtml) return;

  // ...создадим элемент для подсказки

  tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.innerHTML = tooltipHtml;
  document.body.append(tooltipElem);

  // спозиционируем его сверху от аннотируемого элемента (top-center)
  let coords = target.getBoundingClientRect();

  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0; // не заезжать за левый край окна

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
	 top = coords.top + target.offsetHeight + 5;
  }

  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';
};

document.onmouseout = function(e) {

  if (tooltipElem) {
	 tooltipElem.remove();
	 tooltipElem = null;
  }

};