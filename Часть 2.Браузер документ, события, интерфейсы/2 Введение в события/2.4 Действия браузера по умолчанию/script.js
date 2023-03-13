// ? Задача 1.Почему не работает return false?
// Почему в коде ниже return false не работает?
// <script>
//   function handler() {
//     alert( "..." );
//     return false;
//   }
// </script>
// <a href="https://w3.org" onclick="handler()">браузер откроет w3.org</a>
// Браузер переходит по указанной ссылке, но нам этого не нужно.
// Как поправить?

// ! Потому что событие навешено через onclick в самой ссылке.

{/* <a href="https://w3.org" onclick="return handler()">  </a> */}

// ? Задача 2.Поймайте переход по ссылке
// Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том, действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке.
// Так это должно работать:
// Детали:
// Содержимое #contents может быть загружено динамически и присвоено при помощи innerHTML. Так что найти все ссылки и поставить на них обработчики нельзя. Используйте делегирование.
// Содержимое может иметь вложенные теги, в том числе внутри ссылок, например, <a href=".."><i>...</i></a>.
// Открыть песочницу для задачи.
contents.onclick = function(event) {

	function handleLink(href) {
	  let isLeaving = confirm(`Leave for ${href}?`);
	  if (!isLeaving) return false;
	}

	let target = event.target.closest('a');

	if (target && contents.contains(target)) {
	  return handleLink(target.getAttribute('href'));
	}
 };

// ? Задача 3.Галерея изображений
// Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.
// Например:
// P.S. Используйте делегирование.

thumbs.addEventListener("click", (event) => {

	event.preventDefault();

	let target = event.target.closest("a");
	let href = target.href;
	let title = target.title;
	let mainImage = document.getElementById("largeImg");
	
	mainImage.setAttribute("src", `${href}`);
	mainImage.setAttribute("title", `${title}`);
	});