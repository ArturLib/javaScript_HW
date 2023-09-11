// todo - Створити функцію конструктор для об'єктів User з полями id, name, surname, email, phone
//        Створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}
let users = [
    new User(22, 'Oleg', 'Sog', 'sog@mail.com', +380931233212),
    new User(33, 'Olya', 'Kox', 'kox@mail.com', +380444321234),
    new User(11, 'Max', 'Smeg', 'maxsmeg@mail.com', +380329990011),
    new User(44, 'Geka', 'Smile', 'smile@mail.com', +380679876543),
    new User(88, 'Dux', 'Nox', 'noxdux@mail.com', +380634534433),
    new User(66, 'Ivanna', 'Nike', 'nike@mail.com', +380508884563),
    new User(77, 'Ksu', 'Ksa', 'ksuksa@mail.com', +380932341234),
    new User(55, 'Mumu', 'Gerasim', 'bulbul@mail.com', +380939119191),
    new User(99, 'Kit', 'Matros', 'alergiya@mail.com', +380500988900),
    new User(111, 'Pes', 'Rex', 'gav@mail.com', +380448487654),
]
console.log(users);


// todo - Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)
let filterById = users.filter(value => (value.id%2 === 0));
console.log(filterById);


// todo - Взяти масив з User[] з попереднього завдання, та відсортувати його по id по зростанню (sort)
let sortById = users.sort((a, b) => (a.id - b.id));
console.log(sortById);


// todo - Створити клас для об'єктів Client з полями id, name, surname, email, phone,
//        order (поле є масивом зі списком товарів)
//        створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clients = [
    new Client(22, 'Oleg', 'Sog', 'sog@mail.com', +380931233212,
        ['p1', 'p2', 'p3', 'p4', 'p5', 'p6']),
    new Client(33, 'Olya', 'Kox', 'kox@mail.com', +380444321234,
        ['s1', 's2', 's3']),
    new Client(11, 'Max', 'Smeg', 'maxsmeg@mail.com', +380329990011,
        ['g1', 'g2']),
    new Client(44, 'Geka', 'Smile', 'smile@mail.com', +380679876543,
        ['l1', 'l2', 'l3', 'l4']),
    new Client(88, 'Dux', 'Nox', 'noxdux@mail.com', +380634534433,
        ['d1', 'd2', 'd3', 'd4', 'd5']),
    new Client(66, 'Ivanna', 'Nike', 'nike@mail.com', +380508884563,
        ['r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7']),
    new Client(77, 'Ksu', 'Ksa', 'ksuksa@mail.com', +380932341234,
        ['m1']),
    new Client(55, 'Mumu', 'Gerasim', 'bulbul@mail.com', +380939119191,
        ['w1', 'w2']),
    new Client(99, 'Kit', 'Matros', 'alergiya@mail.com', +380500988900,
        ['j1', 'j2', 'j3', 'j4']),
    new Client(111, 'Pes', 'Rex', 'gav@mail.com', +380448487654,
        ['u1', 'u2', 'u3']),
]
console.log(clients);


// todo - Взяти масив (Client [] з попереднього завдання).
//        Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortByOrder = clients.sort((a, b) => (a.order.length - b.order.length));
console.log(sortByOrder);


// todo - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
//        рік випуску, максимальна швидкість, об'єм двигуна. Додати в об'єкт функції:
//      -- drive() - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//      -- info() - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//      -- increaseMaxSpeed(newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//      -- changeYear(newValue) - змінює рік випуску на значення newValue
//      -- addDriver(driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car (model, producer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`Ідемо зі швидкістю ${this.maxSpeed} км на годину`)
    };
    this.info = function () {
        console.log(`
            Модель - ${this.model},
            Виробник - ${this.producer},
            Рік випуску - ${this.year},
            Максимальна швидкість - ${this.maxSpeed},
            Об'єм двигуна - ${this.engineCapacity}`
        )
    };
    this.increaseMaxSpeed = function (newSpeed) {
        console.log(this.maxSpeed += newSpeed);
    };
    this.changeYear = function (newValue) {
        console.log(this.year = newValue);
    };
    this.addDriver = function (driver) {
        console.log(this.driver = driver);
    };
}
let volvo = new Car('Volvo XC70', 'Volvo Cars', 2015, 180, 2.4)
console.log(volvo);
volvo.drive();
volvo.info();
volvo.increaseMaxSpeed(20);
volvo.changeYear(1988);
volvo.addDriver({name: 'Nik', age: 24});
console.log(volvo);


// todo - (Те саме, тільки через клас)
//        Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник,
//        рік випуску, максимальна швидкість, об'єм двигуна. Додати в об'єкт функції:
//      -- drive() - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//      -- info() - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//      -- increaseMaxSpeed(newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//      -- changeYear(newValue) - змінює рік випуску на значення newValue
//      -- addDriver(driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car2 {
    constructor(model, producer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    };
    drive () {
        console.log(`Ідемо зі швидкістю ${this.maxSpeed} км на годину`)
    };
    info () {
        console.log(`
            Модель - ${this.model},
            Виробник - ${this.producer},
            Рік випуску - ${this.year},
            Максимальна швидкість - ${this.maxSpeed},
            Об'єм двигуна - ${this.engineCapacity}`
        )
    };
    increaseMaxSpeed (newSpeed) {
        console.log(this.maxSpeed += newSpeed);
    };
   changeYear (newValue) {
        console.log(this.year = newValue);
    };
    addDriver (driver) {
        console.log(this.driver = driver);
    };
}

let audi = new Car2('Audi A6', 'Audi', 2020, 250, 2.0)
console.log(audi);
audi.drive();
audi.info();
audi.increaseMaxSpeed(50);
audi.changeYear(2022);
audi.addDriver({name: 'Michael Schumacher', age: 45});
console.log(audi);


// todo - Створити клас/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//        Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//        За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//        Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize
    }
}

let cinderellas = [
     new Cinderella('Polina',19,36),
     new Cinderella('Oksa',22,39),
     new Cinderella('Katya',18,36.5),
     new Cinderella('Lida',23,38),
     new Cinderella('Nika',20,38),
     new Cinderella('Galina',22,37),
     new Cinderella('Ira',25,37),
     new Cinderella('Norma',17,35),
     new Cinderella('Dina',19,40),
     new Cinderella('Nafanja',22,39),
];
console.log(cinderellas);

class Prince {
    constructor(name, age, findShoe) {
        this.name = name;
        this.age = age;
        this.findShoe = findShoe
    }
}

let prince = new Prince('Ivan', 30, 35);
console.log(prince);

console.log('______________ перший спосіб пошуку__________________');
let findShoeSize = cinderellas.find(function (cinderella) {
    return cinderella.footSize === prince.findShoe
});
console.log('Congratulations, here\'s yours', findShoeSize);

console.log('_______________спосіб з cb___________________________');
function cinderellasFind(find, cb) {
    let love = cinderellas.find(function (cinderella) {
        return cinderella.footSize === prince.findShoe;
    });
    console.log(love);
    cb();
}
cinderellasFind('', function () {
    console.log('Congratulations, you found your Cinderella')
});