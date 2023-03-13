// ? Задача 1.Изменяем "prototype"
// В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.
// Сначала у нас есть такой код:
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// alert( rabbit.eats ); // true
// Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype = {};

// alert( rabbit.eats ); // ? true
// …А если код такой (заменили одну строчку)?

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype.eats = false;

// alert( rabbit.eats ); // ? false
// Или такой (заменили одну строчку)?

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete rabbit.eats;

// alert( rabbit.eats ); // ? true
// Или, наконец, такой:

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete Rabbit.prototype.eats;

// alert( rabbit.eats ); // ?indefined

// ? Задача 2.Создайте новый объект с помощью уже существующего
// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.
// Можем ли мы сделать так?

// let obj2 = new obj.constructor();
// Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. И пример функции-конструктора, с которой такой код поведёт себя неправильно.

function User(name) {
	this.name = name;
 }
 
 let user = new User('John');
 let user2 = new user.constructor('Pete');
 
 alert( user2.name );

 
//  function User(name) {
// 	this.name = name;
//  }
//  User.prototype = {}; 
 
//  let user = new User('John');
//  let user2 = new user.constructor('Pete');
 
//  alert( user2.name );