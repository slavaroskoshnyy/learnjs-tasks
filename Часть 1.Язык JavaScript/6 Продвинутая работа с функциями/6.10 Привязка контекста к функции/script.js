// ? Задача 1.Связанная функция как метод
// Что выведет функция?

// function f() {
//   alert( this ); // ?
// }

// let user = {
//   g: f.bind(null)
// };

// user.g();

// ! Выведиться null т.к. g: f.bind(null) - а "привезал" к null

// ? Задача 2.Повторный bind
// Можем ли мы изменить this дополнительным связыванием?
// Что выведет этот код?

// function f() {
//   alert(this.name);
// }

// f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

// f();

// !Результатом вызова func.bind(context) является особый «экзотический объект» 
// !(термин взят из спецификации), который вызывается как функция и прозрачно передаёт вызов в func, 
// !при этом устанавливая this=context.
// ! {name: "Вася"} - контекст обьекта. .bind( {name: "Петя" } - сделает новую привязку, но не изменит контест.
// ! Ответ: этот код выведит - Вася.


// ? Задача 3.Свойство функции после bind
// В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.
// function sayHi() {
//   alert( this.name );
// }
// sayHi.test = 5;

// let bound = sayHi.bind({
//   name: "Вася"
// });

// alert( bound.test ); // что выведет? почему?

// !Ответ - undefined.
// ! bind - "привязал" name: "Вася" к объекту sayHi и вынес в переменную bound, но в ней нет свойства test.

// ? Задача 4.Исправьте функцию, теряющую "this"
// Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.

// Однако, его вызов приводит к ошибке. Почему?

// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

let user = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));


// ? Задача 5.Использование частично применённой функции для логина
// Это задание является немного усложнённым вариантом одного из предыдущих – Исправьте функцию, теряющую "this".
// Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).
// Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user2 = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(user.login.bind(user, true),user.login.bind(user, false)); 
