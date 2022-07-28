// 1. При наведении на любой из блоков с классом .box все его дочерние элементы должны поменять свой фон на один из списка. ВАЖНО, только дочерние относительно блока на который навели мышь.

// Вот массив (список) рандомных цветов:
// ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];

// 2. Возращаете фон обратно когда пользователь уводит мышку с блока.

// 3. Добавление фона из первой части задания сделать с задержкой в 200мс. Т.е каждый последующий блок должен изменить свой фон за 200мс позже предыдущего. Например если первый блок поменял через 200мс то следующий должен поменять через 400 и т.д.

const colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];
const boxes = document.querySelectorAll(".box");
const defaultColor = "#fff";

//Случайный выбор фона и назначение его элементу
function choiceRandomColor(e) {
  const colorIndex = Math.floor( Math.random() * colors.length );
  e.style.background = colors[colorIndex];
}
//Установка фона в прежнее состояние
function changeDefaultColor(e) {
  const currentBox = e.target;
  currentBox.style.background = defaultColor;
}


function changeColor(e) {

  const currentBox = e.target;
  //создаем массив и добавляем в него элементы потомков, в которых нужно изменить цвета
  let elements = [currentBox];
  let nextChild = currentBox.firstElementChild;
  //Проверяем есть ли потомки у элемента и добавляем каждый в конец массива
  while(nextChild) {
    elements.push(nextChild);
    nextChild = nextChild.firstElementChild;
  } 
  //Проходим по масиву потомков и изменяем цвет через заданный интервал времени
  elements.forEach((el, index) => setTimeout(choiceRandomColor, 200 * (index + 1), el));
}

boxes.forEach( elem => elem.addEventListener('mouseenter', changeColor));
boxes.forEach( elem => elem.addEventListener('mouseleave', changeDefaultColor));