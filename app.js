const div = document.querySelector("div");
const mark = div.querySelector("mark");
const parentMark = mark.closest("article");

// 1. Найти в коде список ul и добавить класс “list”

const list = document.querySelector("ul");
list.classList.add("list");


// 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link

const link = document.querySelector("ul ~ a");
link.setAttribute("id", "link");


// 3. На li через один (начиная с самого первого) установить класс “item”

const allLi = document.querySelectorAll("li");

for(let x = 0; x < allLi.length; x++) {
    if(x % 2)
        allLi[x].classList.add("item");
};


// 4. На все ссылки в примере установить класс “custom-link”

const [...links] = document.links;
links.forEach( element => { element.classList.add("custom-link")});