// todo - Створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б.
function rectangleArea (a, b) {
    return console.log(a*b);
}
rectangleArea(2,2);

// todo - Створити функцію яка обчислює та повертає площу кола з радіусом r.
function circleArea (r) {
    return console.log(Math.round(Math.PI)*(Math.pow(r, 2)));
}
circleArea(2);

// todo - Створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r.
function cylinderArea (r, h) {
    return console.log(2*Math.round(Math.PI)*r*h);
}
cylinderArea(5, 4);

// todo - Створити функцію яка приймає масив та виводить кожен його елемент.
let arrFruits = ['apple', 'banana', 'pineapple', 'orange']
function displayElements (elements) {
    for (const element of elements) {
        console.log(element);
    }
}
displayElements(arrFruits);

// todo - Створити функцію яка створює параграф з текстом. Текст задати через аргумент.
function textCreation (text) {
    return document.write(`<p>${text}</p>`)
}
textCreation('lorem ipsum');
textCreation('foo bar');

// todo - Створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
function createUl (text) {
    return document.write(
        `<ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>`);
}
createUl('to do list');

// todo - Створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//        Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл).
function createUl2 (text, n) {
            for (let i = 0; i < `${n}`; i++) {
                document.write(`<li>${text}</li>`);
            }
}
createUl2('some txt', 5);

// todo - Створити функцію яка приймає масив примітивних елементів (числа, стрінги, булеві), та будує для них список.
function listFromArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
}
listFromArray(['qwe', 34, false, 'asd']);

// todo - Створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ.
//        Для кожного об'єкту окремий блок.
let usersArr = [
    {id: 2, name: 'Vito', age: 88},
    {id: 1, name: 'Sem', age: 8},
    {id: 5, name: 'Pol', age: 32},
];
function outputsArrayElements (array) {
    for (const item of array) {
        document.write(`<div>${item.id}. NAME - ${item.name}, AGE - ${item.age}</div>`);
    }
}
outputsArrayElements(usersArr);

// todo - Створити функцію яка повертає найменше число з масиву.
function minNumber(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return console.log(min);
}
minNumber([19, -8, 23, 0]);

// todo - Створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//        Приклад: sum([1,2,10]) // -> 13.
function sumArr(arr) {
    let result = 0;
    for (const element of arr) {
        result = result + element
    }
    return result;
}
console.log(sumArr([1, 2, 10]));

// todo - Створити функцію swap(arr, index1, index2). Функція міняє місцями значення у відповідних індексах
//        Приклад: swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap (arr, index1, index2) {
    if (index1 <= arr.length-1 && index2 <= arr.length-1) {
        let newArr = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = newArr;
    } else {
        console.log('Індекс, або індекси які ти хочеш поміняти місцями є поза межами масиву')
    }
    return arr;
}
console.log(swap([11, 22, 33, 44],1, 2));

// todo - Написати функцію обміну валюти exchange(sumUAH, currencyValues, exchangeCurrency)
//        Приклад exchange(10000,[{currency: 'USD', value: 40},{currency: 'EUR', value: 42}],'USD') // => 250
function exchange (sumUAH, currencyValues, exchangeCurrency) {
    if (exchangeCurrency === 'USD') {
        let result = sumUAH/currencyValues[0].value
        console.log(result);
    } else if (exchangeCurrency === 'EUR') {
        let result = sumUAH/currencyValues[1].value
        console.log(result);
    }
}
exchange(10000,[{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}],'USD')