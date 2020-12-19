// Здесь я разбирался с разницей между if else и switch

let num = 22;

if (num < 19) {
    console.log("Мало!");
} else if (num > 20) {
    console.log("Много!");
} else if (num == 20) {
    console.log("В самый раз!");
} else {
    console.log("Что-то пошло не так!");
}

/*switch (num) {
    case num < 19:
        console.log("Мало!");
        break;
    case num > 20:
        console.log("Много!");
        break;
    case 20:
        console.log("В самый раз!");
        break;
    default:
        console.log("Что-то пошло не так!");
        break;
}  ТАК НЕ РАБОТАЕТ */

// Ниже пример с выводом prompt значения в консоль через else if

let a = prompt("Введите любое числовое значение(можно отрицательное и ноль)", ' ');

if (a < 0) {
    console.log("Значение меньше нуля!");
} else if (a == 0) {
    console.log("Это ноль!");
} else if (a > 0) {
    console.log("Значение больше нуля!");
} else {
    console.log("Вы не ввели число!");
}

// Запись if else через тернарный оператор

let b = 1;
let z;
b > 0 ? z = true : z = false;
console.log(z);

// Практика &&, ||, !.

let x = 5,
    y = 3;
console.log((x > y) && (x === y));
console.log(true && 0 && ('a' < 'Z'));
console.log((a > b) || true || ('2' == 2) || (false == ''));
console.log((a < b) && (0 == false));
console.log(!(2 == 2) || (true && '')); //тут какая-то ошибка в презе

// Практика switch

let c = prompt("Введите число от 1 до 3", '');

switch (Number(c)) {
    case 1:
        console.log("a");
        break;
    case 2:
        console.log("b");
        break;
    case 3:
        console.log("c");
        break;
    default:
        console.log("z");
        break;
}

// Практика циклов

for (let i = 1; i <= 9; i++) {
    let n = i * i;
    console.log(n);
}

// Циклы while do

let i = 1;
let n = 1;
do {
    n = i * i;
    i++;
    console.log(n);
} while (i <= 9);