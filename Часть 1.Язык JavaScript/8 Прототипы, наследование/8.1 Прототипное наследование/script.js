// ? Задача 1.Работа с прототипами
// В приведённом ниже коде создаются и изменяются два объекта.
// Какие значения показываются в процессе выполнения кода?

// let animal = {
//   jumps: null
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true
// };

// alert( rabbit.jumps ); // ? (1)

// delete rabbit.jumps;

// alert( rabbit.jumps ); // ? (2)

// delete animal.jumps;

// alert( rabbit.jumps ); // ? (3)
// Должно быть 3 ответа.

// ! Ответ: true, null, undefined.
// ? Задача 2.Алгоритм поиска
// Задача состоит из двух частей.
// У нас есть объекты:

// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 3
// };

// let bed = {
//   sheet: 1,
//   pillow: 2
// };

// let pockets = {
//   money: 2000
// };
// С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).
// Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses или через head.glasses? При необходимости составьте цепочки поиска и сравните их.

let head = {
  glasses: 1
};

let table = {
	__proto__: head,
  pen: 3
};

let bed = {
	__proto__: table,
  sheet: 1,
  pillow: 2
};

let pockets = {
	__proto__: bed,
  money: 2000
};

console.log(pockets.pen);
console.log(bed.glasses);

// !значение glasses быстрей получить через head.glasses,т.к. не надо искать свойство в прототипах. 

// ? Задача 3.Куда будет произведена запись?
// Объект rabbit наследует от объекта animal.
// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

// let animal = {
//   eat() {
//     this.full = true;
//   }
// };

// let rabbit = {
//   __proto__: animal
// };

// rabbit.eat();
// ! Ответ: rabbit
// ? Задача 4.Почему наедаются оба хомяка?
// У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?

// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//   }
// };

// let speedy = {
//   __proto__: hamster
// };

// let lazy = {
//   __proto__: hamster
// };

// Этот хомяк нашёл еду
// speedy.eat("apple");
// alert( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
// alert( lazy.stomach ); // apple

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster,
  stomach: [],
};

let lazy = {
  __proto__: hamster,
  stomach: [],
};
