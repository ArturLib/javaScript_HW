// - Створити змінні.
//   Присвоїти кожному з них значення: 'hello', 'owu', 'com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log

let hello = 'hello';
console.log(hello);

let owu = 'owu';
console.log(owu);

let com = 'com';
console.log(com);

let ua = 'ua';
console.log(ua);

let one = 1;
console.log(one);

let ten = 10;
console.log(ten);

let numberMinus999 = -999;
console.log(numberMinus999);

let number123 = 123;
console.log(number123);

let pi = 3.14;
console.log(pi);

let number2Point7 = 2.7;
console.log(number2Point7);

let number16 = 16;
console.log(number16);

let booleanTrue = true;
console.log(booleanTrue);

let booleanFalse = false;
console.log(booleanFalse);

//--------------------------------------------------------------------------------------------------------------//


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
//   З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Arthur';
let lastName = 'Liber';
let middleName = 'Bohdanovich';

let person = `${lastName} ${firstName} ${middleName}`
console.log(person);

//--------------------------------------------------------------------------------------------------------------//


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let a = 100;
console.log(typeof a);

let b = '100';
console.log(typeof b);

let c = true;
console.log(typeof c);

//--------------------------------------------------------------------------------------------------------------//


// - Додаткове для тих хто цікавився prompt`oм
//   За допомогою 3-х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//   Вивести в консоль.

let userLastName = prompt('Enter your last name')
let userFirstName = prompt('Enter your name')
let userMiddleName = prompt('Enter your middle name')

console.log(userLastName, userFirstName, userMiddleName)

//--------------------------------------------------------------------------------------------------------------//
