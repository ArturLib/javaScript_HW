// -----------------------------------------------Масиви та об'єкти:--------------------------------------------------//
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let someArr = ['Mark', 10, true, 'school', 'rain', 'f-16', 23, 'boolean', 'string', false]
    console.log(someArr);
    console.log(someArr[0]);
    console.log(someArr[1]);
    console.log(someArr[2]);
    console.log(someArr[3]);
    console.log(someArr[4]);
    console.log(someArr[5]);
    console.log(someArr[6]);
    console.log(someArr[7]);
    console.log(someArr[8]);
    console.log(someArr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту: title, pageCount, genre.
let romeoAndJuliet = {
    title: 'Romeo and Juliet',
    pageCount: 208,
    genre: 'tragedy and melodrama',
};
    console.log(romeoAndJuliet);

let othello = {
    title: 'Othello',
    pageCount: 160,
    genre: 'tragedy',
};
    console.log(othello);

let kingLear = {
    title: 'King Lear',
    pageCount: 280,
    genre: 'tragedy',
};
    console.log(kingLear);

// - Створити 3 об'єкти які описують книги. Поля об'єкту: title, pageCount, genre, authors.
//   Поле "автори" - являється масивом. Кожен автор має поля name та age.
let marshmallow = {
    title: 'Don’t Eat The Marshmallow Yet!. The Secret to Sweet Success in Work and Life',
    pageCount: 112,
    genre: 'scientific',
    authors: [
        {name: 'Joaquim de Posada', age: 68},
        {name: 'Ellen Singer', age: 65},
    ]
};
console.log(marshmallow);

let unbreakableCode = {
    title: 'George and the Unbreakable Code',
    pageCount: 344,
    genre: 'educational books',
    authors: [
        {name: 'Stephen William Hawking', age: 76},
        {name: 'Lucy Hawking', age: 52},
    ]
};
console.log(unbreakableCode);

let parodi = {
    title: 'Seis problemas para don Isidro Parodi',
    pageCount: 224,
    genre: 'parody detective story',
    authors: [
        {name: 'Jorge Luis Borges', age: 86},
        {name: 'Adolfo Bioy Casares', age: 84},
    ]
};
console.log(parodi);

// - Створити масив з 10 об'єктами які описують сутність "користувач". Поля: name, username, password.
//   Вивести в консоль пароль кожного користувача
let someUsers = [
    {name: 'Nastya', username: 'asa', password: 341},
    {name: 'Volodya', username: 'vol', password: 942},
    {name: 'Andrew', username: 'drew', password: 'ngr45'},
    {name: 'Alexei', username: 'alex', password: 999},
    {name: 'Svetlana', username: 'sv', password: 'svl'},
    {name: 'Bohdan', username: 'bd', password: 777},
    {name: 'Myron', username: 'mrg', password: 321},
    {name: 'Simon', username: 'sims', password: 'sims222'},
    {name: 'Pumbaa', username: 'pumb', password: 'pumb'},
    {name: 'Augie', username: 'ogg', password: 'someOgg'},
]
console.log(someUsers[0].password);
console.log(someUsers[1].password);
console.log(someUsers[2].password);
console.log(someUsers[3].password);
console.log(someUsers[4].password);
console.log(someUsers[5].password);
console.log(someUsers[6].password);
console.log(someUsers[7].password);
console.log(someUsers[8].password);
console.log(someUsers[9].password);
//--------------------------------------------------------------------------------------------------------------------//


// --------------------------------------------Логічні розгалуження:--------------------------------------------------//
// - Є змінна х, якій ви надаєте довільне числове значення.
//   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//   Перевірте скрипт при a, що дорівнює 1, 0, -3.
let x = 1;
if (x === 0) {
    console.log('Не вірно!')
} else
    (console.log('Вірно!'));

let y = 0;
if (y === 0) {
    console.log('Не вірно!')
} else
    (console.log('Вірно!'));

let a = -3;
if (a === 0) {
    console.log('Не вірно!')
} else
    (console.log('Вірно!'));

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
//   до якої четверті години попадає число (в першу, другу, третю або четверту частину години).
let time = +prompt('Enter a number from 1 to 59 including!')
if (time >= 1 && time <= 14) {
    console.log(`The number you entered is - ${time} and it belongs to the FIRST quarter of an hour!`)
} else if (time >= 15 && time <= 29) {
    console.log(`The number you entered is - ${time} and it belongs to the SECOND quarter of an hour!`)
} else if (time >= 30 && time <= 44) {
    console.log(`The number you entered is - ${time} and it  belongs to the THIRD quarter of an hour!`)
} else if (time >= 45 && time <= 59) {
    console.log(`The number you entered is - ${time} and it  belongs to the FOURTH quarter of an hour!`)
} else (console.log(`I asked you to enter a number between 1 and 59! And what did you enter? You entered - ${time}!`))

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це число
//   (у першу, другу чи третю).
let day = +prompt('Enter a day of the month from 1 to 31!')
if (day >= 1 && day <= 10) {
    console.log('You entered the day of the month that belongs to the FIRST decade of the month!')
} else if (day >= 11 && day <= 20) {
    console.log('You entered the day of the month that belongs to the SECOND decade of the month!')
} else if (day >= 21 && day <= 31) {
    console.log('You entered the day of the month that belongs to the THIRD decade of the month!')
} else (console.log('You didn\'t enter what I asked for!'))

// - Скласти розклад на тиждень за допомогою switch. Користувач вводить порядковий номер дня тижня і на екрані
//   відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let weekday = prompt('Enter the day of the week!').toLowerCase()
switch (weekday) {
    case 'monday':
        console.log('Today you are learning HTML');
        break;
    case 'tuesday':
        console.log('Today you are learning CSS');
        break;
    case 'wednesday':
        console.log('Today you are learning JavaScript');
        break;
    case 'thursday':
        console.log('Today you are learning React');
        break;
    case 'friday':
        console.log('Today you are learning Node');
        break;
    case 'saturday':
        console.log('Today you are learning TypeScript');
        break;
    case 'sunday':
        console.log('You should rest after such a busy week! Drink some beer)');
        break;
    default:
        console.log('You did not enter the day of the week!')
}

// - Користувач вводить або має два числа.
//   Потрібно знайти та вивести максимальне число з тих двох.
//   Також потрібно врахувати коли введені рівні числа.
let firstNumber = +prompt('Enter the first number!')
let secondNumber = +prompt('Enter the second number')
if (firstNumber > secondNumber) {
    console.log(`${firstNumber} - this is the maximum number you entered`)
} else if (firstNumber < secondNumber) {
    console.log(`${secondNumber} - this is the maximum number you entered`)
} else if (firstNumber === secondNumber) {
    console.log('You entered two identical numbers')
} else (console.log('You did not enter a number'))

// - Є змінна z, яка може прийняти будь-яке значення (стрінг, число, undefined, null і тд включно).
//   Напишіть код який, за допомоги оператора || буде присвоювати змінній z значення "default",
//   якщо значення змінної z являється falsy (хибноподібні, тобто приводиться до false)
let z = {};
if (z === undefined || z === null || z === 0 || z === '' || z === false || z === NaN) {
    z = 'default';
    console.log(z);
} else (console.log(z))

// - З файлу arrays.js (лежить у папці 2023 plan) взяти масив coursesAndDurationArray.
//   За допомоги іф перевірити кожен його елемент на тривалість навчання.
//   У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[0].title} - Super`)
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[1].title} - Super`)
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[2].title} - Super`)
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[3].title} - Super`)
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[4].title} - Super`)
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[5].title} - Super`)
}