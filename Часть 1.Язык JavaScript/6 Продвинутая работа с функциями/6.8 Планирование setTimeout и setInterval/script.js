// ? Задача 1.Вывод каждую секунду
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
// Сделайте два варианта решения.
// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbers(from, to) {
	let current = from;
 
	let timerId = setInterval(function() {
	  alert(current);
	  if (current == to) {
		 clearInterval(timerId);
	  }
	  current++;
	}, 1000);
 }
 
//  printNumbers(5, 10);


//  Используем рекурсивный setTimeout:
 
 function printNumbers(from, to) {
	let current = from;
 
	setTimeout(function go() {
	  alert(current);
	  if (current < to) {
		 setTimeout(go, 1000);
	  }
	  current++;
	}, 1000);
 }
 
// ? Задача 2.Что покажет setTimeout?
// В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.
// Когда будет выполнена запланированная функция?

// После цикла.
// Перед циклом.
// В начале цикла.
// Что покажет alert?

// let i = 0;

// setTimeout(() => alert(i), 100); 

// предположим, что время выполнения этой функции >100 мс
// for(let j = 0; j < 100000000; j++) {
//   i++;
// }

// !После цикла.
// !В данном случае движок ждёт окончания выполнения for и затем проверяет планировщик и,
// !если время истекло, немедленно запускает его снова.
