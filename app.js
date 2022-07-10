const div = document.querySelector("div");
const links = document.links;
const mark = div.querySelector("mark");
const parentMark = mark.closest("article");

// 1. Найти параграф и получить его текстовое содержимое (только текст!)

const paragraph = document.querySelector("p");
console.log(paragraph.textContent);

// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).

const ul = document.querySelector("ul");

function infoNode(node) {
     
    let type = ""; 
    switch(node.nodeType) {
        case 1: type = "element node";
            break;
        case 3: type = "text node";
            break;
        case 8: type = "comment node";
            break;
    }

    const name = node.nodeName;

    let children = node.children.length;

    return {type, name, children};
};

console.log(infoNode(ul));

// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: 
// getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]

function getTextFromUl(node) {
    let text = [];
    let nodeText = node.textContent.trim().split("\n");
    nodeText.forEach( element => { text.push(element.trim());
    });
    return text;
};

console.log(getTextFromUl(ul));

// 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться).
// Конечный результат: -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

let childrenParagraph = paragraph.childNodes;
childrenParagraph.forEach(element => { 
    if(element.nodeType === 3) 
        element.textContent = "-text-";
});

console.log(paragraph);