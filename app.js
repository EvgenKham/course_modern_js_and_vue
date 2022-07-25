// Реализовать примитивный дропдаун. Изначально все dropdown-menu скрыты через класс .d-none. 
// При клике на dropdown-item должен отображаться блок dropdown-menu, который вложен именно в тот dropdown-item
// на котором произошел клик. При повторном клике на этот же dropdown-item блок dropdown-menu должен закрыться.
// При клике на любой другой dropdown-item уже открытый dropdown-menu должен закрываться,
// а на тот который кликнули открываться.

//---Мой пример решения---
// Вопросы: правильно ли решать через "навешивание" обработчика события на общего предка(<ul class="menu">)?
// Обязательно ли использовать перебор всех <li class="dropdown-item">, как препод. примере?
// Почему у меня работает через target, а в препод. примере через currentTarget?
// const menu = document.querySelector(".menu");
// let openedMenu = null;
// let dropdownMenu = null;

// menu.addEventListener('click', e => {

//     let changed = null;

//     if(e.target.className === "dropdown-item"){
//         dropdownMenu = e.target.querySelector(".dropdown-menu");
//         changed = dropdownMenu.classList.toggle("d-none");
//     };
//     if(openedMenu && openedMenu !== dropdownMenu) {
//         openedMenu.classList.add("d-none");
//     };
//     if(!changed){
//         openedMenu = dropdownMenu;
//     };
// });


// !!!!!Два одновременно примера не работают, нужно включать по одному!!!!!
// ---Пример решения от преподавателя---
const dropdownItems = document.querySelectorAll('.dropdown-item');
// В данной переменной мы будем хранить текущее открытое меню
let currentOpenedMenu = null;

function toggleDropdownMenu(e) {
  // получаем блок меню внутри .dropdown-item
  const menu = e.currentTarget.querySelector('.dropdown-menu');
  // метод toggle возвращает булевое значение, если клас удален то вернет false а если добавлен то true. Это значение мы сохраняем в переменную
  const isAdded = menu.classList.toggle('d-none');
  // если в currentOpenedMenu уже есть блок и он не равен текущем menu то мы его скрываем
  if (currentOpenedMenu && currentOpenedMenu !== menu) {
    currentOpenedMenu.classList.add('d-none');
  }
  // Если класс d-none был удален то значет меню видимо и мы его сохраняем в переменную currentOpenedMenu
  if (!isAdded) {
    currentOpenedMenu = menu;
  }
}

dropdownItems.forEach(d => d.addEventListener('click', toggleDropdownMenu));