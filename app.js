// 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
// <ul>
// <li><a href="#">Link1</a></li>
// ...
// <li class=”new-item”>item 5</li>
// <li class=”new-item”>item 6</li>
// </ul>
// Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.

const ul = document.querySelector("ul");
const countLi = ul.children.length;
const countNewLi = 3;

for(let i = countLi; i < countLi + countNewLi; i++) {
    const li = document.createElement("li");
    li.className = "new-item";
    li.textContent = `item ${i+1}`;
    ul.append(li);
}

// 2. В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong).

const allLinks = document.links;

for(let i = 0; i < allLinks.length; i++){

    let parent = allLinks[i].parentElement;
    while(parent){

        if(parent.tagName === "UL"){
            const strong = document.createElement("strong");
            strong.textContent = allLinks[i].textContent;
            allLinks[i].firstChild.replaceWith(strong);
            break;
        }
        parent = parent.parentElement;
    }
}


// 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). 
// В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement. 

const img = document.createElement("img");
img.setAttribute("src", "colibri.jpg");
img.setAttribute("alt", "Image doesn't loaded");
document.body.prepend(img);

// 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green

const mark = document.querySelector("mark");
mark.append(" green");
mark.classList.add("green");

// 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)

const list = document.querySelector("ul");

const sortedItems = [...list.children].sort((prev, next) => {
    return prev.textContent > next.textContent ? -1 : -1 ;
});

list.innerHTML = "";

sortedItems.forEach(element => list.append(element));
