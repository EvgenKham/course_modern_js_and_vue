// Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com. 
// Получив ответ от сервера вывести имена пользователей на страницу. 
// При клике на имя пользователя в произвольном месте должна появиться подробная информация о нем. 
// Для визуальной части можно использовать bootstrap или другие фреймворки. 

const btn = document.querySelector("button");
const container = document.querySelector(".container");

btn.addEventListener("click", renderAboutUser);
container.addEventListener("click", displayAboutUser);

function getUsers(cb) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.onload = function() {
        if(xhr.status !== 200) {
            console.log("Error", xhr.status);
            return;
        }
        const response = JSON.parse(xhr.responseText);
        cb(response);
    }

    xhr.onerror = function() {
        console.log("error");
    };
   
    xhr.send();
}

function renderAboutUser() {
    getUsers((response) => {
        const fragment = document.createDocumentFragment();
        response.forEach(user => {
            const person = document.createElement("div");
            person.classList.add("user");

            const name = document.createElement("p");
            name.classList.add("name");
            
            name.textContent = `name: ${user.name}`;

            const aboutUser = document.createElement("div");
            aboutUser.classList.add("about-user", "d-none");

            const userName = document.createElement("p");
            userName.textContent = `username: ${user.username}`;

            const email = document.createElement("p");
            email.textContent = `email: ${user.email}`;

            const phone = document.createElement("p");
            phone.textContent = `phone: ${user.phone}`

            const website = document.createElement("p");
            website.textContent = `website: ${user.website}`;
            
            aboutUser.appendChild(userName);
            aboutUser.appendChild(email);
            aboutUser.appendChild(phone);
            aboutUser.appendChild(website);
            
            person.appendChild(name);
            person.appendChild(aboutUser);
            fragment.appendChild(person);
        });

        container.appendChild(fragment);
    });
}

function displayAboutUser (e) {
    if(e.target.className === "name") {
        changedUser = e.target;
        const aboutUser = changedUser.nextElementSibling;
        aboutUser.classList.toggle("d-none");
   }
}