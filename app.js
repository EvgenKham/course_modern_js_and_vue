// Создать форму добавления пользователя состоящая из полей name, email, username, phone, website.
// При сабмите формы сделать POST запрос на сервер. 
// После ответа от сервера добавлять полученного пользователя на страницу.

const btn = document.querySelector("button");
const container = document.querySelector(".container");
const form = document.querySelector("#user");

btn.addEventListener("click", renderAboutUser);
container.addEventListener("click", displayAboutUser);
form.addEventListener("submit", onFormSubmitUser);

function getUsers(cb) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.onload = function() {
        const response = JSON.parse(xhr.responseText);
        cb(response);
    }

    xhr.onerror = function() {
        console.log("error");
    };
   
    xhr.send();
}

function createUser(body, cb) {
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "https://jsonplaceholder.typicode.com/users");

    xhr.onload = function() {
        const response = JSON.parse(xhr.responseText);
        cb(response);
    }
    
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    xhr.onerror = function() {
        console.log("error");
    }

    xhr.send(JSON.stringify(body));
}

function userTamplate(user){
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
    return person;
}

function renderAboutUser() {
    getUsers((response) => {
        const fragment = document.createDocumentFragment();
        response.forEach(user => {
            const person = userTamplate(user);
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

function onFormSubmitUser(e){
    e.preventDefault();

    const user = {
        name: form.elements["name"].value,
        email: form.elements["email"].value,
        username: form.elements["username"].value,
        phone: form.elements["phone"].value,
        website: form.elements["website"].value, 
    }

    form.reset();

    createUser(user, response => {
        const user = userTamplate(response);
        container.prepend(user);
    })
}

