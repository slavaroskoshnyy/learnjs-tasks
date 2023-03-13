// ? Задача 1.Редактируемый div
// Создайте <div>, который превращается в <textarea>, если на него кликнуть.
// <textarea> позволяет редактировать HTML в элементе <div>.
// Когда пользователь нажимает Enter или переводит фокус, <textarea> превращается обратно в <div>, и его содержимое становится HTML-кодом в <div>.
// Демо в новом окне

let viewEl = document.getElementById('view');

viewEl.onclick =  function() {
  this.tabIndex = 0;
  this.focus();
  this.classList.add("edit");
  this.contentEditable = true;      
};

viewEl.onblur =  function() {
  this.classList.remove("edit");
};

viewEl.onkeydown = function(event) {
  if (event.key == 'Enter') {
    this.blur();
  }
};

// ? Задача 2.Редактирование TD по клику
// Сделайте ячейки таблицы редактируемыми по клику.
// По клику – ячейка должна стать «редактируемой» (textarea появляется внутри), мы можем изменять HTML. Изменение размера ячейки должно быть отключено.
// Кнопки OK и ОТМЕНА появляются ниже ячейки и, соответственно, завершают/отменяют редактирование.
// Только одну ячейку можно редактировать за один раз. Пока <td> в «режиме редактирования», клики по другим ячейкам игнорируются.
// Таблица может иметь множество ячеек. Используйте делегирование событий.
// Демо:

let table = document.getElementById('bagua-table');

let editingTd;

table.onclick = function(event) {

  let target = event.target.closest('.edit-cancel,.edit-ok,td');

  if (!table.contains(target)) return;

  if (target.className == 'edit-cancel') {
    finishTdEdit(editingTd.elem, false);
  } else if (target.className == 'edit-ok') {
    finishTdEdit(editingTd.elem, true);
  } else if (target.nodeName == 'TD') {
    if (editingTd) return; 

    makeTdEditable(target);
  }

};

function makeTdEditable(td) {
  editingTd = {
    elem: td,
    data: td.innerHTML
  };

  td.classList.add('edit-td'); 
  let textArea = document.createElement('textarea');
  textArea.style.width = td.clientWidth + 'px';
  textArea.style.height = td.clientHeight + 'px';
  textArea.className = 'edit-area';

  textArea.value = td.innerHTML;
  td.innerHTML = '';
  td.appendChild(textArea);
  textArea.focus();

  td.insertAdjacentHTML("beforeEnd",
    '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>'
  );
}

function finishTdEdit(td, isOk) {
  if (isOk) {
    td.innerHTML = td.firstChild.value;
  } else {
    td.innerHTML = editingTd.data;
  }
  td.classList.remove('edit-td');
  editingTd = null;
}

// ? Задача 3.Мышь, управляемая клавиатурой
// Установите фокус на мышь. Затем используйте клавиши со стрелками, чтобы её двигать:
// Демо в новом окне
// P.S. Не добавляйте обработчики никуда, кроме элемента #mouse.
// P.P.S. Не изменяйте HTML/CSS, подход должен быть общим и работать с любым элементом.

mouse.tabIndex = 0;

mouse.onclick = function() {
  this.style.left = this.getBoundingClientRect().left + 'px';
  this.style.top = this.getBoundingClientRect().top + 'px';

  this.style.position = 'fixed';
};


mouse.onkeydown = function(e) {
  switch (e.key) {
	 case 'ArrowLeft':
		this.style.left = parseInt(this.style.left) - this.offsetWidth + 'px';
		return false;
	 case 'ArrowUp':
		this.style.top = parseInt(this.style.top) - this.offsetHeight + 'px';
		return false;
	 case 'ArrowRight':
		this.style.left = parseInt(this.style.left) + this.offsetWidth + 'px';
		return false;
	 case 'ArrowDown':
		this.style.top = parseInt(this.style.top) + this.offsetHeight + 'px';
		return false;
  }
};