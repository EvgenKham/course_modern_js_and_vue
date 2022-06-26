// document.body.style.background = "";
// const div = document.querySelector('div');
// const titles = document.querySelectorAll('h1');
// const h1 = document.getElementsByTagName('h1');
// console.log(div);
// console.dir(h1);
// console.log(titles);
// console.log(Array.from(titles));
// console.log(Array.prototype.slice.call(titles));
// console.log([...titles]);


// Зная структуру html, с помощью изученных
// методов получить (в консоль):
// 1. head
// 2. body
// 3. все дочерние элементы body и вывести их в
// консоль.
// 4. первый div и все его дочерние узлы
// а) вывести все дочерние узлы в консоль
// б) вывести в консоль все дочерние узлы,
// кроме первого и последнего
// Для навигации по DOM использовать методы,
// которые возвращают только элементы

// 1
const headElement = document.head;
console.dir(headElement);

// 2
const bodyElement = document.body;
console.dir(bodyElement);

// 3
const childrenBody = document.body.children;
console.dir(childrenBody);

// 4
const firstDiv = document.querySelector("div");
const allElementFirstOfDiv = firstDiv.children;

console.dir([...allElementFirstOfDiv]);
console.dir([...allElementFirstOfDiv].slice(1,3));


// 1. Создать функцию, которая принимает два элемента. 
// Функция проверяет, является ли первый элемент родителем для второго:

// isParent(parent, child);
// isParent(document.body.children[0], document.querySelector('mark'));
// true так как первый див является родительским элементом для mark

// isParent(document.querySelector('ul'), document.querySelector('mark'));
// false так ul НЕ является родительским элементом для mark
// Функция принимает только DOM объекты.
 
function isParent(parent, child) {
    let curentParent = child.parentElement;
    let isParent = false;

    while(curentParent) {
        isParent = curentParent === parent;

        if(isParent) {
            curentParent = null;
        } else {
            curentParent = curentParent.parentElement;
        }
    }

    return isParent;
}

console.log(isParent(document.body.children[0], document.querySelector('mark')));
console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));


// 2. Получить список всех ссылок, которые не находятся внутри списка ul



console.log();

// 3. Найти элемент, который находится перед и после списка ul