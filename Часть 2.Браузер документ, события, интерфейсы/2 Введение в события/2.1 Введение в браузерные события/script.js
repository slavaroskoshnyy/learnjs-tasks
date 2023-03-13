// ? Задача 1.Скрыть элемент по нажатию кнопки
// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

document.getElementById('hider').onclick = function() {
	document.getElementById('text').hidden = true;
 }

// ? Задача 2.Спрятать себя
// Создайте кнопку, которая будет скрывать себя по нажатию.


// ? Задача 3.Какой обработчик запустится?
// В переменной button находится кнопка. Изначально на ней нет обработчиков.
// Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?
// button.addEventListener("click", () => alert("1"));
// button.removeEventListener("click", () => alert("1"));
// button.onclick = () => alert(2);

// !  button.addEventListener("click", () => alert("1")); и button.onclick = () => alert(2);
// ! т.к. button.removeEventListener("click", () => alert("1")) не удаляет, потому что бы удалить нужно передовать функция

// ? Задача 4.Передвиньте мяч по полю
// Пусть мяч перемещается при клике на поле, туда, куда был клик, вот так:
// Требования:
// Центр мяча должен совпадать с местом нажатия мыши (если это возможно без пересечения краёв поля);
// CSS-анимация желательна, но не обязательна;
// Мяч ни в коем случае не должен пересекать границы поля;
// При прокрутке страницы ничего не должно ломаться;
// Заметки:

// Код должен уметь работать с различными размерами мяча и поля, не привязываться к каким-либо фиксированным значениям.
// Используйте свойства event.clientX/event.clientY для определения координат мыши при клике.
field.onclick = function(event) {

	let fieldCoords = this.getBoundingClientRect();

	let ballCoords = {
	  top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
	  left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
	};

	if (ballCoords.top < 0) ballCoords.top = 0;

	if (ballCoords.left < 0) ballCoords.left = 0;

	if (ballCoords.left + ball.clientWidth > field.clientWidth) {
	  ballCoords.left = field.clientWidth - ball.clientWidth;
	}

	if (ballCoords.top + ball.clientHeight > field.clientHeight) {
	  ballCoords.top = field.clientHeight - ball.clientHeight;
	}

	ball.style.left = ballCoords.left + 'px';
	ball.style.top = ballCoords.top + 'px';
 }

// ? Задача 5.Создать раскрывающееся меню
// Создать меню, которое по нажатию открывается либо закрывается:
// P.S. HTML/CSS исходного документа можно и нужно менять.

let menuElem = document.getElementById('sweeties');
let titleElem = menuElem.querySelector('.title');

titleElem.onclick = function() {
  menuElem.classList.toggle('open');
};
// ? Задача 6.Добавить кнопку закрытия
// Есть список сообщений.
// При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.
// Результат должен выглядеть, как показано здесь:
let panes = document.querySelectorAll('.pane');

for(let pane of panes) {
  pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
  pane.firstChild.onclick = () => pane.remove();
}

// ? Задача 7.Карусель
// Создайте «Карусель» –- ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// В дальнейшем к ней можно будет добавить анимацию, динамическую подгрузку и другие возможности.
// P.S. В этой задаче разработка структуры HTML/CSS составляет 90% решения.



let i = 1;
    for(let li of carousel.querySelectorAll('li')) {
      li.style.position = 'relative';
      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
      i++;
    }

    let width = 130; 
    let count = 3; 

    let list = carousel.querySelector('ul');
    let listElems = carousel.querySelectorAll('li');

    let position = 0;
    carousel.querySelector('.prev').onclick = function() {
      position += width * count;
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.next').onclick = function() {
      // сдвиг вправо
      position -= width * count;
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };

