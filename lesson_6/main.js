// todo - Знайти та вивести довжину наступних стрінгових значень
//        'hello world', 'lorem ipsum', 'javascript is cool'
let stringLength = (string) => console.log(string.length);
stringLength('hello world');
stringLength('lorem ipsum');
stringLength('javascript is cool');


// todo - Перевести до великого регістру наступні стрінгові значення
//        'hello world', 'lorem ipsum', 'javascript is cool'
let stingToUpperCase = (string) => console.log(string.toUpperCase());
stingToUpperCase('hello world');
stingToUpperCase('lorem ipsum');
stingToUpperCase('javascript is cool');


// todo - Перевести до нижнього регістру настипні стрінгові значення
//        'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let stingToLowerCase = (string) => console.log(string.toLowerCase());
stingToLowerCase('HELLO WORLD');
stingToLowerCase('LOREM IPSUM');
stingToLowerCase('JAVASCRIPT IS COOL');


// todo - Є "брудна" стрінга let str = ' dirty string   '. Почистити її від зайвих пробілів.
let stringCleaner = (string) => console.log(string.trim());
stringCleaner(' dirty string   ');


// todo - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//        let str = 'Ревуть воли як ясла повні';
//        let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';
let stringToArray = (string) => console.log(string.split(' '));
stringToArray(str);


// todo - Є масив чисел [10, 8, -7, 55, 987, -1011, 0, 1050, 0].
//        За допомоги map перетворити всі об'єкти в масиві на стрінгові.
let someArray = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let arrayToString = (arr) => console.log(arr.map(value => value.toString()).join(', '));
arrayToString(someArray);


// todo - Створити функцію sortNums(direction), яка приймає масив чисел, та сортує його від більшого до меншого,
//        або навпаки в залежності від значення аргументу direction.
//        let nums = [11, 21, 3];
//        sortNums(nums, 'ascending')  // [3, 11, 21]
//        sortNums(nums, 'descending') // [21, 11, 3]
let nums = [11, 21, 3];
let sortArray = function (arr, direction) {
    if (direction === 'ascending') {
        console.log((arr.sort((a, b) => a - b)));
    } else if (direction === 'descending') {
        console.log((arr.sort((a, b) => b - a)));
    }
}
sortArray(nums,'descending');
sortArray(nums,'ascending');


// ====================================================================================================================
// todo - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortMonthDuration = coursesAndDurationArray.sort((a, b) => {
    return a.monthDuration - b.monthDuration;
})
console.log(sortMonthDuration);

// -- відфільтрувати, залишивши тільки курси з тривалістю більше 5 місяців
let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filter);

// -- за допомоги map перетворити кожен елемент на наступний тип {id, title, monthDuration}
function getRandom() {
    return Math.floor(Math.random()*100);
}
let mapPlusId = coursesAndDurationArray.map(value => {
    value.id = getRandom();
    return value;
});
console.log(mapPlusId);
// ====================================================================================================================


// ====================================================================================================================
// todo - Описати колоду карт (від 6 до туза без джокерів)
//      -- знайти піковий туз
//      -- всі шістки
//      -- всі червоні карти
//      -- всі бубнові
//      -- всі трефи від 9 та більше
//      {
//          cardSuit: '', // 'spade', 'diamond', 'heart', 'clubs'
//          value: '', // '6'-'10', 'ace', 'jack', 'queen', 'king', 'joker'
//          color: '', // 'red', 'black'
//       }

let deckCards = [
    {value: 6, cardSuit: 'spade', color: 'black'},
    {value: 6, cardSuit: 'diamond', color: 'red'},
    {value: 6, cardSuit: 'heart', color: 'red'},
    {value: 6, cardSuit: 'clubs', color: 'black'},

    {value: 7, cardSuit: 'spade', color: 'black'},
    {value: 7, cardSuit: 'diamond', color: 'red'},
    {value: 7, cardSuit: 'heart', color: 'red'},
    {value: 7, cardSuit: 'clubs', color: 'black'},

    {value: 8, cardSuit: 'spade', color: 'black'},
    {value: 8, cardSuit: 'diamond', color: 'red'},
    {value: 8, cardSuit: 'heart', color: 'red'},
    {value: 8, cardSuit: 'clubs', color: 'black'},

    {value: 9, cardSuit: 'spade', color: 'black'},
    {value: 9, cardSuit: 'diamond', color: 'red'},
    {value: 9, cardSuit: 'heart', color: 'red'},
    {value: 9, cardSuit: 'clubs', color: 'black'},

    {value: 10, cardSuit: 'spade', color: 'black'},
    {value: 10, cardSuit: 'diamond', color: 'red'},
    {value: 10, cardSuit: 'heart', color: 'red'},
    {value: 10, cardSuit: 'clubs', color: 'black'},

    {value: 'jack', cardSuit: 'spade', color: 'black'},
    {value: 'jack', cardSuit: 'diamond', color: 'red'},
    {value: 'jack', cardSuit: 'heart', color: 'red'},
    {value: 'jack', cardSuit: 'clubs', color: 'black'},

    {value: 'queen', cardSuit: 'spade', color: 'black'},
    {value: 'queen', cardSuit: 'diamond', color: 'red'},
    {value: 'queen', cardSuit: 'heart', color: 'red'},
    {value: 'queen', cardSuit: 'clubs', color: 'black'},

    {value: 'king', cardSuit: 'spade', color: 'black'},
    {value: 'king', cardSuit: 'diamond', color: 'red'},
    {value: 'king', cardSuit: 'heart', color: 'red'},
    {value: 'king', cardSuit: 'clubs', color: 'black'},

    {value: 'ace', cardSuit: 'spade', color: 'black'},
    {value: 'ace', cardSuit: 'diamond', color: 'red'},
    {value: 'ace', cardSuit: 'heart', color: 'red'},
    {value: 'ace', cardSuit: 'clubs', color: 'black'},
]

// -- знайти піковий туз
let aceSpade = deckCards.filter(value => (value.value === 'ace' && value.cardSuit === 'spade'));
console.log(aceSpade);
// -- всі шістки
let sixes = deckCards.filter(value => (value.value === 6));
console.log(sixes);
// -- всі червоні карти
let redCards = deckCards.filter(value => (value.color === 'red'));
console.log(redCards);
// -- всі бубнові
let diamondCards = deckCards.filter(value => (value.cardSuit === 'diamond'));
console.log(diamondCards);
// -- всі трефи від 9 та більше
let clubsCards = deckCards.filter(value => ((value.value >= 9 && value.cardSuit === 'clubs')
    || (value.value === 'jack' && value.cardSuit === 'clubs')
    || (value.value === 'queen' && value.cardSuit === 'clubs')
    || (value.value === 'king' && value.cardSuit === 'clubs')
    || (value.value === 'ace' && value.cardSuit === 'clubs')
));
console.log(clubsCards); // - примітка, тут я хочу знайти рішення, щоб додати умову пошуку value по string
// ====================================================================================================================


// =========================
// todo - Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
//       {
//           spades:[],
//           diamonds:[],
//           hearts:[],
//           clubs:[]
//       }
let reduceDeckCards = deckCards.reduce(function (accumulator, value) {
    if (value.cardSuit === 'spade') {
        accumulator.spades.push(value)
    } else if (value.cardSuit === 'diamond') {
        accumulator.diamonds.push(value)
    } else if (value.cardSuit === 'heart') {
        accumulator.hearts.push(value)
    } else if (value.cardSuit === 'clubs') {
        accumulator.clubs.push(value)
    }
    return accumulator;
},{spades:[], diamonds:[], hearts:[], clubs:[]});
console.log(reduceDeckCards)
// =========================


// =========================
// todo - Взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html','css','js','mysql','mongodb','react','angular','aws','docker','git','node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html','css','js','mysql','mongodb','angular','aws','docker','git','java core','java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html','css','js','mysql','mongodb','angular','aws','docker','python core','python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html','css','js','mysql','mongodb','git','QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html','css','js','mysql','mongodb','react','angular','aws','docker','git','node.js','python','java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html','css','js','mysql','mongodb','react','angular','aws','docker','git','sass']
    }
];
// -- написати пошук всіх об'єктів, в який в modules є sass
coursesArray.map(value => (value.modules).map(item => {
    if (item === 'sass') {
        return console.log(value)
    }
}))
// -- написати пошук всіх об'єктів, в який в modules є docker
coursesArray.map(value => (value.modules).map(item => {
    if (item === 'docker') {
        return console.log(value)
    }
}))
// =========================


