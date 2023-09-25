let userUrl = new URL(location.href);

let userJSON = userUrl.searchParams.get('id');
let user = JSON.parse(userJSON);
let userDivEl = document.createElement('div');
userDivEl.innerText =
    `
    id: ${user.id};
    NAME - ${user.name};
    USER NAME - ${user.username};
    email - ${user.email};
    address: city - ${user.address.city}, street - ${user.address.street};
    company - ${user.company.name}
    phone: ${user.phone};
    website: ${user.website};
    `
document.body.appendChild(userDivEl);