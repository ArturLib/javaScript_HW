// Зробити файл users.html
// З ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// Вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// При кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів),
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX (де ХХХ - айді користувача)

fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        console.log(users);
        for (const user of users) {
            let userInfo = document.createElement('a');
            userInfo.innerText = `${user.id} - ${user.name}`;
            userInfo.href = `./user-details.html?id=` + JSON.stringify(user);
            userInfo.classList.add('userStyle');
            userInfo.style.display = 'flex';
            document.body.appendChild(userInfo);
        }
    })
